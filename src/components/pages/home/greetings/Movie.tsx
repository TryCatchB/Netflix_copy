import React, { FC } from "react";
import Video from "../../../UI/video/Video";
import styles from "./Movie.module.css";
import { useGetNewestQuery } from "../../../../features/contentAPI";

const Movie: FC = () => {
  const { data, isLoading, error } = useGetNewestQuery();

  return (
    <>
      <h2 className={styles.header}>Newest movie</h2>
      {data?.map((item) => (
        <div key={item.title} className={styles.content}>
          <Video videoUrl={item.video} width="800" height="400" />
          <div className={styles.textContent}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movie;
