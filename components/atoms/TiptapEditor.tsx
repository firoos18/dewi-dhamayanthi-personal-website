"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import TiptapToolbar from "./TiptapToolbar";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import HardBreak from "@tiptap/extension-hard-break";

interface ITiptapEditorProps {
  content?: string;
  placeholder: string;
  onChange: (content: string) => void;
}

export const TiptapEditor: React.FC<ITiptapEditorProps> = ({
  content,
  placeholder,
  onChange,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        heading: false,
      }),
      HardBreak.extend({
        addKeyboardShortcuts() {
          return {
            Enter: () => this.editor.commands.setHardBreak(),
          };
        },
      }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      Placeholder.configure({ placeholder: placeholder }),
      CharacterCount.configure({ limit: 1000 }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      BulletList,
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "flex prose min-h-[10rem] w-full rounded-md border border-[#B1C0C0] bg-white px-3 py-2 text-base ring-offset-white placeholder:text-[#6A8A8E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B414B] disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  return (
    <div className="space-y-2">
      <TiptapToolbar editor={editor!} />
      <EditorContent editor={editor} />
    </div>
  );
};
