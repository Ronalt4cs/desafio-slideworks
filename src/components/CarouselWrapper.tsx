import { getMovies } from "@/services/api";
import { Carousel } from "./Carousel";

export async function CarouselWrapper() {
  const { data } = await getMovies(1, 3);

  return <Carousel initialMovies={data} />;
}