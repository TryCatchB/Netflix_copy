import React from "react";
import styles from "./Episodes.module.css";
import { photos } from "./photos";

const Episodes = ({ movie }) => {
  return (
    <div className={styles.wrapper}>
      <img src={movie.logo} alt={movie.name} width="200" />
      <div className={styles.episodes}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.item}>
            <img src={photo.image} alt="image" width="300" height="200" />
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
