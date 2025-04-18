"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "../molecules/LoginForm";
import RegisterForm from "../molecules/RegisterForm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const loginParam = searchParams.get("login");

  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true);

  useEffect(() => {
    if (loginParam === "false") {
      setIsLoggingIn(false);
    } else {
      setIsLoggingIn(true);
    }
  }, [loginParam]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex h-1/3 w-1/4 flex-col justify-between rounded-md bg-[#B1C0C0] px-3 py-4">
        {isLoggingIn ? <LoginForm /> : <RegisterForm />}
        <div className="mt-4 flex w-full flex-row items-center justify-center text-sm font-light">
          <p className="mr-1">
            {!isLoggingIn
              ? "Already have an account?"
              : `Don't have an account?`}
          </p>
          <p
            onClick={() =>
              router.replace(
                isLoggingIn ? "/cms/auth?login=false" : "/cms/auth?login=true",
              )
            }
            className="flex cursor-pointer font-bold"
          >
            {!isLoggingIn ? "Login" : "Register"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
