import { IEbook } from "@/interfaces/ebook/ebook.interface";
import { getAllEbooks } from "@/services/ebook/api";
import { toast } from "react-toastify";
import { create } from "zustand";

type EbookState = {
  ebooks: IEbook[];
  query: string;
  isLoading: boolean;
  error: string | null;
  nextPage: number | null;
  totalRecords: number;
  currentPage: number;
  pageSize: number;
};

type EbookActions = {
  fetchEbooks: (page?: number) => Promise<void>;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
  reset: () => void;
};

const initialEbookState = {
  ebooks: [],
  isLoading: false,
  error: null,
  nextPage: 1,
  totalRecords: 0,
  query: "",
  currentPage: 0,
  pageSize: 5,
};

const useEbookStore = create<EbookState & EbookActions>((set, get) => ({
  ...initialEbookState,

  setQuery: (query: string) => {
    set({ query, nextPage: 1, ebooks: [] });
    get().fetchEbooks();
  },

  setPage: (page: number) => {
    set({ currentPage: page });
    get().fetchEbooks(page);
  },

  fetchEbooks: async (page = get().currentPage) => {
    const { query, pageSize } = get();

    if (get().isLoading) return;

    set({ isLoading: true });

    try {
      const res = await getAllEbooks(page, pageSize, query);

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

  reset: () => {
    set(initialEbookState);
  },
}));

export default useEbookStore;
