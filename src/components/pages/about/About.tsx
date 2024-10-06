import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetFilmsQuery,
  useGetPopularsQuery,
  useGetTvShowsQuery,
} from "../../../features/contentAPI";
import Video from "../../UI/video/Video";
import Loader from "../../UI/loader/Loader";
import Error from "../../UI/error/Error";
import StarRating from "../../UI/starRating/StarRating";
import styles from "./About.module.css";
import MovieImage from "../../UI/movieImage/MovieImage";

type ContentType = "tvshows" | "films" | "popular";

const About: FC = () => {
  const { title, type } = useParams<{ title: string; type: ContentType }>();

  const formattedTitle = title?.replace(/^[a-z]/g, " ");

  const {
    data: tvShows,
    isLoading: tvLoading,
    error: tvError,
  } = useGetTvShowsQuery();

  const {
    data: films,
    isLoading: filmLoading,
    error: filmError,
  } = useGetFilmsQuery();

  const {
    data: popular,
    isLoading: popularLoading,
    error: popularError,
  } = useGetPopularsQuery();

  let content;
  if (type === "tvshows") {
    content = tvShows?.find((item) => item.title === formattedTitle);
  } else if (type === "films") {
    content = films?.find((item) => item.title === formattedTitle);
  } else if (type === "popular") {
    content = popular?.find((item) => item.title === formattedTitle);
  }

  const isLoading = tvLoading || filmLoading || popularLoading;
  const error = tvError || filmError || popularError;

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;
  if (!content) return <p>Content not found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.rowTitle}>
        <p className={styles.title}>{content.title}</p>
        <p className={styles.year}>{content.metadata.year}</p>
        <p className={styles.episodes}>{content.metadata.episodes}</p>
        <p className={styles.rating}>
          <StarRating />
          <span>{content.metadata.rating}</span>
        </p>
      </div>
      <div className={styles.videoContent}>
        <Link className={styles.link} to={content.image}>
          <MovieImage image={content.image} />
        </Link>
        <Video videoUrl={content.video} width="560" height="400" />
      </div>
      <div className={styles.description}>
        <p className={styles.text}>{content.description}</p>
      </div>
    </div>
  );
};

export default About;
