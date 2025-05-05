import { IEbook } from "@/interfaces/ebook/ebook.interface";
import { addEbook, getAllEbooks, updateBook } from "@/services/ebook/api";
import { toast } from "react-toastify";
import { create } from "zustand";

type EbookState = {
  ebooks: IEbook[];
  ebooksBlog: IEbook[];
  selectedEbook: IEbook | null;
  query: string;
  categories: string[];
  isLoading: boolean;
  isAddLoading: boolean;
  isUpdateLoading: boolean;
  error: string | null;
  nextPage: number | null;
  totalRecords: number;
  currentPage: number;
  pageSize: number;
};

type EbookActions = {
  fetchEbooks: (page?: number) => Promise<void>;
  fetchEbooksBlog: (page?: number) => Promise<void>;
  addEbook: (body: FormData) => Promise<void>;
  updateEbook: (body: FormData) => Promise<void>;
  setQuery: (query: string) => void;
  setBlogQuery: (query: string) => void;
  setPage: (page: number) => void;
  setCategories: (categories: string[]) => void;
  setSelectedEbook: (ebook: IEbook) => void;
  reset: () => void;
};

const initialEbookState = {
  ebooks: [],
  ebooksBlog: [],
  isLoading: false,
  isAddLoading: false,
  error: null,
  nextPage: 1,
  totalRecords: 0,
  query: "",
  categories: [],
  currentPage: 0,
  pageSize: 5,
  isUpdateLoading: false,
  selectedEbook: null,
};

const useEbookStore = create<EbookState & EbookActions>((set, get) => ({
  ...initialEbookState,

  setQuery: (query: string) => {
    set({ query, nextPage: 1, ebooks: [] });
    get().fetchEbooks();
  },

  setBlogQuery: (query: string) => {
    set({ query, nextPage: 1, ebooks: [] });
    get().fetchEbooksBlog();
  },

  setCategories: (categories: string[]) => {
    set({ categories, nextPage: 1, ebooks: [] });
    get().fetchEbooks(1);
  },

  setPage: (page: number) => {
    set({ currentPage: page });
    get().fetchEbooks(page);
  },

  setSelectedEbook: (ebook: IEbook) => {
    set({ selectedEbook: ebook });
  },

  fetchEbooks: async (page = get().currentPage) => {
    const { query, pageSize, categories } = get();

    if (get().isLoading) return;

    set({ isLoading: true });

    try {
      const res = await getAllEbooks(page, pageSize, query, categories, "");

      if (res.status && res.data) {
        set({
          ebooks: res.data,
          currentPage: res.pagination.current_page,
          totalRecords: res.pagination.total_records,
          nextPage: res.pagination.next_page,
        });
      } else {
        set({ error: res.message });
      }
    } catch {
      toast.error(get().error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchEbooksBlog: async () => {
    const { query, categories, nextPage, ebooks } = get();

    if (!nextPage || get().isLoading) return;

    set({ isLoading: true });

    try {
      const res = await getAllEbooks(
        nextPage,
        5,
        query,
        categories,
        "PUBLISHED",
      );

      if (res.status && res.data) {
        const newEbooks = res.data ?? [];
        const newPagination = res.pagination;

        set({
          ebooks: nextPage === 1 ? newEbooks : [...ebooks, ...newEbooks],
          nextPage: newPagination?.next_page ?? null,
          totalRecords: newPagination?.total_records ?? 0,
        });
      } else {
        set({ error: res.message });
      }
    } catch {
      toast.error(get().error);
    } finally {
      set({ isLoading: false });
    }
  },

  addEbook: async (body: FormData) => {
    set({ isAddLoading: true });

    try {
      const res = await addEbook(body);

      if (res.status) {
        toast.success(res.message);
      } else {
        set({ error: res.message });
      }
    } catch {
      toast.error(get().error);
    } finally {
      set({ isAddLoading: false });
      get().fetchEbooks();
    }
  },

  updateEbook: async (body: FormData) => {
    set({ isUpdateLoading: true });

    try {
      if (get().selectedEbook) {
        const res = await updateBook(body, get().selectedEbook!.id);

        console.log(res);

        if (res.status) {
          toast.success(res.message);
        } else {
          set({ error: res.message });
        }
      } else {
        set({ error: "No ebook selected!" });
      }
    } catch {
      toast.error(get().error);
    } finally {
      set({ isUpdateLoading: false });
      get().fetchEbooks();
    }
  },

  reset: () => {
    set(initialEbookState);
  },
}));

export default useEbookStore;
