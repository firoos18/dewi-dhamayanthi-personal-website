import React from "react";

interface ITextFieldErrorProps {
  message: string;
}

const TextFieldError: React.FC<ITextFieldErrorProps> = ({ message }) => {
  return (
    <div className="flex w-full items-center justify-end">
      <p className="text-xs font-normal text-[#ED0131]">{message}</p>
    </div>
  );
};

export default TextFieldError;
