import { PostApi } from "@/utils/typing";
import { Card, CardBody, Divider } from "@nextui-org/react";
import React, { Suspense } from "react";
import { GetPostAll } from "@/ServerAction/getPost";
import PostDataDisplay from "./PostDataDisplay";
import SearchForm from "./SearchForm";
import Loading from "./loading";

async function HomePage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const postData: PostApi = await GetPostAll();

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="h-full w-full">
      <Card className="max-w-full h-full bg-transparent" shadow="lg">
        <CardBody>
          <SearchForm />
          <Divider className="mb-5" />
          <Suspense key={query + currentPage} fallback={<Loading />}>
            <PostDataDisplay
              postData={postData}
              query={query}
              currentPage={currentPage}
            />
          </Suspense>
        </CardBody>
      </Card>
    </div>
  );
}

export default HomePage;
