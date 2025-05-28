import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import footer1 from '../assets/footer1.jpg'
import footer2 from '../assets/footer2.jpg'
import footer3 from '../assets/footer3.jpg'
import footer4 from '../assets/footer4.jpg'
import footer5 from '../assets/footer5.jpg'
import logo from '../assets/logo.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer mt-5 p-5 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <img src={logo} className="mb-3" width="90px" alt="" />
                                <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>

                                <ul className="p-0">
                                    <li className="d-flex">
                                        <div className="col-1">
                                            <GrLocation style={{ color: "#64b496", fontSize: "16px" }} />
                                        </div>
                                        <div className="col-11">
                                            <p>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="col-1">
                                            <HiOutlineMail style={{ color: "#64b496", fontSize: "16px" }} />
                                        </div>
                                        <div className="col-11">
                                            <p>example@gmail.com</p>
                                        </div>
                                    </li><li className="d-flex">
                                        <div className="col-1">
                                            <MdOutlinePhone style={{ color: "#64b496", fontSize: "16px" }} />
                                        </div>
                                        <div className="col-11">
                                            <p>+91 123 4567890</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <h5 className="pb-2">Company</h5>
                                <ul className="p-0">
                                    <li className="p-0">  <p > <a>  About Us </a> </p> </li>
                                    <li className="p-0">  <p> <a> Delivery Information </a> </p> </li>
                                    <li className="p-0">  <p> <a> Privacy Policy </a> </p> </li>
                                    <li className="p-0">  <p> <a> Terms & Conditions </a> </p> </li>
                                    <li className="p-0">  <p> <a> Contact Us </a> </p> </li>
                                    <li className="p-0">  <p> <a> Support Center </a> </p> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <h5 className="pb-2">Category</h5>
                                <ul className="p-0">
                                    <li className="p-0">  <p> <a>  Dairy & Bakery </a> </p> </li>
                                    <li className="p-0">  <p> <a> Delivery Information </a> </p> </li>
                                    <li className="p-0">  <p> <a> Privacy Policy </a> </p> </li>
                                    <li className="p-0">  <p> <a> Terms & Conditions </a> </p> </li>
                                    <li className="p-0">  <p> <a> Contact Us </a> </p> </li>
                                    <li className="p-0">  <p> <a> Support Center </a> </p> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <h5>Subscribe Our Newsletter</h5>
                            <div className="d-flex">
                                <input type="text" style={{ outline: "none", border: "0" ,width:"280px" }} placeholder="Search Here..." />
                                <button style={{backgroundColor:"white" , border:"none" ,  padding:"0 10px 0 0"}}>
                                    <IoIosSend />
                                </button>
                            </div>
                            <div className="footerSocial">
                                <button>
                                    <RiFacebookLine style={{fontSize:"14px"}}/>
                                </button>
                                <button>
                                    <RiTwitterXLine style={{fontSize:"14px"}}/>
                                </button>
                                <button>
                                    <IoBasketballOutline style={{fontSize:"14px"}}/>
                                </button>
                                <button>
                                    <FaInstagram style={{fontSize:"14px"}}/>
                                </button>
                            </div>
                            <div className="footerImage d-flex">
                                <img src={footer1} width="60px" className="me-2 mt-3 rounded" alt="" />
                                <img src={footer2} width="60px" className="me-2 mt-3 rounded" alt="" />
                                <img src={footer3} width="60px" className="me-2 mt-3 rounded" alt="" />
                                <img src={footer4} width="60px" className="me-2 mt-3 rounded" alt="" />
                                <img src={footer5} width="60px" className="me-2 mt-3 rounded" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <p style={{display:"block" , textAlign:"center" , color:"black"}}>© 2025 <span style={{color:"#64b496"}}> Carrot</span>, All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer