import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RootState } from "../../../store";
import { Content } from "../../../types/types";
import useFetchContent from "./hooks/useFetchContent";
import { addFavorite, removeFavorite } from "../../../features/favoritesSlice";
import Video from "../../UI/video/Video";
import Loader from "../../UI/loader/Loader";
import Error from "../../UI/error/Error";
import StarRating from "../../UI/starRating/StarRating";
import Image from "../../UI/image/Image";
import styles from "./About.module.css";

type ContentType = "tvshows" | "films" | "popular" | "newest";

const About: FC = (): JSX.Element => {
  const { title, type } = useParams<{ title: string; type: ContentType }>();
  const dispatch = useDispatch();

  const formattedTitle = title?.replace(/^[a-z]/g, " ");
  const userName = localStorage.getItem("userName") || "";

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

  const { content, loading, error } = contentData[type || ""];
  const foundedContent = content?.find(
    (item: Content) => item.title === formattedTitle
  );

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites[userName]
  );
  const isFavorite =
    foundedContent && favorites ? !!favorites[foundedContent.id] : false;

  const toggleFavorite = () => {
    if (!foundedContent) return;

    if (isFavorite) {
      dispatch(removeFavorite({ userName, favoriteId: foundedContent.id }));
    } else {
      dispatch(addFavorite({ userName, favorite: foundedContent }));
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  if (!foundedContent) return <p>Content not found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.rowTitle}>
        <button
          type="button"
          className={styles.button}
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FavoriteIcon fontSize="large" sx={{ color: "white" }} />
          ) : (
            <FavoriteBorderIcon fontSize="large" sx={{ color: "white" }} />
          )}
        </button>
        <p className={styles.title}>{foundedContent.title}</p>
        <p className={styles.year}>{foundedContent.metadata.year}</p>
        <p className={styles.episodes}>{foundedContent.metadata.episodes}</p>
        <p className={styles.rating}>
          <StarRating />
          <span>{foundedContent.metadata.rating}</span>
        </p>
      </div>
      <div className={styles.videoContent}>
        <Link className={styles.link} to={foundedContent.image}>
          <Image image={foundedContent.image} />
        </Link>
        <Video videoUrl={foundedContent.video} width="850" height="400" />
      </div>
      <div className={styles.description}>
        <p className={styles.text}>{foundedContent.description}</p>
      </div>
    </div>
  );
};

export default About;
