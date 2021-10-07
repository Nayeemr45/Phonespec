import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BrandsPage from "./Pages/BrandsPage";
import AllLatestPhonePage from "./Pages/AllLatestPhonePage";

function App() {
  return (
    <Router>
      <Route path="/brands" component={BrandsPage} />
      <Route path="/alllatestphone" component={AllLatestPhonePage} />
      <Route path="/" component={HomePage} exact />
    </Router>
  );
}

export default App;
