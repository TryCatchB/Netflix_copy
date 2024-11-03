import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Content } from "../../../types/types";
import { configPage } from "../../../config/configPage";
import Image from "../image/Image";
import styles from "./ListItems.module.css";

interface IListItems {
  data: Content[];
}

const ListItems: FC<IListItems> = ({ data }): JSX.Element => {
  const location = useLocation();

  const path = location.pathname.startsWith(configPage.favorites)
    ? location.pathname.replace(/\/favorites\/:.*/, "/favorites")
    : "";

  return (
    <ul className={styles.content}>
      {data.map((item) => (
        <li key={item.title}>
          <Link
            className={styles.link}
            to={`/about/${item.type}/${item.title.replace(/\s+/g, " ")}`}
          >
            <Image image={item.image} />
            <h3 className={styles.showTitle}>
              {path === configPage.favorites ? (
                <span>{item.title}</span>
              ) : (
                <span>
                  {item.id}. {item.title}
                </span>
              )}
            </h3>
            <p className={styles.text}>
              <span className={styles.year}>{item.metadata.year}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
