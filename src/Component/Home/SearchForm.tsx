"use client";
import { SearchIcon } from "@/Assets/Icon/SearchIcon";
import { Input, Pagination } from "@nextui-org/react";
import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "../Hook";
import { PostApi } from "@/utils/typing";

export default function SearchForm({
  postData,
  currentPage,
}: {
  postData: PostApi;
  currentPage: number | string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState<string | undefined>('');
  const params = new URLSearchParams(searchParams);
  const handleDebounce = useDebounce((term: string) => {
    if (term) {
      params.set("query", term);
      params.set("page", "1");
    } else {
      params.delete("page");
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    handlePage(1);
  }, 500);

  const handlePage = (page: number) => {
    if (page) {
      params.set("page", page.toString());
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-10 ">
      <Input
        value={value}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleDebounce(e.target.value);
          setValue(e.target.value);
        }}
        name="search"
        label="Search Post"
        variant="faded"
        radius="lg"
        isClearable
        onClear={() => {
          replace(`/`);
          setValue('');
        }}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60 dark:placeholder:text-default-700/50",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <div className="flex justify-center mt-5">
        {postData?.message ? (
          ""
        ) : (
          <Pagination
            total={postData?.total <= 1 ? 1 : Math.ceil(postData?.total / 10)}
            initialPage={Number(currentPage)}
            size="lg"
            showControls
            loop
            onChange={handlePage}
          />
        )}
      </div>
    </div>
  );
}
