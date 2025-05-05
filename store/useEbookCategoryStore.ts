import {
  IAddEbookCategory,
  IEbookCategory,
} from "@/interfaces/ebook-category/ebook.category.interface";
import {
  getAllEbookCategories,
  postEbookCategory,
} from "@/services/ebook-category/api";
import { toast } from "react-toastify";
import { create } from "zustand";

type EbookCategoryState = {
  ebookCategories: IEbookCategory[];
  isLoading: boolean;
  error: string | null;
};

type EbookCategoryActions = {
  fetchEbookCategories: () => Promise<void>;
  addEbookCategory: (body: IAddEbookCategory) => Promise<void>;
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

    addEbookCategory: async (body) => {
      set({ isLoading: true, error: null });

      try {
        const res = await postEbookCategory(body);

        if (res.status) {
          toast.success(res.message);
        } else {
          set({ error: res.message });
        }
      } catch {
        toast.error(get().error);
      } finally {
        set({ isLoading: false });
      }

      get().fetchEbookCategories();
    },
  }),
);

export default useEbookCategoryStore;
