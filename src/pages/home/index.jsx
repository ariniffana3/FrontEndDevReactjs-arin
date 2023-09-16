import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Card from "../../components/card/";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [data2, setData2] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getDataRestaurant();
  }, []);

  const getDataRestaurant = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_BACK_END}list`);
      setData(result.data.restaurants);
      setData2(result.data.restaurants);
      let city = result.data.restaurants.map((item) => {
        return item.city;
      });
      city = city.filter((value, index, self) => {
        return self.indexOf(value) == index;
      });
      setCity(city);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDetail = async (id) => {
    try {
      navigate(`/detail/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSort = async (e) => {
    if (e.target.value == "") {
      setData(data2);
    }
    const result = data2.filter((item) => {
      return item.city == e.target.value;
    });
    await setData(result);
  };

  const handleSearch = async (e) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BACK_END}search?q=${e.target.value}`
      );
      setData(result.data.restaurants);
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = async () => {
    try {
      setData(data2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.body}>
      <header>
        <h1>Restaurant</h1>
        <h3>
          Dengan puluhan restoran yang terdaftar, Anda dapat dengan mudah
          mencari restoran berdasarkan kategori, harga, atau lokasi. Temukan
          tempat makan yang sempurna untuk setiap kesempatan.
        </h3>
        <br />
        <hr />
        <div className={styles.filter_card}>
          <div className={styles.filter_card_left}>
            <p>Filter By</p>
            <input
              type="text"
              placeholder="Search by name"
              onChange={handleSearch}
            />
            <select name="city" id="" onChange={handleSort}>
              <option value="">Sort by City</option>
              {city.map((item) => {
                return (
                  <>
                    <option value={item}>{item}</option>
                  </>
                );
              })}
            </select>
          </div>
          <button onClick={handleReset}>Clear All</button>
        </div>
        <hr />
      </header>
      <main>
        <p>All Restaurant</p>
        <div className={styles.rest_cont}>
          {data.map((i) => {
            return (
              <>
                {" "}
                <Card data={i} key={i.id} handleDetail={handleDetail} />
              </>
            );
          })}
        </div>
      </main>
    </div>
  );
}
