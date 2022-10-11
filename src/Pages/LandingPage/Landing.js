import React from "react";
import FoodAvizLogo from "../../imgs/FoodAviz.png";
import Food1 from "../../imgs/food1.png";
import Food2 from "../../imgs/food2.png";
import Food3 from "../../imgs/food3.png";
import Food4 from "../../imgs/food4.png";
import FoodBig from "../../imgs/foodbig.png";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="header-logo">
          <img src={FoodAvizLogo} alt="logo" />
        </div>
        <div className="navbar">
          <Link to="/" className="navlink">
            About Us
          </Link>
          <Link to="/" className="navlink">
            Contact Us
          </Link>
          <Link to="/" className="navlink">
            Support
          </Link>
          <Link to="/" className="navlink">
            FAQ
          </Link>
        </div>
      </div>

      <div className="main-box">
        <div>
          <h1>Satisfying experience guaranteed </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            eget imperdiet ipsum id ac arcu pulvinar nisi, nulla. Tortor id
            tincidunt facilisi ullamcorper tortor, egestas interdum placerat.
          </p>
          <button>Explore More</button>
        </div>

        <div>
          <div style={{ position: "relative" }} className="picture-box">
            <img
              src={Food1}
              alt="Food1"
              style={{
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, -40%)",
              }}
            />
            <img
              src={Food2}
              alt="Food2"
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translate(-50%, -50%)",
              }}
            />
            <img
              src={Food3}
              alt="Food3"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 40%)",
              }}
            />
            <img
              src={Food4}
              alt="Food4"
              style={{
                position: "absolute",
                top: "50%",
                right: "0%",
                transform: "translate(50%, -50%)",
              }}
            />
            <img src={FoodBig} alt="FoodBig" className="main-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
