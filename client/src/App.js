import React, { useEffect, useState } from "react";

import Ads from "./components/Ads/Ads";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Form />
      <Ads />
    </div>
  );
}

export default App;
