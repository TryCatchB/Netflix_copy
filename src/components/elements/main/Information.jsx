import React from "react";
import Button from "../../UI/button/Button";
import styles from "./Main.module.css";

const Information = ({ movie, setModal }) => {
  const addToFavorites = () => {
    let favorites = localStorage.getItem("favMovies");

    if (!favorites) {
      favorites = [];
    } else {
      favorites = JSON.parse(favorites);
    }

    favorites.push(movie.title);

    localStorage.setItem("favMovies", JSON.stringify(favorites));

    alert(`${movie.title} has been added to your favorites!`);
  };

  return (
    <div className={styles.info}>
      <img src={movie.logo} alt={movie.title} width="200" />
      <div className={styles.additional}>
        <span>Year: {movie.releaseYear}</span>
        <span>Rating: {movie.rating}</span>
      </div>

      <div className={styles.description}>{movie.plotSummary}</div>

      <div className={styles.buttons}>
        <Button callBack={() => setModal(true)}>
          <i className="bx bx-play" style={{ color: "#c62e21" }}></i>
          <span>Play</span>
        </Button>
        <Button callBack={addToFavorites}>
          <i className="bx bx-plus"></i>
          <span>My list</span>
        </Button>
      </div>
    </div>
  );
};

export default Information;
