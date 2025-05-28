import './Review.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'


const Review = () => {
    return (
        <>

            <div className='mt-5 mb-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 " >
                            <h4 align="center" className='fw-bold'>Great Words From People

                            </h4 >
                            <div className="col-5 m-auto" >
                                <p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12"></div>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className='reviewBox'>
                                <div className="person">
                                    <span style={{ fontSize: "12px", color: "grey" }}>Co Founder</span>
                                    <h5>Stephen Smith</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi. Praesentium excepturi facere impedit.</p>
                                    <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} />
                                </div>
                                <div className='personImg'>
                                    <img src={person2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='reviewBox'>
                                <div className="person">
                                    <span style={{ fontSize: "12px", color: "grey" }}>Manager</span>
                                    <h5>Lorem Robinson</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi. Praesentium excepturi facere impedit.</p>
                                    <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} />
                                </div>
                                <div className='personImg'>
                                    <img src={person1} alt="" />
                                </div>
                            </div>
                        </div><div className="col-4">
                            <div className='reviewBox'>
                                <div className="person">
                                    <span style={{ fontSize: "12px", color: "grey" }}>Team Leader</span>
                                    <h5>Saddika Alard</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi. Praesentium excepturi facere impedit.</p>
                                    <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} />
                                </div>
                                <div className='personImg'>
                                    <img src={person3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review