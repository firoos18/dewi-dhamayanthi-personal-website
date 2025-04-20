"use client";

import React from "react";
import { Button } from "../atoms/button";
import PasswordInput from "../atoms/PasswordInput";
import { Input } from "../atoms/input";
import { IUserLoginRequestBody } from "@/interfaces/auth/auth.interface";
import useAuthStore from "@/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/validation/validation.schema";
import TextFieldError from "../atoms/TextFieldError";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserLoginRequestBody>({
    resolver: zodResolver(loginSchema),
    mode: "all",
    reValidateMode: "onSubmit",
    shouldFocusError: true,
  });

  const { isLoading, login } = useAuthStore();

  const handleLogin = async () => {
    const loginData = watch();

    await login(loginData);
    router.replace("/cms/dashboard/home");
  };

  return (
    <>
      <p className="w-full text-center text-3xl font-medium">Login</p>
      <form
        className="mt-4 flex flex-col space-y-3"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors.email?.message && (
          <TextFieldError message={errors.email.message} />
        )}
        <PasswordInput placeholder="Password" {...register("password")} />
        {errors.password?.message && (
          <TextFieldError message={errors.password.message} />
        )}
        <Button
          title="Login"
          variant={"default"}
          size={"default"}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
