import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import Category from "./components/Category";
import Cart from "./components/Cart.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { updated } from "./globalvariables/searchdata.js";
import Search from "./components/Search";
import Cateitem from "./components/Cateitem";
import Err from "./components/Err";

export default function App() {
  const dispatch = useDispatch();
  const route = useNavigate();
  const items = useSelector((state) => state.cart.cartitems);
  const naame = useSelector((state) => state.user.value.username);
  const [searchd, setsearchd] = useState("");
  const navigate = () => {
    setsearchd("");
    if (naame === "") {
      route("/login");
    } else if (naame !== "") {
      route("/profile");
    }
  };
  const search = (e) => {
    if (searchd === "") {
      route("/category");
    } else {
      dispatch(updated(searchd));
      route("/search");
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
  return (
    <div className="ultra-cont">
      <div className="nav">
        <div className="left-top">
          <Link
            className="link"
            to="/"
            onClick={(e) => {
              setsearchd("");
            }}
          >
            <div id="shop-name">shopify</div>
          </Link>
        </div>

        <form
          className="middle"
          onSubmit={(e) => {
            e.preventDefault();
            search();
          }}
        >
          <input
            className="sbar"
            onChange={(e) => {
              setsearchd(e.target.value);
            }}
            value={searchd}
          ></input>
          <button id="srbutton" type="submit">
            Search
          </button>
        </form>

        <div className="right-top">
          <div className="gap">
            <Link
              className="Link"
              to="/category"
              onClick={(e) => {
                setsearchd("");
              }}
            >
              CATEGORY
            </Link>
          </div>
          <div className="gap">
            <Link
              className="Link"
              to="/cart"
              onClick={(e) => {
                setsearchd("");
              }}
            >
              CART
            </Link>
          </div>
          <div className="gap">
            <button className="login-buton" onClick={navigate}>
              {naame === "" && <span>SIGN IN</span>}
              {naame !== "" && <span>PROFILE</span>}
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="category" element={<Category />} />
        <Route path="category/:item" element={<Cateitem />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </div>
  );
}
