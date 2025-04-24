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
import EbookStatusDropdown from "./EbookStatusDropdown";
import EbookCategoryDropdown from "./EbookCategoryDropdown";
import ImageUpload from "../atoms/ImageUpload";
import { ScrollArea, ScrollBar } from "../atoms/scroll-area";
import { addEbookSchema } from "@/utils/validation/validation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { IAddEbook } from "@/interfaces/ebook/ebook.interface";

const AddEbookDialog = () => {
  const { isLoading, addEbook, error } = useEbookStore();
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IAddEbook>({
    resolver: zodResolver(addEbookSchema),
    defaultValues: {
      cover: null,
    },
  });

  const onSubmit = async () => {
    const ebookData = watch();

    const ebookFormData = new FormData();

    ebookFormData.append("title", ebookData.title);
    ebookFormData.append("author", ebookData.author);
    ebookFormData.append("url", ebookData.url);
    ebookFormData.append("description", ebookData.description);
    ebookFormData.append("categoryId", ebookData.categoryId.id);
    ebookFormData.append("status", ebookData.status);

    if (ebookData.cover) {
      ebookFormData.append("cover", ebookData.cover);
    }

    await addEbook(ebookFormData);
  };

  useEffect(() => {
    if (!error && !isLoading) {
      setOpen(false);
    }
  }, [error, isLoading]);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogOverlay />
      <DialogTrigger asChild>
        <Button variant={"default"}>
          <BookPlusIcon size={20} color="white" />
          Add E-Book
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Ebook</DialogTitle>
          <DialogDescription>Add an ebook to publish!</DialogDescription>
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
                  render={({ field }) => (
                    <EbookCategoryDropdown
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TiptapEditor
                    placeholder="Description"
                    onChange={field.onChange}
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
                  <ImageUpload onChange={(file) => field.onChange(file)} />
                )}
              />
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
          <DialogFooter className="mr-3 mt-4">
            <Button variant={"default"} disabled={isLoading} onClick={onSubmit}>
              {isLoading ? "Loading..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEbookDialog;
