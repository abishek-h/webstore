import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Category() {
  const cate = [
    { name: "smartphones", id: 1 },
    { name: "laptops", id: 2 },
    { name: "fragrances", id: 3 },
    { name: "skincare", id: 4 },
    { name: "groceries", id: 5 },
    { name: "home-decoration", id: 6 },
    { name: "furniture", id: 7 },
    { name: "tops", id: 8 },
    { name: "womens-dresses", id: 9 },
    { name: "womens-shoes", id: 10 },
    { name: "mens-shirts", id: 11 },
    { name: "mens-shoes", id: 12 },
    { name: "mens-watches", id: 13 },
    { name: "womens-watches", id: 14 },
    { name: "womens-bags", id: 15 },
    { name: "womens-jewellery", id: 16 },
    { name: "sunglasses", id: 17 },
    { name: "automotive", id: 18 },
    { name: "motorcycle", id: 19 },
    { name: "lighting", id: 20 },
  ];
  return (
    <div className="ing-cont">
      <div className="fc">Featured Categories</div>
      <div id="cil">
        {cate?.map((data) => {
          return (
            <div id="cateitems">
              <Link id="bvnn" state={data} to={"/category/" + data.name}>
                {data.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
