export interface Movie {
  title: string;
  image_url: string;
  rating: string;
  year: string;
  crew: string;
}

export interface MoviesApiResponse {
  data: Movie[];
  pagination: {
    limit: number;
    page: number;
    maxPage: number;
    total: number;
  };
}