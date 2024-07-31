import React from "react";
import Banner from "./Banner";
import Category from "./Category";

const Homepage = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container mx-auto my-14">
        <Category></Category>
      </div>
    </div>
  );
};

export default Homepage;
