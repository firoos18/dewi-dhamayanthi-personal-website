import { IEbook } from "@/interfaces/ebook/ebook.interface";
import Image from "next/image";
import React from "react";
import { Skeleton } from "../atoms/skeleton";

interface IBlogEbookCardProps {
  ebook?: IEbook;
  isLoading: boolean;
}

const BlogEbookCard: React.FC<IBlogEbookCardProps> = ({ ebook, isLoading }) => {
  return (
    <div className="flex h-[275px] w-[230px] flex-col overflow-hidden rounded-lg bg-[#B1C0C0]/30">
      <div className="relative flex h-[150px] w-full items-center justify-center">
        {ebook?.cover && !isLoading && (
          <Image
            src={ebook.cover}
            alt={ebook.title}
            fill
            style={{ objectFit: "cover" }}
            className="shadow-md"
          />
        )}
        {isLoading && <Skeleton className="h-[150px] w-full" />}
        {!ebook?.cover && !isLoading && (
          <p className="text-center text-xs text-[#6A8A8E]">
            No Cover Image Provided!
          </p>
        )}
      </div>
      <div className="mt-3 px-2">
        {!isLoading && (
          <div
            className={`flex w-fit justify-center rounded-sm border border-[#0B414B] bg-[#0B414B]/10 px-2 text-xs capitalize text-[#0B414B]`}
          >
            {ebook?.category}
          </div>
        )}
        {isLoading && <Skeleton className="h-4 w-16" />}
        <div className="mt-2">
          {!isLoading ? (
            <p className="line-clamp-2 max-w-full text-sm font-semibold text-black">
              {ebook?.title}
            </p>
          ) : (
            <Skeleton className="h-4 w-10" />
          )}
          {!isLoading ? (
            <p className="text-xs font-light text-[#6A8A8E]">{ebook?.author}</p>
          ) : (
            <Skeleton className="mt-1 h-3 w-10" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogEbookCard;
