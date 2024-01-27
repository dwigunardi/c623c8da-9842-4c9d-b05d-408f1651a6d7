import { Card, CardBody } from "@nextui-org/react";
import SearchForm from "@/Component/Home/SearchForm";
import { Suspense } from "react";
import Loading from "./loading";
import PostDataDisplay from "@/Component/Home/PostDataDisplay";
import { GetPostAll } from "@/ServerAction/getPost";
import { PostApi } from "@/utils/typing";
import { NotFound } from "@/Assets/Icon/NotFound";

export default async function App({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const query = searchParams?.query;
  const currentPage = Number(searchParams?.page) || 1;
  const postData: PostApi = await GetPostAll(query || "", currentPage);
  return (
    <main className="container-fluid md:container px-unit-20">
      <div className="h-full w-full">
        <Card className="max-w-full h-full bg-transparent" shadow="lg">
          <CardBody className="block">
            <Suspense key={currentPage} fallback={<Loading />}>
              <SearchForm postData={postData} currentPage={currentPage} />
            </Suspense>
            <Suspense key={query} fallback={<Loading />}>
              {postData?.message ? (
                <div className="flex justify-center align-middle justify-items-center">
                <NotFound width={200} height={200} />
                </div>
              ) : (
                <PostDataDisplay query={query} postData={postData} />
              )}
            </Suspense>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
