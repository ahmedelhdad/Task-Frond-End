import React from "react";
import imageONe from '../components/props/Image 18.png'
import imageTWO from '../components/props/Image 17.png'
import imageTree from '../components/props/Image 16.png'
import imageFour from '../components/props/Image 15.png'
import iconFills from  './props/fill.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart, fill } = useSelector((state) => state.user);
  return (
    <div
      className="container   position-relative py-3 d-flex align-items-center justify-content-between "
      style={{ color: "#F5F5F5" }}
    >
      <div className="left">
        <Link to="/" className="d-flex list-unstyled">
          <h4 style={{ color: "#00244D" }}>Welcome to iCloudReady!</h4>
        </Link>
        <p style={{ color: "#637182" }}>
          You have started your{" "}
          <span style={{ color: "#00244D" }}>30 day trial</span>
        </p>
      </div>
      <div className=" middle d-flex align-items-center gap-3 ">
        <div className="image  position-relative">
          <img src={imageONe} alt="" className="position-absolute " />
          <img src={imageTWO} alt="" className="position-absolute" />
          <img src={imageTree} alt="" className="position-absolute" />
          <img src={imageFour} alt="" className="position-absolute" />
          <div className="cricle"></div>
        </div>
        <div>
          <h5 style={{ color: "#637182" }}>Our architects are here to help </h5>
          <h5 style={{ color: "#0097C2" }}>Book a free session</h5>
        </div>
      </div>
      <div className="d-flex gap-4 right">
        <Link to="/cart">
          <div>
            {" "}
            <span>{cart}</span>
            <i className="fa-solid fa-cart-shopping fa-1x"></i>
          </div>
        </Link>
        <Link to="/fill">
          <div>
            <span>{fill}</span>
            <img src={iconFills} alt="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
