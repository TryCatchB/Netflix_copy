import React, { FC } from "react";
import { Content } from "../../../types/types";
import { useGetPopularsQuery } from "../../../features/contentAPI";
import Loader from "../../UI/loader/Loader";
import Error from "../../UI/error/Error";
import Title from "../../UI/title/Title";
import ListItems from "../../UI/listItems/ListItems";
import styles from "./Popular.module.css";

const Popular: FC = (): JSX.Element => {
  const { data, isLoading, error } = useGetPopularsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className={styles.popular}>
      <Title title={"Watch popular films!"} />
      <ListItems data={data as Content[]} />
    </div>
  );
};

export default Popular;
