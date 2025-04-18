"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  IUserLoginRequestBody,
  IUserRegisterRequestBody,
} from "@/interfaces/auth/auth.interface";
import { postLogin, postRegister } from "@/services/auth/api";

export async function loginAction(body: IUserLoginRequestBody) {
  const cookie = await cookies();
  const res = await postLogin(body);
  if (res.status && res.data) {
    cookie.set("token", res.data.token);
    return { success: true };
  } else {
    return { success: false, message: res.message };
  }
}

export async function signUpAction(body: IUserRegisterRequestBody) {
  const res = await postRegister(body);

  return res;
}

export async function logOutAction() {
  const cookie = await cookies();
  cookie.delete("token");
  redirect("/cms/auth");
}
