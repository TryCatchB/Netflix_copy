import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Content } from "../types/types";

export const contentAPI = createApi({
  reducerPath: "contentAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getTvShows: builder.query<Content[], void>({
      query: () => "/tvshows",
    }),
    getFilms: builder.query<Content[], void>({
      query: () => "/films",
    }),
    getPopulars: builder.query<Content[], void>({
      query: () => "/popular",
    }),
  }),
});

export const { useGetTvShowsQuery, useGetFilmsQuery, useGetPopularsQuery } =
  contentAPI;
