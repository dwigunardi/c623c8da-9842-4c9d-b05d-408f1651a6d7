import { PostDataDetail } from "@/utils/typing";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from "react";

export const SectionPostDetail = ({
  dataSource,
}: {
  dataSource: PostDataDetail;
}) => {
  return (
    <Card className="max-w-full h-full bg-transparent py-5 pl-5 p-4" shadow="lg">
      <CardHeader>
        <h1 className="text-3xl font-bold text-left">{dataSource.title}</h1>
      </CardHeader>
      <div className="px-4 py-2">
      <div className="flex gap-3">
      {dataSource.tags.map((tag: string, idx: number) => (
            <Chip key={idx + 1} className="mr-3 ">{tag}</Chip>
        ))}
        </div>
        </div>
      <CardBody>
        <div className="mb-5">
          <p>{dataSource.body}</p>
        </div>
      </CardBody>
    </Card>
  );
};
