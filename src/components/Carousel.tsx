"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie";

interface CarouselProps {
  initialMovies: Movie[];
}

export function Carousel({ initialMovies }: CarouselProps) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [isAutoPlayingMovies, setAutoPlayingMovies] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlayingMovies) {
      interval = setInterval(() => {
        setCurrentMovieIndex(prev =>
          prev === initialMovies.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [initialMovies.length, isAutoPlayingMovies]);

  const handleNextMovie = () => {
    setAutoPlayingMovies(false);
    setCurrentMovieIndex((prev) =>
      prev === movies.length - 1 ? 0 : prev + 1
    );
  };

  const hanldlePrevMovie = () => {
    setAutoPlayingMovies(false);
    setCurrentMovieIndex((prev) =>
      prev === 0 ? movies.length - 1 : prev - 1
    );
  };

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="w-full text-gray-100 relative h-[577px] overflow-hidden flex max-lg:justify-center">
      <div className="absolute inset-0">
        <Image
          src={currentMovie.image_url}
          alt={currentMovie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col gap-2 justify-center px-32 max-lg:px-8 max-sm:w-80">
        <h2 className="text-base font-bold max-md:text-sm max-md:font-semibold">Destaque do mês</h2>

        <h3 className="text-5xl font-bold max-md:text-3xl max-md:font-semibold">{currentMovie.title}</h3>

        <div className="flex items-center gap-4 text-base font-semibold max-md:flex-col-reverse">
          <div className="w-24 h-9 flex items-center justify-center rounded-2xl gap-1 bg-[#726BEACC]">
            <Image
              src="/star.png"
              width={16}
              height={16}
              alt="star image"
            />
            {currentMovie.rating}/10
          </div>
          <p>
            {currentMovie.crew}
          </p>
        </div>
      </div>

      <button
        onClick={hanldlePrevMovie}
        className="cursor-pointer absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 hover:scale-110 transition-transform max-sm:left-0"
        aria-label="Filme anterior"
      >
        <Image
          src="/left-arrow.svg"
          width={48}
          height={48}
          alt="Anterior"
        />
      </button>

      <button
        onClick={handleNextMovie}
        className="cursor-pointer absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 hover:scale-110 transition-transform max-sm:right-0"
        aria-label="Próximo filme"
      >
        <Image
          src="/right-arrow.svg"
          width={48}
          height={48}
          alt="Próximo"
        />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {initialMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMovieIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentMovieIndex ? "bg-amber-500" : "bg-gray-500"}`}
            aria-label={`Ir para filme ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}