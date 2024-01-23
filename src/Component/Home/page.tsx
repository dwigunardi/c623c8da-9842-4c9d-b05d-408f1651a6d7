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

async function GetPostAll() {
  const res = await fetch(baseUrl + "/posts?limit=10", {
    cache: "no-cache",
    method: "GET",
    next: {
      tags: ["posts"],
    },
  });
  const postData: PostApi = await res.json();
  return postData;
}
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
          <div className="mt-20 row">
            {postData.posts.map((post: PostData) => (
              <div key={post.id} className="sm:col-6 mb-5 h-[200px]">
                <Card
                  shadow="none"
                  className="border-2 bg-transparent h-full"
                  isHoverable
                >
                  <CardHeader>
                    <Link
                      href={`/post/${post.id}`}
                      className="w-full text-xl font-bold text-primary mb-5"
                    >
                      {post.title}
                    </Link>
                    {post.tags.map((tag: string) => (
                      <Chip key={tag} color="default" className="mr-2">
                        {tag}
                      </Chip>
                    ))}
                  </CardHeader>
                  <CardBody>
                    <p>{post.body.slice(0, 100)}...</p>
                  </CardBody>
                  <CardFooter className="w-full gap-3">
                    <Button color="secondary">
                      <Link href={`/post/${post.id}`}>Read More</Link>
                    </Button>
                    <Tooltip content={`Reactions: ${post.reactions}`}>
                      <div className="relative h-10 w-10 bg-transparent rounded-full">
                        <LoveIcon
                          color="#be185d"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10"
                        />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg">
                          {post.reactions}
                        </span>
                      </div>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default HomePage;
