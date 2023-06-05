import { TvShows } from "./tvshows-response.model"

export interface TvShowsResponse {
  page: number
  results: TvShows[]
  total_pages: number
  total_results: number
}
