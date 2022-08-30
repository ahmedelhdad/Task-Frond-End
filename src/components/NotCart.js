import React,{useState} from 'react'
import ImageCart  from './props/Group 100.png'

const NotCart = () => {
    const [show,setShow] = useState(true)
  return (
    <div className="landing-cart">

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
      </div>

  )
}

export default NotCart