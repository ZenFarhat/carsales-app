import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const url = "http://localhost:5000/ads/";
  const [adData, setAdData] = useState({
    title: "",
    make: "",
    year: "",
    transmission: "",
    cylinders: "",
    price: "",
    style: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    await axios.post(url, adData);
    setAdData({
      title: "",
      make: "",
      transmission: "",
      cylinders: "",
      price: "",
      style: "",
      image: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit New Ad</h1>
      <input
        name='title'
        variant='outlined'
        label='title'
        value={setAdData.title}
        onChange={(e) => setAdData({ ...adData, title: e.target.value })}
        placeholder='ad-title'
        required
      />
      <input
        name='year'
        variant='outlined'
        label='year'
        value={setAdData.year}
        onChange={(e) => setAdData({ ...adData, year: e.target.value })}
        placeholder='ad-year'
        required
      />
      <input
        name='make'
        variant='outlined'
        label='make'
        value={setAdData.make}
        onChange={(e) => setAdData({ ...adData, make: e.target.value })}
        placeholder='ad-make'
        required
      />
      <input
        name='price'
        variant='outlined'
        label='price'
        value={setAdData.price}
        onChange={(e) => setAdData({ ...adData, price: e.target.value })}
        placeholder='ad-price'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
