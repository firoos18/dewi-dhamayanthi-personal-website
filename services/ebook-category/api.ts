import { IPaginatedResponse } from "@/interfaces/global/index.interface";
import satellite from "../satellite";
import { IEbookCategory } from "@/interfaces/ebook-category/ebook.category.interface";

export const getAllEbookCategories = async () => {
  const res =
    await satellite.get<IPaginatedResponse<IEbookCategory[]>>(
      `/ebook-category`,
    );

  return res.data;
};
