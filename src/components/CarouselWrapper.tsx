import { Movie } from "@/types/movie";
import { Carousel } from "./Carousel";

async function getFeaturedMovies(): Promise<Movie[]> {
  const response = await fetch(`${process.env.API_URL}/movies?limit=3`);

  const data = await response.json();
  return data.data;
}

export async function CarouselWrapper() {
  const initialMovies = await getFeaturedMovies();

  return <Carousel initialMovies={initialMovies} />;
}