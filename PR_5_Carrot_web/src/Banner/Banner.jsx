import './Banner.css'

import banner_1 from '../assets/banner_1.jpg'
import banner_2 from '../assets/banner-2.jpg'


const Banner = () => {
    return (
       <div className='banner mb-5 '>
         <div classname="container-fluid ">
            <div className="row">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex" style={{
                            backgroundImage: `url(${banner_1})`,
                            height: "80vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                            

                        }} >
                            <div className="col-6 banner_first align-items-center justify-content-center ">
                                <h5 className='pb-3'>
                                    <span>100%</span> Organic Vegetables
                                </h5>
                                <h2 className='pb-3'>The Best Way To Stuff Your Wallet.</h2>
                                <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint cupiditate! Non, magnam.</p>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-6"></div>
                        </div>
                        <div className="carousel-item" style={{
                            backgroundImage: `url(${banner_2})`,
                            height: "80vh",
                            backgroundPosition: "center",
                            backgroundSize: "cover"

                        }}>
                           <div className="col-6 banner_first align-items-center justify-content-center ">
                                <h5 className='pb-3'>
                                    <span>100%</span> Organic Fruits
                                </h5>
                                <h2 className='pb-3'>Explore Fresh & Juicy Fruits.</h2>
                                <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint cupiditate! Non, magnam.</p>
                                <button>Shop Now</button>
                            </div>
                            <div className="col-6"></div>
                        </div>


                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div >
       </div>

    )
}

export default Banner
