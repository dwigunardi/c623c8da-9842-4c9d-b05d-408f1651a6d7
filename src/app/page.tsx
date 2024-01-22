import MainLayout from "@/Layout/MainLayout";
import HomePage from "../Component/Home/page";
import Login from "./Login/page";

export default function App() {
  return (
    <MainLayout>
      <main className="container-fluid md:container px-unit-20">
        <HomePage />
      </main>
    </MainLayout>
  );
}
