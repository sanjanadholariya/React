import { FaArrowRight } from "react-icons/fa";
import './Latest.css'
import latest1 from '../assets/latest1.jpg'
import latest2 from '../assets/latest2.jpg'
import latest3 from '../assets/latest3.jpg'

const Latest = () => {
    return (
        <>
            <div className='latest mt-5 '>
                <div className="container">
                    <div className="row">
                        <div className="col-12 " >
                            <h4 align="center" className='fw-bold'>Latest News
                            </h4 >
                            <div className="col-5 m-auto" >
                                <p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12"></div>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="cardBox">
                                <div className="card" >
                                    <div className="card-body">
                                        <span style={{ fontSize: "13px" }}>By Admin | Snacks</span>
                                        <p style={{ color: "black", fontWeight: 700, fontSize: "15px" }} className="card-text p-0 m-0">Condimentum Nam enim bestMorbi odio sodales.</p>
                                        <div className="d-flex align-items-center ps-0">
                                            <a href="#" className="btn ps-0 m-0" style={{ color: "#64b496", backgroundColor: "transparent", border: "none", fontWeight: 600 }}>Read More</a>
                                            <FaArrowRight style={{ color: "#64b496" }} />
                                        </div>
                                    </div>
                                    <img src={latest1} className="card-img-bottom" alt="Card image" />
                                </div>
                                <div className="month">
                                    <h5 className="mb-0">09</h5>
                                    <p style={{color:"white"}}>sep</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-4">
                            <div className="card" >
                                <div className="card-body">
                                    <span style={{ fontSize: "13px" }}>By Admin | Snacks</span>
                                    <p style={{ color: "black", fontWeight: 700, fontSize: "15px" }} className="card-text m-0">Condimentum Nam enim bestMorbi odio sodales.</p>
                                    <div className="d-flex align-items-center ps-0">
                                        <a href="#" className="btn ps-0 " style={{ color: "#64b496", backgroundColor: "transparent", border: "none", fontWeight: 600 }}>Read More</a>
                                        <FaArrowRight style={{ color: "#64b496" }} />
                                    </div>
                                </div>
                                <img src={latest2} className="card-img-bottom" alt="Card image" />
                                <div className="month">
                                    <h5 className="mb-0">12</h5>
                                    <p style={{color:"white"}}>oct</p>
                                </div>
                            </div>


                        </div><div className="col-4">
                            <div className="card" >
                                <div className="card-body">
                                    <span style={{ fontSize: "13px" }}>By Admin | Snacks</span>
                                    <p style={{ color: "black", fontWeight: 700, fontSize: "15px" }} className="card-text m-0">Condimentum Nam enim bestMorbi odio sodales.</p>
                                    <div className="d-flex align-items-center ps-0">
                                        <a href="#" className="btn ps-0 " style={{ color: "#64b496", backgroundColor: "transparent", border: "none", fontWeight: 600 }}>Read More</a>
                                        <FaArrowRight style={{ color: "#64b496" }} />
                                    </div>
                                </div>
                                <img src={latest3} className="card-img-bottom" alt="Card image" />
                                <div className="month">
                                    <h5 className="mb-0">22</h5>
                                    <p style={{color:"white"}}>jan</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Latest