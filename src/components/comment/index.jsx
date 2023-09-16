import React from "react";
import styles from "./index.module.css";

export default function Comment(props) {
  const { name, date, review } = props.data;
  return (
    <div>
      <div className={styles.comment_profile}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
          className={styles.comment_img}
        />
        <p className={styles.comment_name}>{name}</p>
        <p className={styles.comment_date}>{date}</p>
      </div>
      <div className={styles.comment_review}>{review}</div>
    </div>
  );
}
