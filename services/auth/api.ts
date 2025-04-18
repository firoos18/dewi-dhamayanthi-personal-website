import {
  IUserLoginRequestBody,
  IUserLoginResponseBody,
  IUserRegisterRequestBody,
} from "@/interfaces/auth/auth.interface";
import { IBaseResponse } from "@/interfaces/global/index.interface";
import satellite from "../satellite";

export const postLogin = async (body: IUserLoginRequestBody) => {
  const res = await satellite.post<IBaseResponse<IUserLoginResponseBody>>(
    "/auth/login",
    body,
  );

  return res.data;
};

export const postRegister = async (body: IUserRegisterRequestBody) => {
  const res = await satellite.post<IBaseResponse>("/auth/register", body);

  return res.data;
};
