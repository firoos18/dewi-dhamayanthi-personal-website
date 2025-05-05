import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../atoms/dialog";
import { Input } from "../atoms/input";
import { useForm } from "react-hook-form";
import { IAddEbookCategory } from "@/interfaces/ebook-category/ebook.category.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEbookCategorySchema } from "@/utils/validation/validation.schema";
import { BookPlusIcon } from "lucide-react";
import { Button } from "../atoms/button";
import useEbookCategoryStore from "@/store/useEbookCategoryStore";
import { LoadingSpinner } from "../atoms/LoadingSpinner";

const AddEbookCategoryDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  const {
    watch,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<IAddEbookCategory>({
    resolver: zodResolver(addEbookCategorySchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { isLoading, addEbookCategory } = useEbookCategoryStore();

  const onSubmit = async () => {
    const data = watch();

    await addEbookCategory(data);
    setOpen(false);
    reset();
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogOverlay />
      <DialogTrigger asChild>
        <Button variant={"default"}>
          <BookPlusIcon size={20} color="white" />
          Add E-Book Category
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Ebook Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Category name" {...register("name")} />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name?.message}</p>
          )}
          <DialogFooter className="mt-6">
            <Button type="submit">
              {isLoading ? <LoadingSpinner /> : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEbookCategoryDialog;
