import { Card, CardBody, } from "@nextui-org/react";
import SearchForm from "@/Component/Home/SearchForm";
import { Suspense } from "react";
import Loading from "./loading";
import PostDataDisplay from "@/Component/Home/PostDataDisplay";

export default function App({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const query = searchParams?.query;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="container-fluid md:container px-unit-20">
      <div className="h-full w-full">
        <Card className="max-w-full h-full bg-transparent" shadow="lg">
          <CardBody className="block">
            <SearchForm />
            <Suspense key={query} fallback={<Loading />}>
              <PostDataDisplay query={query} currentPage={currentPage} />
            </Suspense>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
