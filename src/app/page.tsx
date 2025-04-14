import { Header } from "@/components/Header";
import { CarouselWrapper } from "@/components/CarouselWrapper";

export default async function Home() {
  return (
    <main className="w-full h-screen">
      <Header />
      <CarouselWrapper />
    </main>
  );
}
