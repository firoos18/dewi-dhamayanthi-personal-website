"use client";

import React from "react";
import SearchInput from "../atoms/SearchInput";
import BlogEbookCard from "../molecules/BlogEbookCard";
import { Button } from "../atoms/button";
import { BookOpenIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const PostPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-[calc(100vh-100px)] w-full flex-col pt-6">
      <div className="mb-2 flex flex-row space-x-4 pl-4 pr-9">
        <SearchInput placeholder="Find articles!" />
        <Button onClick={() => router.push("/cms/dashboard/post/add-post")}>
          <BookOpenIcon />
          Add new article
        </Button>
      </div>
      <div className="flex w-full flex-wrap justify-start gap-4 p-4">
        {new Array(5).fill(0).map((_, index) => (
          <BlogEbookCard key={`loading-${index}`} isLoading={true} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
