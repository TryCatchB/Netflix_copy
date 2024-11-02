import { Content } from "../../../../types/types";
import useFetchContent from "../hooks/useFetchContent";

export const getData = (title: string | undefined, type = "") => {
  const formattedTitle = title?.replace(/^[a-z]/g, " ");

  const {
    tvShows,
    tvLoading,
    tvError,
    films,
    filmLoading,
    filmError,
    popular,
    popularLoading,
    popularError,
    newest,
    newestLoading,
    newestError,
  } = useFetchContent();

  const contentData = {
    tvshows: { content: tvShows, loading: tvLoading, error: tvError },
    films: { content: films, loading: filmLoading, error: filmError },
    popular: { content: popular, loading: popularLoading, error: popularError },
    newest: { content: newest, loading: newestLoading, error: newestError },
  };

  const { content, loading, error } = contentData[type];

  const foundedContent = content?.find(
    (item: Content) => item.title === formattedTitle
  );

  return { foundedContent, loading, error };
};
