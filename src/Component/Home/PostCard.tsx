import { DislikesIcon } from "@/Assets/Icon/DislikeIcon";
import { LoveIcon } from "@/Assets/Icon/LoveIcon";
import { PostData } from "@/utils/typing";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const PostCard = ({ body, id, title, tags, reactions }: PostData) => {
  return (
    <Link href={`/post/${id}`}>
      <Card
        shadow="none"
        className="border-2 bg-transparent h-full"
        isHoverable
      >
        <CardHeader className="w-full">
            <h1 className="text-xl font-bold text-primary">{title}</h1>
        </CardHeader>
        <CardBody>
          <p>{body.slice(0, 100)}...</p>
        </CardBody>
        <CardFooter className="w-full gap-3">
          {tags.map((tag: string) => (
            <Chip key={tag} color="default" className="mr-2">
              {tag}
            </Chip>
          ))}
          <Tooltip content={`Reactions: ${reactions.likes}`}>
            <div className="relative h-10 w-10 bg-transparent rounded-full">
              <LoveIcon
                color="#be185d"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-small">
                {reactions.likes}
              </span>
            </div>
          </Tooltip>
          <Tooltip content={`Dislikes: ${reactions.dislikes}`}>
            <div className="relative h-10 w-10 bg-transparent rounded-full">
              <DislikesIcon
                color="#be185d"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-small">
                {reactions.dislikes}
              </span>
            </div>
          </Tooltip>
        </CardFooter>
      </Card>
    </Link>
  );
};
