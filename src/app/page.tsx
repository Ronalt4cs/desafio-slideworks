import { Header } from "@/components/Header";
import { CarouselWrapper } from "@/components/CarouselWrapper";
import { MoviesList } from "@/components/MoviesList";
import { Footer } from "@/components/Footer"
interface HomeProps {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    <main>
      <Header />
      <CarouselWrapper />
      <MoviesList page={Math.max(1, currentPage)} />
      <Footer />
    </main>
  );
}