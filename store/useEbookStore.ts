import { IEbook } from "@/interfaces/ebook/ebook.interface";
import { addEbook, getAllEbooks, updateBook } from "@/services/ebook/api";
import { toast } from "react-toastify";
import { create } from "zustand";

type EbookState = {
  ebooks: IEbook[];
  selectedEbook: IEbook | null;
  query: string;
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
  addEbook: (body: FormData) => Promise<void>;
  updateEbook: (body: FormData) => Promise<void>;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
  setSelectedEbook: (ebook: IEbook) => void;
  reset: () => void;
};

const initialEbookState = {
  ebooks: [],
  isLoading: false,
  isAddLoading: false,
  error: null,
  nextPage: 1,
  totalRecords: 0,
  query: "",
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

  setPage: (page: number) => {
    set({ currentPage: page });
    get().fetchEbooks(page);
  },

  setSelectedEbook: (ebook: IEbook) => {
    set({ selectedEbook: ebook });
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
