import React from "react";
import Button from "../../UI/button/Button";
import styles from "./Main.module.css";

const Information = ({ movie }) => {
  const addToFavorites = (movieName) => {
    let favorites = localStorage.getItem("favMovies");

    if (favorites) {
      favorites = JSON.parse(favorites);
      localStorage.setItem("favMovies", { ...favorites, movieName });
      alert(`${movieName} now in favorites`);
    }
  };

  return (
    <div className={styles.info}>
      <img src={movie.logo} alt={movie.name} width="200" />
      <div className={styles.additional}>
        <span>{movie.releaseYear}</span>
        <span>{movie.rating}</span>
      </div>

      <div className={styles.description}>{movie.plotSummary}</div>

      <div className={styles.buttons}>
        <Button cb={() => console.log("video is open")}>
          <i className="bx bx-play" style={{ color: "#c62e21" }}></i>
          <span>Play</span>
        </Button>
        <Button cb={() => addToFavorites()}>
          <i className="bx bx-plus"></i>
          <span>My list</span>
        </Button>
      </div>
    </div>
  );
};

export default Information;
