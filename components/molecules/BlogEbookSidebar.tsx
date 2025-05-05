import React from "react";
import EbookCategoryCheckbox from "./EbookCategoryCheckbox";

const BlogEbookSidebar = () => {
  return (
    <div className="flex min-h-screen w-full flex-col px-4 pt-6">
      <p className="text-lg font-semibold">Ebook Filters</p>
      <EbookCategoryCheckbox />
    </div>
  );
};

export default BlogEbookSidebar;
