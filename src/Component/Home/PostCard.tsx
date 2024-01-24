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
    <Card shadow="none" className="border-2 bg-transparent h-full" isHoverable>
      <CardHeader> 
        <Link
          href={`/post/${id}`}
          className="w-full text-xl font-bold text-primary mb-5"
        >
          {title}
        </Link>
        {tags.map((tag: string) => (
          <Chip key={tag} color="default" className="mr-2">
            {tag}
          </Chip>
        ))}
      </CardHeader>
      <CardBody>
        <p>{body.slice(0, 100)}...</p>
      </CardBody>
      <CardFooter className="w-full gap-3">
        <Button color="secondary">
          <Link href={`/post/${id}`}>Read More</Link>
        </Button>
        <Tooltip content={`Reactions: ${reactions}`}>
          <div className="relative h-10 w-10 bg-transparent rounded-full">
            <LoveIcon
              color="#be185d"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg">
              {reactions}
            </span>
          </div>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};
