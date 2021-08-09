import React from "react";
import plantBannerImage from "./plantImages/plantBannerImage.jpg";
import "./stylesheets/homepage.css";
import ProductCard from "./productCards";
import EvergreenTree from "./plantImages/Artificial+Evergreen+Tree+in+Pot.jpeg";
import Monstera from "./plantImages/Monstera+Foliage+Tree+in+Pot.jpeg";
import anotherPlant from "./plantImages/default_name.jpeg";
const Homepage = () => {
  return (
    <div id="homepageContainer">
      {/* Banner Image Section */}
      <div id="bannerImageHolder">
        <img id="homepagebanner" src={plantBannerImage} alt="housePlants"></img>
        <div id="imageItems">
          <h1 id="bannerText">Find Your Perfect Plant</h1>
          <button className="ShopNowButton" id="bannerButton">
            Shop Now
          </button>
        </div>
      </div>

      {/* Item Cards Section */}
      <div id="cardsContainer">
        <ProductCard name="Bamboo Tree" image={EvergreenTree} price={99} />
        <ProductCard name="Plant 2" image={Monstera} price={175.0} />
        <ProductCard name="Plant 3" image={anotherPlant} price={49.99} />
      </div>
    </div>
  );
};
export { Homepage };
