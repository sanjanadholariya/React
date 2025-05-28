import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import organic from '../assets/organic.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";
import './Organic.css'

const Organic = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-4">
                  <div className="card  text-center p-3 shadow-sm mb-4 me-1 rounded- " >
                    <img src={img1} className=" w-100 mx-auto" alt="Lemon" style={{ height: '150px', objectFit: 'contain' }} />

                    <div className="card-body p-1">
                      <p style={{ color: "grey" }} className="badge bg-light  mb-2">Vegetables</p>

                      <div className="mb-2">
                        <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <p style={{ fontSize: '10px', display: "inline" }} className="text-muted">(4.5)</p>
                      </div>

                      <p style={{ fontSize: "13px", fontWeight: 500 }} className="card-title">Fresh organic villa farm lemon 500gm pack</p>

                      <div>
                        <span style={{ color: "#64b496", fontSize: "13px" }} className=" fw-bold me-2">$120.25</span>
                        <span style={{ fontSize: "10px" }} className="text-decoration-line-through text-muted">$123.25</span>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-4">
                  <div className="card  text-center p-3 shadow-sm mb-4 me-1 rounded-1 " >
                    <img src={img2} className=" w-100 mx-auto" alt="Lemon" style={{ height: '150px', objectFit: 'contain' }} />

                    <div className="card-body p-1">
                      <p style={{ color: "grey" }} className="badge bg-light  mb-2">Snacks</p>

                      <div className="mb-2">
                        <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <p style={{ fontSize: '10px', display: "inline" }} className="text-muted">(4.5)</p>
                      </div>

                      <p style={{ fontSize: "13px", fontWeight: 500 }} className="card-title">Best snakes with hazel nut pack 200gm</p>

                      <div>
                        <span style={{ color: "#64b496", fontSize: "13px" }} className=" fw-bold me-2">$145</span>
                        <span style={{ fontSize: "10px" }} className="text-decoration-line-through text-muted">$150</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card  text-center p-3 shadow-sm mb-4 me-1 rounded-1 " >
                    <img src={img3} className=" w-100 mx-auto" alt="Lemon" style={{ height: '150px', objectFit: 'contain' }} />

                    <div className="card-body p-1">
                      <p style={{ color: "grey" }} className="badge bg-light  mb-2">Fruits</p>

                      <div className="mb-2">
                        <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <p style={{ fontSize: '10px', display: "inline" }} className="text-muted">(4.5)</p>
                      </div>

                      <p style={{ fontSize: "13px", fontWeight: 500 }} className="card-title">Fresh organic apple 1kg simla marming</p>

                      <div>
                        <span style={{ color: "#64b496", fontSize: "13px" }} className=" fw-bold me-2">$120.25</span>
                        <span style={{ fontSize: "10px" }} className="text-decoration-line-through text-muted">$123.25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className='organic_image'>
                <img src={organic} width="100%" height="326px" className='rounded-1' alt="" />
                <div className='organic_content ' align="right">
                  <h3>Organic & Healthy</h3>
                   <h3> Vegetables</h3>
                   <div className='mb-3'>
                    <h5 style={{display:"inline"}}>25%</h5>
                    <p style={{display:"inline" , color:"black"}}> OFF</p>
                    
                   </div>
                   <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Organic