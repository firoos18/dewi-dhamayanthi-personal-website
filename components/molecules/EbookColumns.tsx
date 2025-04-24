import { IEbook } from "@/interfaces/ebook/ebook.interface";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/atoms/checkbox";
import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import convertToJakartaTime from "@/utils/time-conversion/time-conversion";

export const EbookColumn: ColumnDef<IEbook>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "cover",
    header: () => (
      <div className="w-[50px] text-right font-semibold">Cover</div>
    ),
    cell: ({ row }) => {
      const cover = row.getValue("cover");

      if (cover) {
        return (
          <Image
            src={String(cover)}
            alt="Cover Image"
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
          />
        );
      } else {
        return <p>No Cover Image</p>;
      }
    },
    maxSize: 50,
  },
  {
    accessorKey: "title",
    header: () => (
      <div className="max-w-[200px] text-center font-semibold">Title</div>
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px] text-center capitalize">
        {row.getValue("title")}
      </div>
    ),
    size: 200,
  },
  {
    accessorKey: "author",
    header: () => (
      <div className="max-w-[300px] text-center font-semibold">Author</div>
    ),
    cell: ({ row }) => (
      <div className="max-w-[300px] text-center capitalize">
        {row.getValue("author")}
      </div>
    ),
    size: 300,
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="max-w-[500px] text-center font-semibold">Status</div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div
          className={`flex max-w-[500px] justify-center rounded-md border px-1 py-2 text-xs capitalize ${status === "DRAFT" ? "border-[#B1C0C0] bg-[#B1C0C0]/10 text-[#B1C0C0]" : status === "PUBLISHED" ? "border-[#0B414B] bg-[#0B414B]/10 text-[#0B414B]" : "border-red-600 bg-red-600/10 text-red-600"}`}
        >
          {row.getValue("status")}
        </div>
      );
    },
    size: 500,
  },
  {
    accessorKey: "url",
    header: () => (
      <div className="max-w-[300px] text-center font-semibold">Url</div>
    ),
    cell: ({ row }) => (
      <div className="max-w-[300px] text-center">{row.getValue("url")}</div>
    ),
    size: 300,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="w-[120px] text-center font-semibold hover:bg-[#F8F7F2]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Category
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="w-[120px] text-center">{row.getValue("category")}</div>
    ),
    size: 120,
  },
  {
    accessorKey: "published_at",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="w-[200px] text-center font-semibold hover:bg-[#F8F7F2]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Published At
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const publishedAt: string | null | undefined =
        row.getValue("published_at");

      return (
        <div className="w-[200px] text-center">
          {publishedAt ? convertToJakartaTime(publishedAt) : "-"}
        </div>
      );
    },
    size: 200,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-[#F8F7F2]">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#F8F7F2]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Ebook ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View cover image</DropdownMenuItem>
            <DropdownMenuItem>View ebook details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit ebook details</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 focus:border-red-600 focus:bg-red-600/10 focus:text-red-600">
              Delete ebook details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
