import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Jewel from "./components/Jewel";
import Electronic from "./components/Electronic";
import { useNavigate } from "react-router-dom";
import Category from "./components/Category";
import Cart from "./components/Cart.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function App() {
  const items = useSelector((state) => state.cart.cartitems);
  const route = useNavigate();
  const naame = useSelector((state) => state.user.value.username);
  const navigate = () => {
    if (naame === "") {
      route("/login");
    } else if (naame !== "") {
      route("/profile");
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="nav">
        <div className="left-top">
          <Link className="link" to="/">
            <div id="shop-name">shopify</div>
          </Link>
        </div>
        <div className="middle">
          <input className="sbar"></input>
          <button id="srbutton">Search</button>
        </div>
        <div className="right-top">
          <div className="gap">
            <Link className="Link" to="/category">
              CATEGORY
            </Link>
          </div>
          <div className="gap">
            <Link className="Link" to="/cart">
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
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="electronics" element={<Electronic />} />
        <Route path="jewels" element={<Jewel />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}
