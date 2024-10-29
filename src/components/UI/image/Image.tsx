import React, { FC } from "react";
import styles from "./Image.module.css";

interface IImage {
  image: string;
}

const Image: FC<IImage> = ({ image }) => {
  return (
    <>
      <img className={styles.image} src={image} alt="Picture" />
    </>
  );
};

export default Image;
