import { LoveIcon } from "@/Assets/Icon/LoveIcon";
import { SearchIcon } from "@/Assets/Icon/SearchIcon";
import { PostApi, PostData } from "@/utils/typing";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Input,
  Tooltip,
} from "@nextui-org/react";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import React from "react";
import AddPost from "./AddPost";
import { baseUrl } from "@/config/baseUrl";
import { GetPostAll } from "@/ServerAction/getPost";
import { PostDataDisplay } from "./PostDataDisplay";

async function HomePage({
  searchParams,
}: {
  searchParams?: { query: string; page: string };
}) {
  const postData: PostApi = await GetPostAll();
  const handleSearch = async (formData: FormData) => {
    "use server";
    const data = {
      search: formData.get("search"),
    };

    const res = await fetch(
      baseUrl + `/posts/search?q=` + data.search
    );
    const postData: PostApi = await res.json();
    revalidateTag("posts");
  };

  return (
    <div className="h-full w-full">
      <Card className="max-w-full h-full bg-transparent" shadow="lg">
        <CardBody>
          <div className="p-10 mb-5">
            {/* <form
              action={handleSearch}
              className="w-full flex justify-center gap-3 items-center"
            >
              <Input
                label="Search Post"
                isClearable
                variant="bordered"
                name="search"
                radius="lg"
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
              <Button type="submit">Go...</Button>
            </form> */}
            <div className="flex flex-col gap-3">
              <Button>Search</Button>
              <AddPost />
            </div>
          </div>
          <Divider className="mb-5" />
          <PostDataDisplay postData={postData} />
        </CardBody>
      </Card>
    </div>
  );
}

export default HomePage;
