import React, { FC } from "react";
import styles from "./MovieImage.module.css";

interface IMovieImage {
  image: string;
}

const MovieImage: FC<IMovieImage> = ({ image }) => {
  return (
    <>
      <img className={styles.image} src={image} alt="Movie image" />
    </>
  );
};

export default MovieImage;
