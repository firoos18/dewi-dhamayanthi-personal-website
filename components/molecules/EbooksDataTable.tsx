import { IEbook } from "@/interfaces/ebook/ebook.interface";
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../atoms/button";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../atoms/table";
import { ScrollArea, ScrollBar } from "../atoms/scroll-area";
import { EbookColumn } from "@/components/molecules/EbookColumns";
import { Skeleton } from "../atoms/skeleton";

interface IEbooksDataTableProps {
  data: IEbook[];
  isLoading: boolean;
  totalRecords: number;
  currentPage: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  canGoToPrevious: boolean;
  canGoToNext: boolean;
  onViewCover: (ebook: IEbook | null) => void;
  onViewDetails: (ebook: IEbook | null) => void;
  onEditDetails: (ebook: IEbook | null) => void;
}

const EbooksDataTable: React.FC<IEbooksDataTableProps> = ({
  data,
  isLoading,
  onNextPage,
  onPreviousPage,
  totalRecords,
  currentPage,
  canGoToPrevious,
  canGoToNext,
  onViewCover,
  onViewDetails,
  onEditDetails,
}) => {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns: EbookColumn({ onViewCover, onViewDetails, onEditDetails }),
    manualPagination: true,
    rowCount: totalRecords,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
      pagination: {
        pageIndex: currentPage,
        pageSize: 5,
      },
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <ScrollArea className="w-full max-w-full">
          <div className="min-w-[2500px]">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  [...Array(3)].map((_, index) => (
                    <TableRow key={`skeleton-${index}`}>
                      {EbookColumn({
                        onViewCover,
                        onViewDetails,
                        onEditDetails,
                      }).map((_, i) => (
                        <TableCell key={i}>
                          <Skeleton className="h-3 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={table.getAllColumns().length}
                      className="h-24 text-center"
                    >
                      No data available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <ScrollBar orientation="horizontal" color="#0B414B" />
        </ScrollArea>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {isLoading && <Skeleton className="h-3 w-10" />}
          {!isLoading && (
            <p>
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </p>
          )}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onPreviousPage}
            disabled={!canGoToPrevious || isLoading}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onNextPage}
            disabled={!canGoToNext || isLoading}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EbooksDataTable;
