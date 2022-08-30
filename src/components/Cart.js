import React, {  useState } from "react";
import { useSelector } from "react-redux";
import Iamge from './props/Group 104.png'
import iconOne from './props/Polygon 1.png'
import iconTwo from './props/Polygon 2.png'
import git from './props/gift-box.png'
import info from './props/info-circle.png'
import ImageCart  from './props/Group 100.png'
const Cart = () => {
  const { cart } = useSelector((state) => state.user);
  const [show,setShow] = useState(true)
  const handler = () => 
  {
    if(cart <= 0)
  {
    return (
      <div className={show? 'cart-0':'cart-0 finshed'}>
        <div className="d-flex justify-content-between p-4 align-items-center">
          <div className="d-flex align-items-center">
          <h4 className="close" onClick={() => setShow(!show)}>X</h4>
          <h6>Your Run Cart</h6>
          </div>
          <div>
            <h6 style={{ color: "#637182" }}>Requests inyour run cart </h6>
            <div className="order position-absolute">0</div>
          </div>
        </div>

        <div className="foundeCart">
            <img src={ImageCart} alt="" className="w-50" />
            <h3 style={{color:'#00244D'}}>Your run cart is empty!</h3>
            <h5 style={{color:'#637182'}}>start add your requests here            </h5>
        </div>
    
      </div>
    )
  }else
  {
    return (
      <div className={show? 'cart-0':'cart-0 finshed'}>
        <div className="d-flex justify-content-between p-4 align-items-center">
          <div className="d-flex align-items-center">
          <h4 className="close" onClick={() => setShow(false)}>X</h4>
            <h6>Your Run Cart</h6>
          </div>
          <div>
            <h6 style={{ color: "#637182" }}>Requests inyour run cart </h6>
            <div className="order position-absolute">{cart}</div>
          </div>
        </div>
        <div
          className="d-flex  border-bottom  border-top p-3 justify-content-between align-items-center"
          style={{ color: "#00244D" }}
        >
          <h6>Product</h6>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <h6>Qty.</h6>
            <h6>Remove</h6>
          </div>
        </div>

        <div className="d-flex justify-content-between p-3  border-bottom">
          <div className="d-flex gap-3">
            <img src={Iamge} alt="" />
            <div>
              <h5 style={{ color: "#00244D" }}>Smart Checklist</h5>
              <span style={{ color: "#637182" }}>
                Default Title, 12.00 DTSU
              </span>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-between ">
            <div className="d-flex justify-content-between align-items-center gap-2 border rounded-4  px-3">
              <h6>2</h6>
              <div className="w-25">
              <img src={iconOne} alt="" />
              <img src={iconTwo} alt="" />
              </div>
            </div>
            <i
              className="fa-solid fa-trash fa-3x"
              style={{ color: "#DC1C6A" }}
            ></i>
          </div>
        </div>
        <div className="d-flex justify-content-between p-3  border-bottom">
          <div className="d-flex gap-3">
            <img src={Iamge} alt="" />
            <div>
              <h5 style={{ color: "#00244D" }}>Smart Checklist</h5>
              <span style={{ color: "#637182" }}>
                Default Title, 12.00 DTSU
              </span>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-between ">
            <div className="d-flex justify-content-between align-items-center gap-2 border rounded-4  px-3">
              <h6>2</h6>
              <div className="w-25">
                <img src={iconOne} alt="" />
                <img src={iconTwo} alt="" />
              </div>
            </div>
            <i
              className="fa-solid fa-trash fa-3x"
              style={{ color: "#DC1C6A" }}
            ></i>
          </div>
        </div>
        <div
          className=" border-bottom  border-top p-3 "
          style={{ color: "#00244D" }}
        >
          <div className="d-flex justify-content-between mb-3">
            <h6>Subtotal</h6>
            <span style={{ color: "#0097C2" }}>1.00 DTSU </span>
          </div>
          <div className="d-flex justify-content-between">
            <h6>New Payment</h6>
            <span style={{ color: "#0097C2" }}>
              No, Inclusive in your packageU{" "}
            </span>
          </div>
        </div>
        <button
          className="w-75  mx-auto py-3 d-block border rounded-pill text-white mt-4"
          style={{ background: "#0097C2" }}
        >
          Checkout
        </button>
        <button className="w-75  mx-auto py-3 d-block  rounded-pill  Back mt-4">
          Back to Run Information
        </button>

        <div
          style={{ background: "#FCF9E1" }}
          className="w-75 mx-auto mt-3 p-2 text-center"
        >
          <span style={{ color: "#00244D" }}>
            Your have made a great chooseLet's Run and be ready for a surprise
          </span>
          <img src={git} alt="" />
        </div>
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
    )
  }
  }
  return (
    <div className="landing-cart">
     
        {handler()}
      
    </div>
  );
};

export default Cart;
