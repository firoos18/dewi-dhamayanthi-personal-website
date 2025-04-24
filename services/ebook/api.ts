import { IPaginatedResponse } from "@/interfaces/global/index.interface";
import satellite from "../satellite";
import { IEbook } from "@/interfaces/ebook/ebook.interface";

export const getAllEbooks = async (
  page: number,
  pageSize: number,
  query: string,
) => {
  const res = await satellite.get<IPaginatedResponse<IEbook[]>>(
    `/ebook?page=${page}&pageSize=${pageSize}&query=${query}`,
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
