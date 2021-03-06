import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ads, getAds] = useState([]);
  const [adData, setAdData] = useState({
    title: "",
    make: "",
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
            <p>{ad.title}</p>
            <p>{ad.make}</p>
            <p>{ad.year}</p>
            <p>${ad.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
