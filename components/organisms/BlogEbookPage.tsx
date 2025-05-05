"use client";

import useEbookStore from "@/store/useEbookStore";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BlogEbookCard from "../molecules/BlogEbookCard";
import { ScrollArea } from "../atoms/scroll-area";
import { IEbook } from "@/interfaces/ebook/ebook.interface";
import ViewEbookDetailsDialog from "../molecules/ViewEbookDetailsDialog";
import SearchInput from "../atoms/SearchInput";
import { debounce } from "lodash";

const BlogEbookPage = () => {
  const [selectedEbook, setSelectedEbook] = useState<IEbook>();
  const [isViewDetailsDialogOpen, setIsViewDetailsDialogOpen] =
    useState<boolean>(false);
  const { fetchEbooksBlog, ebooks, isLoading, nextPage, setBlogQuery } =
    useEbookStore();
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const debouncedSetQuery = useMemo(() => {
    return debounce((val: string) => {
      setBlogQuery(val);
    }, 400);
  }, [setBlogQuery]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedSetQuery(e.target.value);
    },
    [debouncedSetQuery],
  );

  const handleViewEbookDetails = (ebook: IEbook) => {
    if (ebook) {
      setSelectedEbook(ebook);
      setIsViewDetailsDialogOpen(true);
    }
  };

  useEffect(() => {
    fetchEbooksBlog(1);
  }, [fetchEbooksBlog]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && nextPage) {
        fetchEbooksBlog();
      }
    },
    [fetchEbooksBlog, nextPage],
  );

  useEffect(() => {
    const option = {
      root: loaderRef.current?.parentElement || null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  return (
    <div className="flex h-[calc(100vh-100px)] w-full flex-col pt-6">
      <div className="mb-2 pl-4 pr-9">
        <SearchInput
          placeholder="Search Ebooks"
          onChange={handleSearchChange}
        />
      </div>
      <ScrollArea className="h-full w-full">
        <div className="flex w-full flex-wrap justify-start gap-4 p-4">
          {ebooks.map((ebook) => (
            <BlogEbookCard
              ebook={ebook}
              key={ebook.id}
              isLoading={false}
              onSelectEbook={handleViewEbookDetails}
            />
          ))}

          {isLoading &&
            new Array(5)
              .fill(0)
              .map((_, index) => (
                <BlogEbookCard key={`loading-${index}`} isLoading={true} />
              ))}

          <div ref={loaderRef} className="h-10 w-full"></div>
        </div>
      </ScrollArea>
      {selectedEbook && isViewDetailsDialogOpen && (
        <ViewEbookDetailsDialog
          ebook={selectedEbook}
          isOpen={isViewDetailsDialogOpen}
          open={setIsViewDetailsDialogOpen}
        />
      )}
    </div>
  );
};

export default BlogEbookPage;
