import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mensclothing from "./images/mensclothing.jpg";
import womensclothing from "./images/womensclothing.jpg";
import jewel from "./images/jewel.jpg";
import electronics from "./images/electronics.jpg";
import "./category.css";

export default function Category() {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const find = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", find);
    return () => {
      window.removeEventListener("resize", find);
    };
  }, [width]);
  return (
    <div className="ing-cont">
      <div className="oiwdf">
        <div className="fc">Featured Categories</div>
        {width < 1100 && (
          <div className="shrinked-cat">
            <Link to="/men" className="category-cont">
              <div className="itle">Men</div>
            </Link>
            <Link to="/women" className="category-cont">
              <div className="itle">Women</div>
            </Link>
            <Link to="/jewels" className="category-cont">
              <div className="itle">Jewels</div>
            </Link>
            <Link to="/electronics" className="category-cont">
              <div className="itle">Electronics</div>
            </Link>
          </div>
        )}
        {width > 1100 && (
          <div className="cont">
            <Link to="/men" className="category-cont">
              <img src={mensclothing} className="category-image"></img>
              <div className="itle">Men</div>
            </Link>
            <Link to="/women" className="category-cont">
              <img src={womensclothing} className="category-image"></img>
              <div className="itle">Women</div>
            </Link>
            <Link to="/jewels" className="category-cont">
              <img src={jewel} className="category-image"></img>
              <div className="itle">Jewels</div>
            </Link>
            <Link to="/electronics" className="category-cont">
              <img src={electronics} className="category-image"></img>
              <div className="itle">Electronics</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
