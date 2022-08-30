import React, {useState } from "react";
import { useSelector } from "react-redux";
import Iamge from './props/Group 104.png'
import iconOne from './props/Group 120.png'
import iconTwo from './props/Group 121.png'
import iconThree from './props/Group 125.png'
import info from './props/info-circle.png'

const Fills = () => {
  const [show, setShow] = useState(true);
  const { fill } = useSelector((state) => state.user);

  return (
    <div className="landing-cart">
      {show&& (
        <div className="cart-0">
        <div className="d-flex justify-content-between p-4 align-items-center">
          <div className="d-flex align-items-center">
            <h4 className="close" onClick={() => setShow(false)}>
              X
            </h4>
            <h6>Your Run Kitchen</h6>
          </div>
          <div>
            <h6 style={{ color: "#637182" }}>Requests inyour run cart </h6>
            <div className="order position-absolute">{fill}</div>
          </div>
        </div>
        <div
          className="d-flex  border-bottom  border-top p-3 justify-content-between align-items-center"
          style={{ color: "#00244D" }}
        >
          <h6>Request</h6>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <h6>Status</h6>
            <h6>O/P Link</h6>
          </div>
        </div>

        <div className="d-flex justify-content-between p-3  border-bottom">
          <div className="d-flex gap-3">
            <img src={Iamge} alt="" />
            <div>
              <h5 style={{ color: "#00244D" }}>Units Under Processing</h5>
              <span style={{ color: "#637182" }}>12.00 DTSUs</span>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-4 ">
            <img src={iconOne} alt="" />
            <i
              className="fa-solid fa-cloud-arrow-down fs-3"
              style={{ color: "#0097C2" }}
            ></i>
          </div>
        </div>
        <div className="d-flex justify-content-between p-3  border-bottom">
          <div className="d-flex gap-3">
            <img src={Iamge} alt="" />
            <div>
              <h5 style={{ color: "#00244D" }}>Units Under Processing</h5>
              <span style={{ color: "#637182" }}>12.00 DTSUs</span>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-4 ">
            <img src={iconTwo} alt="" />
            <i
              className="fa-solid fa-cloud-arrow-down fs-3"
              style={{ color: "#0097C2" }}
            ></i>
          </div>
        </div>
        <div className="d-flex justify-content-between p-3  border-bottom">
          <div className="d-flex gap-3">
            <img src={Iamge} alt="" />
            <div>
              <h5 style={{ color: "#00244D" }}>Units Under Processing</h5>
              <span style={{ color: "#637182" }}>12.00 DTSUs</span>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-between gap-4 ">
            <img src={iconThree} alt="" />
            <i
              className="fa-solid fa-cloud-arrow-down fs-3"
              style={{ color: "#0097C2" }}
            ></i>
          </div>
        </div>
        <div
          className=" border-bottom  border-top p-3 "
          style={{ color: "#00244D" }}
        >
          <div className="d-flex justify-content-between mb-3">
            <h6>Units Under Processing</h6>
            <span style={{ color: "#0097C2" }}>12.00 DTSUs</span>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Total Units Consumed</h6>
            <span style={{ color: "#0097C2" }}>12.00 DTSUs</span>
          </div>
        </div>
        <div
          className=" d-flex justify-content-between border-bottom  border-top p-3 "
          style={{ color: "#00244D" }}
        >
          <h6>Total Units Consumed</h6>
          <span style={{ color: "#0097C2" }}>12.00 DTSUs</span>
        </div>
        <button
          className="w-75  mx-auto py-3 d-block border rounded-pill text-white mt-4"
          style={{ background: "#0097C2" }}
        >
          Refresh Status
        </button>
        <button className="w-75  mx-auto py-3 d-block  rounded-pill  Back mt-4">
          Back to Your Dashboard
        </button>

        <div
          style={{ background: "#ECF6FE" }}
          className="w-75 mx-auto mt-3 p-2 text-center"
        >
          <img src={info} alt="" className="m-2" />
          <span style={{ color: "#00244D" }}>
            Some requests can take a week or moreto be delivered{" "}
          </span>
        </div>
      </div>
      )}
    </div>
  );
};

export default Fills;
