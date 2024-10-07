import React, { FC } from "react";
import { useGetNewestQuery } from "../../../../features/contentAPI";
import Loader from "../../../UI/loader/Loader";
import Error from "../../../UI/error/Error";
import Video from "../../../UI/video/Video";
import StarRating from "../../../UI/starRating/StarRating";
import styles from "./Movie.module.css";

const Movie: FC = () => {
  const { data, isLoading, error } = useGetNewestQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <>
      <h2 className={styles.header}>Newest movie</h2>
      {data?.map((item) => (
        <div key={item.title} className={styles.content}>
          <Video videoUrl={item.video} width="900" height="450" />
          <div className={styles.textContent}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.metadata}>
              <p className={styles.year}>{item.metadata.year}</p>
              <p className={styles.rating}>
                <StarRating />
                <span>{item.metadata.rating}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movie;
