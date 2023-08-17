import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Home.css";
import { FiTruck, FiClock } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Home() {
  const route = useNavigate();
  return (
    <div className="king-cont">
      <div className="uf-bot">
        <div className="tile"> Shopify a Shopping Destination</div>
        <div className="desc">
          <div className="tt">What can you buy from shopify?</div>
          <div className="de">
            E-commerce is revolutionizing the way we all shop, Why do you want
            to hop from one store to another in search of different products. So
            we have offered a solution to shop everything in one place. The one
            destination where one can find differnt category of products, all in
            one place.
          </div>
          <div id="bbb">
            <button
              id="sn"
              onClick={() => {
                route("/category");
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="features">
          <div className="fea">
            <FiTruck id="truck" />
            <div className="wo">Free delivery</div>
          </div>
          <div className="fea">
            <FiClock id="truck" />
            <div className="wo">24/7 Customer support</div>
          </div>
          <div className="fea">
            <MdAttachMoney id="truck" />
            <div className="wo">Lowest Pricing</div>
          </div>
          <div className="fea">
            <AiOutlineReload id="truck" />
            <div className="wo">return policies</div>
          </div>
        </div>
        <div className="newsletter">
          <div className="nl">News Letter</div>
          <div className="nlc">
            Signup to get updates on your favorite products.
          </div>
          <div className="ib">
            <input id="nli"></input>
            <button id="nlb">
              <FiSend id="sl" />
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div className="left-footer">ABISHEK H</div>
        <div className="right-footer">
          <div>
            <Link className="slinks" to="https://github.com/cr4yth">
              <BsGithub />
            </Link>
          </div>
          <div>
            <Link
              className="slinks"
              to="https://www.linkedin.com/in/abishek-h-26a527206/"
            >
              <BsLinkedin />
            </Link>
          </div>
          <div>
            <Link className="slinks" to="https://www.instagram.com/abishek_.h/">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
