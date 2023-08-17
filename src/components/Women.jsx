import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../globalvariables/cartSlice.js";
import { useSelector } from "react-redux";

export default function Women() {
  const user = useSelector((state) => state.user.value.username);
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const addcart = (info) => {
    dispatch(add(info));
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);
  return (
    <div className="kcont">
      <div className="pr">Women's products</div>
      <div className="pcont">
        {data.map((info) => {
          return (
            <div className="item-cont">
              <div>
                <img src={info.image} className="imgdetail"></img>
              </div>
              <div className="bottom-area-item">
                <div className="title">{info.title}</div>
                <div className="price-holder">
                  <span id="price">${info.price}</span>
                </div>
              </div>
              <div className="buttons-a">
                <button
                  className="butto12"
                  onClick={() => {
                    if (user === "") {
                      alert("sign in");
                    } else {
                      addcart(info);
                    }
                  }}
                >
                  Add to cart
                </button>
                <button className="butto22">buy now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
