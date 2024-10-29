import React, { FC } from "react";
import { useGetNewestQuery } from "../../../../features/contentAPI";
import { Content } from "../../../../types/types";
import Loader from "../../../UI/loader/Loader";
import Error from "../../../UI/error/Error";
import ListItems from "../../../UI/listItems/ListItems";
import styles from "./Movie.module.css";

const Movie: FC = (): JSX.Element => {
  const { data, isLoading, error } = useGetNewestQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <>
      <h2 className={styles.header}>Newest movie</h2>
      <ListItems data={data as Content[]} />
    </>
  );
};

export default Movie;
