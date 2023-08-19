import React from "react";
import { useLocation } from "react-router-dom";
import { add } from "../globalvariables/cartSlice";
import CircleLoader from "react-spinners/CircleLoader";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Cateitem() {
  const locate = useLocation();
  const name = locate.state?.name;
  const user = useSelector((state) => state.user.value.username);
  const [product, setproduct] = useState([]);
  const [loade, setloade] = useState(false);
  const dispatch = useDispatch();
  const addcart = (info) => {
    dispatch(add(info));
  };
  useEffect(() => {
    setloade(true);
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setproduct(res.products);
        setloade(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="pr">{name} </div>
      {loade && (
        <div id="loader">
          <CircleLoader color={"#000000"} loading={loade} size={120} />
        </div>
      )}
      {product.length > 1 && loade != true && (
        <div className="pcont">
          {product?.map((data) => {
            return (
              <div className="item-cont">
                <div>
                  <img src={data.images[0]} className="imgdetail"></img>
                </div>
                <div className="bottom-area-item">
                  <div className="title">{data.title}</div>
                  <div className="price-holder">
                    <span id="price">${data.price}</span>
                  </div>
                </div>
                <div className="buttons-a">
                  <button
                    className="butto12"
                    onClick={() => {
                      if (user === "") {
                        alert("sign in");
                      } else {
                        addcart(data);
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
      )}
    </div>
  );
}
