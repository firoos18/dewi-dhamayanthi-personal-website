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

interface IViewEbookCoverImageDialogProps {
  ebook: IEbook;
  isOpen: boolean;
  open: (isOpen: boolean) => void;
}

const ViewEbookCoverImageDialog: React.FC<IViewEbookCoverImageDialogProps> = ({
  ebook,
  isOpen,
  open,
}) => {
  return (
    <Dialog onOpenChange={open} open={isOpen}>
      <DialogOverlay />
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{ebook.title} Cover</DialogTitle>
          <DialogDescription>Cover image of current ebook</DialogDescription>
        </DialogHeader>
        <div className="relative h-[200px] w-full">
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
      </DialogContent>
    </Dialog>
  );
};

export default ViewEbookCoverImageDialog;
