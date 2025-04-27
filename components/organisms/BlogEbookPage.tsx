"use client";

import useEbookStore from "@/store/useEbookStore";
import React, { useCallback, useEffect, useRef } from "react";
import BlogEbookCard from "../molecules/BlogEbookCard";
import { ScrollArea } from "../atoms/scroll-area";

const BlogEbookPage = () => {
  const { fetchEbooksBlog, ebooks, isLoading, nextPage } = useEbookStore();
  const loaderRef = useRef<HTMLDivElement | null>(null);

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
      <ScrollArea className="h-full w-full">
        <div className="flex w-full flex-wrap justify-start gap-4 p-4">
          {ebooks.map((ebook) => (
            <BlogEbookCard ebook={ebook} key={ebook.id} isLoading={false} />
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
    </div>
  );
};

export default BlogEbookPage;
