import React from "react";
import plantBannerImage from "./plantImages/plantBannerImage.jpg";
import "./stylesheets/homepage.css";
import ProductCard from "./productCards";

const Homepage = () => {
  return (
    <div id="homepageContainer">
      <div id="bannerImageHolder">
        <img id="homepagebanner" src={plantBannerImage} alt="housePlants"></img>
        <button className="ShopNowButton" id="bannerButton">
          Shop Now
        </button>
      </div>
      <div id="cardsContainer">
        <ProductCard name="Bamboo Tree" />
        <ProductCard name="Plant 2" />
        <ProductCard name="Plant 3" />
      </div>
    </div>
  );
};
export { Homepage };
