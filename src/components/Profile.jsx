import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../globalvariables/username.js";
import { removeall } from "../globalvariables/cartSlice.js";
import { Link } from "react-router-dom";

export default function Profile() {
  const sername = useSelector((state) => state.user.value);
  const navi = useNavigate();
  const dispatch = useDispatch();
  const lgout = () => {
    localStorage.removeItem("details");
    dispatch(removeall());
    dispatch(logout());
    navi("/login");
  };
  return (
    <div className="pro-king">
      {sername.username === "" && (
        <div id="redirecte">
          <div id="remsg">Sign in for more details!</div>
          <div>
            <Link id="relink" to="/login">
              Go to login page
            </Link>
          </div>
        </div>
      )}
      {sername.username !== "" && (
        <div className="pro-info">
          <div id="g1">
            <div className="useifo">
              USER : <span id="uname">{sername.username}</span>
            </div>
          </div>
          <div id="g2">
            <button id="lgoutbut" onClick={lgout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
