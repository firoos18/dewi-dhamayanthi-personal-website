"use client";

import React from "react";
import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { Editor } from "@tiptap/react";
import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  StrikethroughIcon,
  Underline,
} from "lucide-react";

const TiptapToolbar: React.FC<{ editor: Editor }> = ({ editor }) => {
  const buttonClass =
    "text-sm font-medium px-2 rounded-md hover:bg-[#F8F7F2] text-[#0B414B]";

  if (!editor) return null;

  return (
    <div className="mb-2 flex flex-wrap gap-2 rounded-md border border-[#B1C0C0] bg-white p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("bold"),
        })}
      >
        <BoldIcon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("italic"),
        })}
      >
        <ItalicIcon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("underline"),
        })}
      >
        <Underline />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("strike"),
        })}
      >
        <StrikethroughIcon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("bulletList"),
        })}
      >
        <ListIcon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("orderedList"),
        })}
      >
        <ListOrderedIcon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("heading", { level: 1 }),
        })}
      >
        <Heading1Icon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("heading", { level: 2 }),
        })}
      >
        <Heading2Icon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("heading", { level: 3 }),
        })}
      >
        <Heading3Icon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("heading", { level: 4 }),
        })}
      >
        <Heading4Icon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("heading", { level: 5 }),
        })}
      >
        <Heading5Icon />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={cn(buttonClass, {
          "bg-[#F8F7F2]": editor.isActive("heading", { level: 6 }),
        })}
      >
        <Heading6Icon />
      </Button>
    </div>
  );
};

export default TiptapToolbar;
