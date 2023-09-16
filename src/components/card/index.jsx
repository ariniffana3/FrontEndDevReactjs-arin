import React from "react";
import styles from "./index.module.css";

export default function card(props) {
  const { id, name, city, rating, pictureId } = props.data;
  return (
    <div className={styles.rest_card}>
      <img
        src={`${process.env.REACT_APP_BACK_END}images/small/${pictureId}`}
        alt="restaurant"
      />
      <p className={styles.name}>{name}</p>
      <div className={styles.rating}>
        <i
          className={
            rating >= 1
              ? `bi bi-star-fill`
              : rating >= 0.1
              ? `bi bi-star-half`
              : `bi bi-star`
          }
        ></i>
        <i
          className={
            rating >= 2
              ? `bi bi-star-fill`
              : rating >= 1.1
              ? `bi bi-star-half`
              : `bi bi-star`
          }
        ></i>
        <i
          className={
            rating >= 3
              ? `bi bi-star-fill`
              : rating >= 2.1
              ? `bi bi-star-half`
              : `bi bi-star`
          }
        ></i>
        <i
          className={
            rating >= 4
              ? `bi bi-star-fill`
              : rating >= 3.1
              ? `bi bi-star-half`
              : `bi bi-star`
          }
        ></i>
        <i
          className={
            rating >= 5
              ? `bi bi-star-fill`
              : rating >= 4.1
              ? `bi bi-star-half`
              : `bi bi-star`
          }
        ></i>
        {"  "}
        {rating}
      </div>
      <div className={styles.city}>{city}</div>
      <button className={styles.button} onClick={() => props.handleDetail(id)}>
        See Detail
      </button>
    </div>
  );
}
