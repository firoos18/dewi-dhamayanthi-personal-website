"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./input";

interface PasswordInputProps extends ComponentPropsWithoutRef<typeof Input> {
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="pr-10"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default PasswordInput;
