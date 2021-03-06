import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";

function Ads() {
  const [ads, getAds] = useState([]);
  const url = "http://localhost:5000/ads/";

  useEffect(() => {
    getAllAds();
  }, []);

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

  return (
    <div className='ad-container'>
      {ads.map((ad) => {
        return (
          <div className='ad' key={ad._id}>
            <strong>{ad.title}</strong>
            <p>make: {ad.make}</p>
            <p>year: {ad.year}</p>
            <p>price: ${ad.price}</p>
            <button>Inquire</button>
            <button>Buy Now</button>
          </div>
        );
      })}
    </div>
  );
}

export default Ads;
