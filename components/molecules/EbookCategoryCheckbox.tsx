"use client";

import useEbookCategoryStore from "@/store/useEbookCategoryStore";
import React, { useEffect } from "react";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormControl,
} from "../atoms/form";
import { Checkbox } from "../atoms/checkbox";
import useEbookStore from "@/store/useEbookStore";

const FormSchema = z.object({
  categories: z.array(z.string()),
});

const EbookCategoryCheckbox = () => {
  const { fetchEbookCategories, ebookCategories, isLoading } =
    useEbookCategoryStore();
  const { setCategories } = useEbookStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: [],
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onCheckboxFormChange = () => {
    setCategories(form.getValues().categories);
  };

  useEffect(() => {
    fetchEbookCategories();
  }, [fetchEbookCategories]);

  return (
    <div className="h-fit w-full">
      <Form {...form}>
        <form onChange={onCheckboxFormChange}>
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem className="space-y-3">
                <div className="mb-4">
                  <FormLabel className="text-sm">Ebook Category</FormLabel>
                  <FormDescription className="text-xs font-light">
                    Select the ebook categories that you want to display.
                  </FormDescription>
                </div>
                <div className="mt-3 flex h-full w-full flex-col items-start justify-center rounded-md border-[1px] border-[#6A8A8E] px-2 pb-2">
                  {isLoading && <LoadingSpinner className="mt-2 self-center" />}
                  {!isLoading &&
                    ebookCategories.map((category) => (
                      <FormField
                        key={category.id}
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                          <FormItem className="flex w-full items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                className="mt-[7px]"
                                checked={field.value?.includes(category.name)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        category.name,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== category.name,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {category.name}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                </div>
                {!isLoading && (
                  <div className="flex w-full flex-row justify-end">
                    <p
                      className="cursor-pointer text-xs font-light text-[#6A8A8E]"
                      onClick={() => form.setValue("categories", [])}
                    >
                      Clear
                    </p>
                  </div>
                )}
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default EbookCategoryCheckbox;
