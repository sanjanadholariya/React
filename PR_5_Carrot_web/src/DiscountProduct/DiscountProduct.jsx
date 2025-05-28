import './DiscountProduct.css'
import discount_1 from '../assets/discount_1.jpg'
import discount_2 from '../assets/discount_2.jpg'
const DiscountProduct = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div class="list-group ">
                            <button type="button" class="list-group-item list-group-item-action " >
                                Cake & Milk
                                <p>(65 items)</p>
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">Fresh Meat
                                <p>(30 items)</p>
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">Vegetables
                                <p><p>(25 items)</p></p>
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">Apple & Mango
                                p<p>(45 items)</p>
                            </button>
                            <button type="button" class="list-group-item list-group-item-action" >Strawberry
                                <p>(68 items)</p>
                            </button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='images position-relative '>
                            <img src={discount_1} alt="" />

                            <div className='d-flex align-items-center justify-content-center position-absolute'style={{ top: "2%", left: "15%", transform: "translateX(-50%)", color: "white" }} >
                                <h2 className='me-1'>50</h2>
                            <div className='pt-2'>
                                <p style={{color:"white" , fontWeight:600}} className='p-0 m-0'>%</p>
                                <p style={{color:"white" , fontWeight:600 , fontSize:"15px"}}>OFF</p>
                            </div>
                            </div>

                            <div className='position-absolute   ' style={{ bottom: "12%", left: "50%", transform: "translateX(-50%)", color: "white" }}>
                                <h3 style={{ fontSize: "19px" }}>Cake</h3>

                            </div>

                            <div className='position-absolute   ' style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)", color: "white" }}>
                                <button>Shop Now</button>
                            </div>


                        </div>
                    </div>
                    <div className="col-4">
                        <div className='images position-relative'>
                            <img src={discount_2} alt="" />

                            <div className='d-flex align-items-center justify-content-center position-absolute'style={{ top: "2%", left: "15%", transform: "translateX(-50%)", color: "white" }} >
                                <h2 className='me-1'>40</h2>
                            <div className='pt-2'>
                                <p style={{color:"white" , fontWeight:600}} className='p-0 m-0'>%</p>
                                <p style={{color:"white" , fontWeight:600 , fontSize:"15px"}}>OFF</p>
                            </div>
                            </div>

                            <div className='position-absolute   ' style={{ bottom: "12%", left: "50%", transform: "translateX(-50%)", color: "white" }}>
                                <h3 style={{ fontSize: "19px" }}>Milk</h3>

                            </div>

                            <div className='position-absolute   ' style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)", color: "white" }}>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountProduct