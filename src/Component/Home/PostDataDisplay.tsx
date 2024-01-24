import { LoveIcon } from "@/Assets/Icon/LoveIcon";
import { PostApi, PostData } from "@/utils/typing";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const PostDataDisplay = ({ postData }: { postData: PostApi }) => {
  return (
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
  );
};
