import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeall,
  incre,
  removeitem,
  decre,
} from "../globalvariables/cartSlice.js";
import { Link } from "react-router-dom";
export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartitems);
  return (
    <div>
      <div className="tcart">Shopping Cart</div>
      {items.length !== 0 && (
        <div className="haa">
          <button
            id="dbuto"
            onClick={() => {
              dispatch(removeall());
            }}
          >
            REMOVE ALL
          </button>
        </div>
      )}
      {items.length === 0 && (
        <div>
          <div className="msgo">Oops your cart is empty!</div>
          <div className="msgpo">
            <Link to={"/category"}>shop now</Link>
          </div>
        </div>
      )}
      {items.length !== 0 && (
        <div className="k-c-c">
          {items.map((item) => {
            return (
              <div className="d-c">
                <div className="opop">
                  <img src={item.image} id="c-i"></img>
                </div>
                <div className="right-bot">
                  <div id="c-t">{item.title}</div>
                  <div id="q-q">quantity: {item.amount}</div>
                  <div id="ca-bu">
                    <button
                      id="mbc"
                      onClick={() => {
                        dispatch(decre(item));
                      }}
                    >
                      -
                    </button>
                    <button
                      id="pbc"
                      onClick={() => {
                        dispatch(incre(item));
                      }}
                    >
                      +
                    </button>
                    <div>
                      <button
                        id="trash"
                        onClick={() => {
                          dispatch(removeitem(item));
                        }}
                      >
                        &#128465;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
