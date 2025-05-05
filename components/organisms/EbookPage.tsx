"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import SearchInput from "../atoms/SearchInput";
import EbooksDataTable from "../molecules/EbooksDataTable";
import useEbookStore from "@/store/useEbookStore";
import { debounce } from "lodash";
import AddEbookDialog from "../molecules/AddEbookDialog";
import useEbookCategoryStore from "@/store/useEbookCategoryStore";
import { IEbook } from "@/interfaces/ebook/ebook.interface";
import ViewEbookCoverImageDialog from "../molecules/ViewEbookCoverImageDialog";
import ViewEbookDetailsDialog from "../molecules/ViewEbookDetailsDialog";
import AddEbookCategoryDialog from "../molecules/AddEbookCategoryDialog";

const EbookPage = () => {
  const [isViewCoverDialogOpen, setIsViewCoverDialogOpen] =
    useState<boolean>(false);
  const [isViewDetailsDialogOpen, setIsViewDetailsDialogOpen] =
    useState<boolean>(false);
  const [isEditDetailsDialogOpen, setIsEditDetailsDialogOpen] =
    useState<boolean>(false);
  const [selectedEbook, setSelectedEbook] = useState<IEbook | null>(null);

  const handleViewCover = (selectedEbook: IEbook | null) => {
    setSelectedEbook(selectedEbook);
    setIsViewCoverDialogOpen(true);
  };

  const handleViewDetails = (selectedEbook: IEbook | null) => {
    setSelectedEbook(selectedEbook);
    setIsViewDetailsDialogOpen(true);
  };

  const handleEditDetails = (selectedEbook: IEbook | null) => {
    setSelectedEbook(selectedEbook);
    setIsEditDetailsDialogOpen(true);
  };

  const {
    ebooks,
    fetchEbooks,
    setQuery,
    isLoading,
    nextPage,
    totalRecords,
    currentPage,
  } = useEbookStore();
  const { fetchEbookCategories } = useEbookCategoryStore();

  const debouncedSetQuery = useMemo(() => {
    return debounce((val: string) => {
      setQuery(val);
    }, 400);
  }, [setQuery]);

  useEffect(() => {
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [debouncedSetQuery]);

  useEffect(() => {
    fetchEbooks(1);
    fetchEbookCategories();
  }, [fetchEbookCategories, fetchEbooks]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedSetQuery(e.target.value);
    },
    [debouncedSetQuery],
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      fetchEbooks(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchEbooks(nextPage);
    }
  };

  return (
    <div className="min-h-screen w-full px-6 py-8">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-semibold text-primary">E-Books</p>
        <div className="flex flex-row space-x-3">
          <AddEbookCategoryDialog />
          <AddEbookDialog />
        </div>
      </div>
      <div className="mt-10">
        <SearchInput placeholder="Find E-Books" onChange={handleSearchChange} />
      </div>
      <div className="mt-10">
        <EbooksDataTable
          data={ebooks}
          isLoading={isLoading}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          canGoToPrevious={currentPage > 1}
          canGoToNext={nextPage !== null}
          totalRecords={totalRecords}
          currentPage={currentPage}
          onViewCover={handleViewCover}
          onViewDetails={handleViewDetails}
          onEditDetails={handleEditDetails}
        />

        {selectedEbook && isViewCoverDialogOpen && (
          <ViewEbookCoverImageDialog
            ebook={selectedEbook}
            isOpen={isViewCoverDialogOpen}
            open={setIsViewCoverDialogOpen}
          />
        )}

        {selectedEbook && isViewDetailsDialogOpen && (
          <ViewEbookDetailsDialog
            ebook={selectedEbook}
            isOpen={isViewDetailsDialogOpen}
            open={setIsViewDetailsDialogOpen}
          />
        )}

        {selectedEbook && isEditDetailsDialogOpen && (
          <AddEbookDialog
            ebook={selectedEbook}
            isOpen={isEditDetailsDialogOpen}
            openEdit={setIsEditDetailsDialogOpen}
          />
        )}
      </div>
    </div>
  );
};

export default EbookPage;
