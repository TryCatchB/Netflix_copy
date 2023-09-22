import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ modal, setModal }) => {
  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={() => setModal(false)}>
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/0eGg29YcVvQ?si=GFR9iulFA9RztSYS"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modal;
