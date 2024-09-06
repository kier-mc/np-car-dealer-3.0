import type { QueryParams } from "~~/types/api";

export const QUERY_PARAMS: QueryParams = {
  advert_classification: "All",
  page: 1,
  results_per_page: 11,
} as const;
