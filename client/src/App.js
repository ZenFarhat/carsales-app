import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ads, getAds] = useState([]);
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

  const url = "http://localhost:5000/ads/";

  const getAllAds = () => {
    axios
      .get(url)
      .then((res) => {
        const allAds = res.data;
        console.log(allAds);
        getAds(allAds);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

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

  useEffect(() => {
    getAllAds();
  }, []);
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h1>Submit New Ad</h1>
        <input
          name='title'
          variant='outlined'
          label='title'
          value={setAdData.title}
          onChange={(e) => setAdData({ ...adData, title: e.target.value })}
          placeholder='ad-title'
        />
        <input
          name='year'
          variant='outlined'
          label='year'
          value={setAdData.year}
          onChange={(e) => setAdData({ ...adData, year: e.target.value })}
          placeholder='ad-year'
        />
        <input
          name='make'
          variant='outlined'
          label='make'
          value={setAdData.make}
          onChange={(e) => setAdData({ ...adData, make: e.target.value })}
          placeholder='ad-make'
        />
        <input
          name='price'
          variant='outlined'
          label='price'
          value={setAdData.price}
          onChange={(e) => setAdData({ ...adData, price: e.target.value })}
          placeholder='ad-price'
        />
        <button type='submit'>Submit</button>
      </form>
      {ads.map((ad) => {
        return (
          <div className='ad' key={ad._id}>
            <strong>{ad.title}</strong>
            <p>make: {ad.make}</p>
            <p>year: {ad.year}</p>
            <p>price: ${ad.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
