import first from "../assets/1.jpg"
import second from "../assets/2.jpg"
import third from "../assets/3.jpg"

import { RiRedPacketLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";


import './Slider.css'
const Slider = () => {
  return (
   <>
   
     <div className=" mt-5 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="slider_img position-relative">
                        <img src={first} alt="" />
                        <div className="col-7 position-absolute" style={{top:"10%", left : "8%" , }}>
                            <h5>Fresh </h5>
                            <h5>Snacks & Sweets</h5>
                            <div className="d-flex align-items-baseline">
                                <span className="me-2">20%</span>
                                <p style={{fontSize:"15px"}}> off on first order</p>
                            </div>
                            <button>shop now</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                   <div className="slider_img position-relative">
                        <img src={second} alt="" />
                        <div className="col-7 position-absolute" style={{top:"10%", left : "8%" , }}>
                            <h5>Fresh & Healthy </h5>
                            <h5>Organic Fruits</h5>
                            <div className="d-flex align-items-baseline">
                                <span className="me-2">35%</span>
                                <p style={{fontSize:"15px"}}> off on first order</p>
                            </div>
                            <button>shop now</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="slider_img position-relative">
                        <img src={third} alt="" />
                        <div className="col-7 position-absolute" style={{top:"10%", left : "8%" , }}>
                            <h5>Healthy </h5>
                            <h5>Bakery Products</h5>
                            <div className="d-flex align-items-baseline">
                                <span className="me-2">30%</span>
                                <p style={{fontSize:"15px"}}> off on first order</p>
                            </div>
                            <button>shop now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-5 mb-5">
        <div className="container">
           <div className="row">
             <div className="col-3">
                <div className="box align-center p-3" align="center">
                    <RiRedPacketLine style={{fontSize:"35px" , color:"#64b496"  , display:"block" , marginBottom:"5px"}}/>
                    <span style={{fontSize:"15px" , fontWeight:600 }}>
                        Product Packing
                    </span>
                    <div className="col-8 mt-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="box align-center p-3" align="center">
                    <BiSupport style={{fontSize:"35px" , color:"#64b496"  , display:"block" , marginBottom:"5px"}}/>
                    <span style={{fontSize:"15px" , fontWeight:600 }}>
                       24X7 Support
                    </span>
                    <div className="col-8 mt-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="box align-center p-3" align="center">
                    <TbTruckDelivery style={{fontSize:"35px" , color:"#64b496"  , display:"block" , marginBottom:"5px"}}/>
                    <span style={{fontSize:"15px" , fontWeight:600 }}>
                        Delivery In 5 Days
                    </span>

                    <div className="col-8 mt-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="box align-center p-3" align="center">
                    <RiMoneyDollarBoxLine style={{fontSize:"35px" , color:"#64b496"  , display:"block" , marginBottom:"5px"}}/>
                    <span style={{fontSize:"15px" , fontWeight:600 }}>
                        Payment Secure
                    </span>
                    <div className="col-8 mt-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
    </div>
   </>
  )
}

export default Slider