import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";

function Ads() {
  const [ads, getAds] = useState([]);
  const [id, getId] = useState("");
  const url = "http://localhost:5000/ads";

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

  const deleteAd = (id) => {
    axios.delete(`${url}/${id}`).then(getAllAds);
  };

  return !ads.length ? (
    <h1 className='noListings'>There are currently no listings</h1>
  ) : (
    <div className='ad-container'>
      {ads.map((ad) => {
        return (
          <div className='ad' key={ad._id}>
            <p>{ads.length}</p>
            <strong>{ad.title}</strong>
            <p>make: {ad.make}</p>
            <p>year: {ad.year}</p>
            <p>price: ${ad.price}</p>
            <button onClick={() => deleteAd(ad._id)}>Delete Post</button>
          </div>
        );
      })}
    </div>
  );
}

export default Ads;
