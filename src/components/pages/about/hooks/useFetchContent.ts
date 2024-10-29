import {
  useGetFilmsQuery,
  useGetNewestQuery,
  useGetPopularsQuery,
  useGetTvShowsQuery,
} from "../../../../features/contentAPI";

const useFetchContent = () => {
  const tvShows = useGetTvShowsQuery();
  const films = useGetFilmsQuery();
  const popular = useGetPopularsQuery();
  const newest = useGetNewestQuery();

  return {
    tvShows: tvShows.data,
    tvLoading: tvShows.isLoading,
    tvError: tvShows.error,

    films: films.data,
    filmLoading: films.isLoading,
    filmError: films.error,

    popular: popular.data,
    popularLoading: popular.isLoading,
    popularError: popular.error,

    newest: newest.data,
    newestLoading: newest.isLoading,
    newestError: newest.error,
  };
};

export default useFetchContent;
