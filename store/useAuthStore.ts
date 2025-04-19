"use client";

import {
  IUserData,
  IUserLoginRequestBody,
  IUserRegisterRequestBody,
} from "@/interfaces/auth/auth.interface";
import { toast } from "react-toastify";
import { create } from "zustand";
import { getMe, postLogin, postRegister } from "@/services/auth/api";
import { deleteToken, setToken } from "@/utils/cookies/cookies.data";

type AuthState = {
  isLoading: boolean;
  error: string | null;
  userData: IUserData | null;
};

type AuthActions = {
  login: (body: IUserLoginRequestBody) => Promise<void>;
  signUp: (body: IUserRegisterRequestBody) => Promise<void>;
  me: () => Promise<void>;
  logout: () => Promise<void>;
  reset: () => void;
};

const initialAuthState = {
  token: null,
  isLoading: false,
  error: null,
  userData: null,
};

const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  ...initialAuthState,

  login: async (body) => {
    set({ isLoading: true, error: null });
    try {
      const res = await postLogin(body);
      if (res.status && res.data) {
        setToken(res.data?.token);
        toast.success("Login Success!");
      } else {
        set({ error: res.message });
      }
    } catch {
      toast.error(get().error);
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (body) => {
    set({ isLoading: true, error: null });
    try {
      const res = await postRegister(body);
      if (res.status) {
        toast.success("User registered!");
      } else {
        set({ error: res.message });
      }
    } catch {
      toast.error(get().error);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    await deleteToken();
    toast.info("Logged out");
  },

  me: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await getMe();

      if (res.status && res.data) {
        set({ userData: res.data });
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
    set({ ...initialAuthState });
  },
}));

export default useAuthStore;
