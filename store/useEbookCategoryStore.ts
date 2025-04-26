import { IEbookCategory } from "@/interfaces/ebook-category/ebook.category.interface";
import { getAllEbookCategories } from "@/services/ebook-category/api";
import { toast } from "react-toastify";
import { create } from "zustand";

type EbookCategoryState = {
  ebookCategories: IEbookCategory[];
  isLoading: boolean;
  error: string | null;
};

type EbookCategoryActions = {
  fetchEbookCategories: () => Promise<void>;
};

const initialEbookCategoryState = {
  ebookCategories: [],
  isLoading: false,
  error: null,
};

const useEbookCategoryStore = create<EbookCategoryState & EbookCategoryActions>(
  (set, get) => ({
    ...initialEbookCategoryState,

    fetchEbookCategories: async () => {
      set({ isLoading: true });

      try {
        const res = await getAllEbookCategories();

        if (res.status && res.data) {
          set({ ebookCategories: res.data });
        } else {
          set({ error: res.message });
        }
      } catch {
        toast.error(get().error);
      } finally {
        set({ isLoading: false });
      }
    },
  }),
);

export default useEbookCategoryStore;
