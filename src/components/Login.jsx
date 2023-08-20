import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../App.css";
import { login } from "../globalvariables/username.js";

export default function Login() {
  const [cred, setname] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getcred = (e) => {
    e.preventDefault();
    if (cred.username === "" || cred.password === "") {
      alert("provide all the required info to continue");
    } else {
      dispatch(login({ username: cred.username, password: cred.password }));
      localStorage.setItem("details", JSON.stringify(cred));
      navigate("/");
    }
  };

  return (
    <div className="kico">
      <div>
        <form onSubmit={getcred} className="sform">
          <div id="sti">Sign In</div>
          <div className="w1">
            <div className="headings">UserName</div>
            <input
              type="text"
              className="stinp"
              onInput={(e) => {
                setname({ ...cred, username: e.target.value });
              }}
            ></input>
          </div>
          <div className="w1">
            <div className="passw">
              <div className="headings">Password</div>
              <div id="fp">Forgot Password?</div>
            </div>
            <input
              type="password"
              className="stinp"
              onInput={(e) => {
                setname({ ...cred, password: e.target.value });
              }}
            ></input>
          </div>
          <div id="buk">
            <button type="submit" id="sfbutt">
              Sign in
            </button>
          </div>
          <div id="newto">New to Shopify?</div>
        </form>
      </div>
    </div>
  );
}
