"use client";

import React, { useCallback, useEffect, useMemo } from "react";
import SearchInput from "../atoms/SearchInput";
import EbooksDataTable from "../molecules/EbooksDataTable";
import useEbookStore from "@/store/useEbookStore";
import { debounce } from "lodash";
import AddEbookDialog from "../molecules/AddEbookDialog";
import useEbookCategoryStore from "@/store/useEbookCategoryStore";

const EbookPage = () => {
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
        <AddEbookDialog />
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
        />
      </div>
    </div>
  );
};

export default EbookPage;
