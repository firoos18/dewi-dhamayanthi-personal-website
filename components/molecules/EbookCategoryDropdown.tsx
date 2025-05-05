import useEbookCategoryStore from "@/store/useEbookCategoryStore";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../atoms/button";
import { IEbookCategory } from "@/interfaces/ebook-category/ebook.category.interface";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../atoms/scroll-area";

interface IEbookCategoryDropdownProps {
  value?: IEbookCategory;
  onChange: (value: IEbookCategory) => void;
}

const EbookCategoryDropdown: React.FC<IEbookCategoryDropdownProps> = ({
  onChange,
  value,
}) => {
  const { isLoading, ebookCategories } = useEbookCategoryStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-1/2">
          {value !== undefined ? (
            <p>{value.name}</p>
          ) : (
            <div className="flex flex-row items-center space-x-2">
              Category
              <ChevronDownIcon />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[150px] w-56">
        <DropdownMenuLabel>Ebook Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea>
          <DropdownMenuRadioGroup
            key={value?.id}
            value={value?.id}
            onValueChange={(selectedId) => {
              const selectedCategory = ebookCategories.find(
                (cat) => cat.id === selectedId,
              );
              if (selectedCategory) {
                onChange(selectedCategory);
              }
            }}
          >
            {!isLoading &&
              ebookCategories.map((data) => (
                <DropdownMenuRadioItem key={data.id} value={data.id}>
                  {data.name}
                </DropdownMenuRadioItem>
              ))}
            {isLoading && <LoadingSpinner />}
          </DropdownMenuRadioGroup>
          <ScrollBar />
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EbookCategoryDropdown;
