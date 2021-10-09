import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BrandsPage from "./Pages/BrandsPage";
import AllLatestDevicePage from "./Pages/AllLatestDevicePage";
import DeviceDetailsPage from "./Pages/DeviceDetailsPage";
import NewsPage from "./Pages/NewsPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Route path="/brands" component={BrandsPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/device/:slug" component={DeviceDetailsPage} />
      <Route path="/latest" component={AllLatestDevicePage} />
      <Route path="/" component={HomePage} exact />
    </Router>
  );
}

export default App;
