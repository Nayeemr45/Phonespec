import React, { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  useEffect(() => {
    const { data } = axios.get("http://localhost:5000/v2/brands", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
  return <div></div>;
};

export default HomePage;
