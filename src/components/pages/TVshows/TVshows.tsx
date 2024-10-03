import React, { FC } from "react";
import { useGetTvShowsQuery } from "../../../features/contentAPI";
import { Content } from "../../../types/types";
import Loader from "../../UI/loader/Loader";
import ErrorMessage from "../../UI/error/Error";
import Title from "../../UI/title/Title";
import ListItems from "../../UI/listItems/ListItems";
import styles from "./TVshows.module.css";

const TVshows: FC = () => {
  const { data, error, isLoading } = useGetTvShowsQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className={styles.tvshows}>
      <Title title={"Watch your favourite TV shows!"} />
      <ListItems data={data as Content[]} />
    </div>
  );
};

export default TVshows;
