import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Content } from "../types/types";

export const contentAPI = createApi({
  reducerPath: "contentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getTvShows: builder.query<Content[], void>({
      query: () => "/tv-shows",
    }),
    getFilms: builder.query<Content[], void>({
      query: () => "/films",
    }),
    getPopulars: builder.query<Content[], void>({
      query: () => "/popular-films",
    }),
    getNewest: builder.query<Content[], void>({
      query: () => "/newest-films",
    }),
  }),
});

export const {
  useGetTvShowsQuery,
  useGetFilmsQuery,
  useGetPopularsQuery,
  useGetNewestQuery,
} = contentAPI;
