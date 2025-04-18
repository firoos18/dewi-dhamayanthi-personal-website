"use client";

import {
  IUserData,
  IUserLoginRequestBody,
  IUserRegisterRequestBody,
} from "@/interfaces/auth/auth.interface";
import { toast } from "react-toastify";
import { create } from "zustand";
import { loginAction, logOutAction, signUpAction } from "./auth.action";

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
      const res = await loginAction(body);
      if (res.success) {
        toast.success("Login Success!");
      } else {
        set({ error: res.message });
        toast.error(res.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (body) => {
    set({ isLoading: true, error: null });
    try {
      const res = await signUpAction(body);
      if (res.status) {
        toast.success("User registered!");
      } else {
        set({ error: res.message });
        toast.error(res.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    await logOutAction();
    toast.info("Logged out");
  },

  me: async () => {},

  reset: () => {},
}));

export default useAuthStore;
