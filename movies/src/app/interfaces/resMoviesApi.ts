
import { Movie } from './movie';

export interface ResMoviesApi {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}