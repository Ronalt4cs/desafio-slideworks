import { getMovies } from '@/services/api';
import Image from 'next/image';
import { MoviesPagination } from '@/components/MoviesPagination';

interface MovieListProps {
  page?: number;
}

export async function MoviesList({ page = 1 }: MovieListProps) {
  const { data: movies, pagination } = await getMovies(page);

  return (
    <div className="flex flex-col items-center py-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {movies.map((movie) => (
          <div key={movie.title} className="w-72 h-[602px] px-4 py-4 flex flex-col items-center justify-between gap-4 border border-gray-200 rounded-2xl">
            <Image
              src={movie.image_url}
              alt={movie.title}
              width={248}
              height={372}
              className="rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-1">{movie.title}</h3>
              <span className="font-medium text-sm">Ano de lançamento: {movie.year}</span>
              <p className="font-normal text-sm">{movie.crew}</p>
              <div className="w-24 h-9 flex items-center justify-center rounded-2xl gap-1 text-white bg-[#726BEACC]">
                <Image
                  src="/star.png"
                  width={16}
                  height={16}
                  alt="star image"
                />
                {movie.rating}/10
              </div>
            </div>
          </div>
        ))}
      </div>

      <MoviesPagination currentPage={pagination.page} totalPages={pagination.total} />
    </div>
  );
}