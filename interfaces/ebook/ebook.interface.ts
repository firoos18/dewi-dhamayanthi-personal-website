import { EbookStatus } from "@/components/molecules/EbookStatusDropdown";
import { IEbookCategory } from "../ebook-category/ebook.category.interface";

export interface IEbook {
  id: string;
  title: string;
  description: string;
  cover: string | null;
  status: string;
  url: string;
  author: string;
  category: string;
  published_at: string;
}

export interface IAddEbook {
  title: string;
  description: string;
  cover?: File | null;
  status: EbookStatus;
  url: string;
  author: string;
  categoryId: IEbookCategory;
}
