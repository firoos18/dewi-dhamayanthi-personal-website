import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../atoms/dialog";
import Image from "next/image";
import { IEbook } from "@/interfaces/ebook/ebook.interface";
import { ScrollArea, ScrollBar } from "../atoms/scroll-area";
import convertToJakartaTime from "@/utils/time-conversion/time-conversion";

interface IViewEbookDetailsDialogProps {
  ebook: IEbook;
  isOpen: boolean;
  open: (isOpen: boolean) => void;
}

const ViewEbookDetailsDialog: React.FC<IViewEbookDetailsDialogProps> = ({
  ebook,
  isOpen,
  open,
}) => {
  return (
    <Dialog onOpenChange={open} open={isOpen}>
      <DialogOverlay />
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="max-w-[90%]">
            {ebook.title} Details
          </DialogTitle>
          <DialogDescription>Details of current ebook</DialogDescription>
        </DialogHeader>
        <ScrollArea>
          <div className="mt-4 flex max-h-[60vh] flex-col space-y-4 px-3">
            <div className="mb-3 flex flex-row">
              <div className="relative h-[150px] w-[300px]">
                {ebook.cover && (
                  <Image
                    src={ebook.cover}
                    alt={ebook.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                )}
                {!ebook.cover && (
                  <div className="flex h-full items-center justify-center">
                    <p>No Cover Image Provided!</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <div
                  className={`flex max-w-[100px] justify-center rounded-md border px-1 py-1 text-xs capitalize ${ebook.status === "DRAFT" ? "border-[#B1C0C0] bg-[#B1C0C0]/10 text-[#B1C0C0]" : ebook.status === "PUBLISHED" ? "border-[#0B414B] bg-[#0B414B]/10 text-[#0B414B]" : "border-red-600 bg-red-600/10 text-red-600"}`}
                >
                  {ebook.status}
                </div>
                <p className="mt-4 text-lg font-medium leading-tight text-black">
                  {ebook.title}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#B1C0C0]">
                  {ebook.author}{" "}
                  {ebook.published_at &&
                    convertToJakartaTime(ebook.published_at)}
                </p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: ebook.description }}
              className="prose"
            />
          </div>
          <ScrollBar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ViewEbookDetailsDialog;
