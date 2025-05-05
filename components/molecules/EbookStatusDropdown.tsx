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
import { Button } from "../atoms/button";
import { ChevronDownIcon } from "lucide-react";

export enum EbookStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED",
}

interface IEbookStatusDropdownProps {
  value?: string;
  onChange: (value: string) => void;
}

const EbookStatusDropdown: React.FC<IEbookStatusDropdownProps> = ({
  onChange,
  value,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-1/2">
          {value ? (
            <p>{value}</p>
          ) : (
            <div className="flex flex-row items-center space-x-2">
              Status
              <ChevronDownIcon />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Ebook Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(v) => onChange(v)}
        >
          <DropdownMenuRadioItem value={EbookStatus.PUBLISHED}>
            Published
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={EbookStatus.UNPUBLISHED}>
            Unpublished
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={EbookStatus.DRAFT}>
            Draft
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EbookStatusDropdown;
