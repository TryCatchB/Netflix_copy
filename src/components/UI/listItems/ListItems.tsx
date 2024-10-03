import React, { FC } from "react";
import styles from "./ListItems.module.css";
import { Link } from "react-router-dom";
import { Content } from "../../../types/types";

interface IListItems {
  data: Content[];
}

const ListItems: FC<IListItems> = ({ data }) => {
  return (
    <ul className={styles.shows}>
      {data.map((item) => (
        <li key={item.id}>
          <Link
            className={styles.link}
            to={`/about/${item.type}/${item.title.replace(/\s+/g, " ")}`}
          >
            <img
              className={styles.image}
              src={item.image}
              alt="Image of series"
            />
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
