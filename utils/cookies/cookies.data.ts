"use server";

import { cookies } from "next/headers";

export async function getToken(): Promise<string | undefined> {
  const cookie = await cookies();

  const token = cookie.get("token");

  if (token) {
    return token.value;
  }
}

export async function setToken(token: string): Promise<void> {
  const cookie = await cookies();

  if (token) {
    cookie.set("token", token);
  }
}

export async function deleteToken(): Promise<void> {
  const cookie = await cookies();

  cookie.delete("token");
}
