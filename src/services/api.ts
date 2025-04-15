import { MoviesApiResponse } from '@/types/movie';

export async function getMovies(page?: number, limit?: number): Promise<MoviesApiResponse> {
  const res = await fetch(`${process.env.API_URL}/movies?page=${page || 1}&limit=${limit || 12}`);
  return res.json();
}