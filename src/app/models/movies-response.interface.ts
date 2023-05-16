 import { Movies } from "./movies-response.model"

  export interface MovieResponse {
    page: number
    results: Movies[]
    total_pages: number
    total_results: number
  }
