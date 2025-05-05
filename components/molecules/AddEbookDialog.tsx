"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../atoms/dialog";
import { Button } from "../atoms/button";
import { BookPlusIcon } from "lucide-react";
import { Input } from "../atoms/input";
import { TiptapEditor } from "../atoms/TiptapEditor";
import useEbookStore from "@/store/useEbookStore";
import EbookStatusDropdown, { EbookStatus } from "./EbookStatusDropdown";
import EbookCategoryDropdown from "./EbookCategoryDropdown";
import ImageUpload from "../atoms/ImageUpload";
import { ScrollArea, ScrollBar } from "../atoms/scroll-area";
import { addEbookSchema } from "@/utils/validation/validation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { IAddEbook, IEbook } from "@/interfaces/ebook/ebook.interface";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import useEbookCategoryStore from "@/store/useEbookCategoryStore";
import { IEbookCategory } from "@/interfaces/ebook-category/ebook.category.interface";

interface IAddEbookDialogProps {
  ebook?: IEbook;
  isOpen?: boolean;
  openEdit?: (isOpen: boolean) => void;
}

const AddEbookDialog: React.FC<IAddEbookDialogProps> = ({
  ebook,
  isOpen,
  openEdit,
}) => {
  const {
    isAddLoading,
    addEbook,
    error,
    updateEbook,
    isUpdateLoading,
    setSelectedEbook,
  } = useEbookStore();
  const { ebookCategories } = useEbookCategoryStore();
  const [open, setOpen] = useState<boolean>(false);
  const [currentEbookCategory, setCurrentEbookCategory] =
    useState<IEbookCategory>();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IAddEbook>({
    resolver: zodResolver(addEbookSchema),
    defaultValues: {
      cover: null,
      status: ebook?.status as EbookStatus,
      categoryId: currentEbookCategory,
    },
  });

  const onSubmit = async () => {
    const ebookData = watch();
    if (ebook) setSelectedEbook(ebook);

    const ebookFormData = new FormData();

    if (ebookData.title) ebookFormData.append("title", ebookData.title);
    if (ebookData.author) ebookFormData.append("author", ebookData.author);
    if (ebookData.url) ebookFormData.append("url", ebookData.url);
    if (ebookData.description)
      ebookFormData.append("description", ebookData.description);
    if (ebookData.categoryId.id)
      ebookFormData.append("categoryId", ebookData.categoryId.id);
    if (ebookData.status) ebookFormData.append("status", ebookData.status);
    if (ebookData.cover) ebookFormData.append("cover", ebookData.cover);

    if (!ebook) {
      await addEbook(ebookFormData);
    } else {
      console.log("Updating Book");
      await updateEbook(ebookFormData);
    }
  };

  useEffect(() => {
    if (!error && !isAddLoading) {
      setOpen(false);
    }

    if (openEdit) {
      if (!error && !isUpdateLoading) {
        openEdit(false);
      }
    }

    const currentEbookCategory = () => {
      return ebookCategories.find((data) => data.name === ebook?.category);
    };

    if (currentEbookCategory() && ebook) {
      reset({
        categoryId: currentEbookCategory(),
        status: ebook?.status as EbookStatus,
        title: ebook?.title,
        url: ebook?.url,
        author: ebook?.author,
        description: ebook?.description,
      });
    }

    setCurrentEbookCategory(currentEbookCategory());
  }, [
    ebook,
    ebookCategories,
    error,
    isAddLoading,
    isUpdateLoading,
    openEdit,
    reset,
  ]);

  return (
    <Dialog onOpenChange={openEdit || setOpen} open={isOpen || open}>
      <DialogOverlay />
      {!ebook && (
        <DialogTrigger asChild>
          <Button variant={"default"}>
            <BookPlusIcon size={20} color="white" />
            Add E-Book
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {ebook ? "Edit Ebook Details" : "Add Ebook"}
          </DialogTitle>
          <DialogDescription>
            {ebook ? "Edit current ebook details!" : "Add an ebook to publish!"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ScrollArea>
            <div className="mt-4 flex max-h-[500px] flex-col space-y-4 px-3">
              <Input placeholder="Title" {...register("title")} />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
              <Input placeholder="Author" {...register("author")} />
              {errors.author && (
                <p className="text-sm text-red-500">{errors.author.message}</p>
              )}
              <Input placeholder="Ebook Url" {...register("url")} />
              {errors.url && (
                <p className="text-sm text-red-500">{errors.url.message}</p>
              )}
              <div className="flex w-full flex-row space-x-4">
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <EbookStatusDropdown
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="categoryId"
                  control={control}
                  render={({ field }) => {
                    return (
                      <EbookCategoryDropdown
                        value={field.value}
                        onChange={field.onChange}
                      />
                    );
                  }}
                />
              </div>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TiptapEditor
                    placeholder="Description"
                    onChange={field.onChange}
                    content={ebook?.description}
                  />
                )}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
              <Controller
                name="cover"
                control={control}
                render={({ field }) => (
                  <ImageUpload
                    onChange={(file) => field.onChange(file)}
                    currentCover={ebook?.cover}
                  />
                )}
              />
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
          <DialogFooter className="mr-3 mt-4">
            <Button
              variant={"default"}
              disabled={isAddLoading || isUpdateLoading}
              onClick={onSubmit}
            >
              {isAddLoading || isUpdateLoading ? <LoadingSpinner /> : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEbookDialog;
