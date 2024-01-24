"use client";
import { SearchIcon } from "@/Assets/Icon/SearchIcon";
import { HandleSearch } from "@/ServerAction/handleSearch";
import { PostApi } from "@/utils/typing";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SpinnerIcon } from "@/Assets/Icon/SpinnerIcon";
import { usePostData } from "@/Store";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-fit font-bold dark:text-black text-white"
      isLoading={pending}
      spinner={<SpinnerIcon />}
      color="primary"
    >
      {pending ? "Posting..." : "Post"}
    </Button>
  );
}

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { isSearched, addSearchedPost, setSearched } = usePostData(
    (state) => state
  );
  const [value, setValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [state, formAction] = useFormState(
    HandleSearch as (prev: PostApi, formData: FormData) => any,
    null
  );
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(value);
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [value, 500]);


  function searchHandle(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    setValue(searchParams.get("query")?.toString() || "");
  }, [searchParams]);

  return (
    <div className="p-10 mb-5">
      <form
        action={formAction}
        className="w-full flex justify-center gap-3 items-center"
      >
        <Input
          value={value}
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => {
            setValue(e.target.value);
            searchHandle(e.target.value);
            setSearched(true);
          }}
          name="search"
          label="Search Post"
          variant="faded"
          radius="lg"
          isClearable
          onClear={() => {
            // setValue("");
            searchHandle("");
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
        <SubmitButton />
      </form>
    </div>
  );
};
