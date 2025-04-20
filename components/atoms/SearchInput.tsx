import React, { ComponentPropsWithRef } from "react";
import { Input } from "./input";
import { SearchIcon } from "lucide-react";

interface ISearchInputProps extends ComponentPropsWithRef<typeof Input> {
  placeholder: string;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder,
  ...props
}) => {
  return (
    <div className="relative w-full">
      <SearchIcon
        className="absolute left-1 top-1/2 h-8 max-h-5 w-8 -translate-y-1/2 p-0"
        color="#0B414B"
      />
      <Input
        type={"text"}
        placeholder={placeholder}
        className="pl-10 pr-10"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
