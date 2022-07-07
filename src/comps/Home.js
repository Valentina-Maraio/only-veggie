import React from "react";
import Search from './Search'
import Random from './Random'
import Vegetarian from "./Vegetarian";

const Home = () => {
  return (
    <div>
      <Search />
      <Random />
      <Vegetarian />
    </div>
  );
};

export default Home;
