import { MoviesApiResponse } from "@/types/movie";
import Image from "next/image";

export async function Header() {

  const res = await fetch("https://movies.slideworks.cc/movies/?page&limit=3");
  const movies: MoviesApiResponse = await res.json();

  return (
    <header className="w-full h-28 pl-32 flex items-center max-lg:justify-center max-lg:pl-0">
      <Image
        src="/logo.svg"
        width={176}
        height={33}
        alt="Logo picture"
      />
    </header>
  );
}