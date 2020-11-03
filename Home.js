import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4535434"
            title="Samsung Galaxy M51 7,000mAh (typical)** battery and 25W of Super Fast Charging
            Blazing fast Qualcomm® Snapdragon™ 730G Processor"
            price={22000}
            image="https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins--304622793?$PD_GALLERY_L_SHOP_JPG$"
            rating={5}
          />

          <Product
            id="45646878"
            title="Sony Playstation 4 Pro Ps4 Pro 1Tb Console Complete Set (Black)"
            price={48900}
            rating={4}
            image="https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$"
          />

          {/*Product*/}
        </div>

        <div className="home__row">
          <Product
            id="456468788"
            title="Noise NoiseFit Evolve Sport Full Touch Control Smart Watch with AMOLED Display"
            price={5999}
            rating={3}
            image="https://m.media-amazon.com/images/I/71R5Az8rZyL._AC_UL320_.jpg"
          />

          <Product
            id="48528788"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={7439}
            rating={4}
            image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
          />

          <Product
            id="41234588"
            title="Samsung Galaxy Tab A 10.1 (10.1 inch, 32GB, Wi-Fi), Gold"
            price={14999}
            rating={3}
            image="https://m.media-amazon.com/images/I/712xLThoY+L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="74234588"
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) "
            price={114999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91dSYSbq1-L._SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
