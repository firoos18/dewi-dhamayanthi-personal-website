import {
  IBaseResponse,
  IPaginatedResponse,
} from "@/interfaces/global/index.interface";
import satellite from "../satellite";
import { IEbook } from "@/interfaces/ebook/ebook.interface";

export const getAllEbooks = async (
  page: number,
  pageSize: number,
  query: string,
  categories: string[],
  status: string,
) => {
  const categoryParams =
    categories.length > 0
      ? categories.map((cat) => `category=${encodeURIComponent(cat)}`).join("&")
      : "";

  const res = await satellite.get<IPaginatedResponse<IEbook[]>>(
    `/ebook/?page=${page}&pageSize=${pageSize}&query=${encodeURIComponent(query)}${categoryParams ? `&${categoryParams}` : ""}&status=${encodeURIComponent(status)}`,
  );

  return res.data;
};

export const addEbook = async (body: FormData) => {
  const res = await satellite.post<IPaginatedResponse>(`/ebook`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const updateBook = async (body: FormData, id: string) => {
  const res = await satellite.put<IBaseResponse>(`/ebook/${id}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
