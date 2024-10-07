import React, { FC } from "react";
import { useGetFilmsQuery } from "../../../features/contentAPI";
import { Content } from "../../../types/types";
import Title from "../../UI/title/Title";
import ListItems from "../../UI/listItems/ListItems";
import Loader from "../../UI/loader/Loader";
import Error from "../../UI/error/Error";
import styles from "./Films.module.css";

const Films: FC = () => {
  const { data, isLoading, error } = useGetFilmsQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className={styles.films}>
      <Title title={"Watch your favourite films!"} />
      <ListItems data={data as Content[]} />
    </div>
  );
};

export default Films;
