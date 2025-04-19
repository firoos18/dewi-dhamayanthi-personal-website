"use client";

import React from "react";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import PasswordInput from "../atoms/PasswordInput";
import { IUserRegisterRequestBody } from "@/interfaces/auth/auth.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/utils/validation/validation.schema";
import TextFieldError from "../atoms/TextFieldError";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserRegisterRequestBody>({
    resolver: zodResolver(registerSchema),
    mode: "all",
    reValidateMode: "onSubmit",
    shouldFocusError: true,
  });

  const { isLoading, signUp } = useAuthStore();

  const handleRegister = async () => {
    const registerData = watch();

    await signUp(registerData);
    router.replace("/cms/auth?login=true");
  };

  return (
    <>
      <p className="w-full text-center text-3xl font-medium">Register</p>
      <form
        className="mt-4 flex flex-col space-y-3"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors.email?.message && (
          <TextFieldError message={errors.email.message} />
        )}
        <Input placeholder="Fullname" type="text" {...register("fullname")} />
        {errors.fullname?.message && (
          <TextFieldError message={errors.fullname.message} />
        )}
        <PasswordInput placeholder="Password" {...register("password")} />
        {errors.password?.message && (
          <TextFieldError message={errors.password.message} />
        )}
        <PasswordInput
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <TextFieldError message={errors.confirmPassword.message} />
        )}
        <Button
          title="Register"
          variant={"default"}
          size={"default"}
          type="submit"
        >
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
