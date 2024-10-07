import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Content } from "../../../types/types";
import MovieImage from "../movieImage/MovieImage";
import styles from "./ListItems.module.css";

interface IListItems {
  data: Content[];
}

const ListItems: FC<IListItems> = ({ data }) => {
  return (
    <ul className={styles.content}>
      {data.map((item) => (
        <li key={item.id}>
          <Link
            className={styles.link}
            to={`/about/${item.type}/${item.title.replace(/\s+/g, " ")}`}
          >
            <MovieImage image={item.image} />
            <h3 className={styles.showTitle}>
              <span>{item.id}</span>. {item.title}
            </h3>
          </Link>
          <p className={styles.text}>
            <span className={styles.year}>{item.metadata.year}</span>
            <span className={styles.episodes}>{item.metadata.episodes}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
