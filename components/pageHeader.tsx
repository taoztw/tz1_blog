import React from "react";
import { Separator } from "./ui/separator";

const PageHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5 dark:bg-background">
      <h1 className="text-2xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
        Latest
      </h1>
      <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
        最新文章
      </p>

      <Separator />
    </div>
  );
};

export default PageHeader;
