import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ads, getAds] = useState([]);

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

  useEffect(() => {
    getAllAds();
  }, []);
  return (
    <div className='App'>
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
