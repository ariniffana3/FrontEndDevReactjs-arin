import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../../components/comment";

export default function Detail() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    getDataRestaurant();
  }, []);

  const getDataRestaurant = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BACK_END}detail/${params.id}`
      );
      let category = result.data.restaurant.categories
        .map((item) => {
          return item.name;
        })
        .join(", ");
      setData({
        name: result.data.restaurant.name,
        rating: result.data.restaurant.rating,
        category: category,
        address: result.data.restaurant.address,
        city: result.data.restaurant.city,
        image: result.data.restaurant.pictureId,
        description: result.data.restaurant.description,
        review: result.data.restaurant.customerReviews,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <img
          src={`${process.env.REACT_APP_BACK_END}images/medium/${data.image}`}
          alt="restaurant"
          className={styles.img}
        />
        <div className={styles.main_right}>
          <p className={styles.main_title}>{data.name}</p>
          <div className={styles.rating}>
            <i
              className={
                data.rating >= 1
                  ? `bi bi-star-fill`
                  : data.rating >= 0.1
                  ? `bi bi-star-half`
                  : `bi bi-star`
              }
            ></i>
            <i
              className={
                data.rating >= 2
                  ? `bi bi-star-fill`
                  : data.rating >= 1.1
                  ? `bi bi-star-half`
                  : `bi bi-star`
              }
            ></i>
            <i
              className={
                data.rating >= 3
                  ? `bi bi-star-fill`
                  : data.rating >= 2.1
                  ? `bi bi-star-half`
                  : `bi bi-star`
              }
            ></i>
            <i
              className={
                data.rating >= 4
                  ? `bi bi-star-fill`
                  : data.rating >= 3.1
                  ? `bi bi-star-half`
                  : `bi bi-star`
              }
            ></i>
            <i
              className={
                data.rating >= 5
                  ? `bi bi-star-fill`
                  : data.rating >= 4.1
                  ? `bi bi-star-half`
                  : `bi bi-star`
              }
            ></i>
            {"  "}
            {data.rating}
          </div>
          <div>category : {data.category}</div>
          <p>
            {data.address}, {data.city}
          </p>
          <p className={styles.main_title_desc}>Description :</p>
          <p className={styles.main_description}>{data.description}</p>
        </div>
      </main>
      <div classsName={styles.main_review}>
        <p className={styles.main_review_title}>Review :</p>
        {data?.review ? (
          data.review.map((item) => {
            return (
              <>
                <Comment data={item} key={item.review} />
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
