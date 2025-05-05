import {
  IBaseResponse,
  IPaginatedResponse,
} from "@/interfaces/global/index.interface";
import satellite from "../satellite";
import {
  IAddEbookCategory,
  IEbookCategory,
} from "@/interfaces/ebook-category/ebook.category.interface";

export const getAllEbookCategories = async () => {
  const res =
    await satellite.get<IPaginatedResponse<IEbookCategory[]>>(
      `/ebook-category`,
    );

  return res.data;
};

export const postEbookCategory = async (
  body: IAddEbookCategory,
): Promise<IBaseResponse> => {
  const res = await satellite.post("/ebook-category", body);

  return res.data;
};
