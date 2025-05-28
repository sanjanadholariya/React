import './Deal.css'
const Deal = () => {
    return (
        <>
            <div className="deal p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className='deal_box mt-5 col-10'>
                                <div className="d-flex align-items-baseline">
                                    <span className="me-2" style={{color:"#64b496" , fontWeight:700 , fontSize:"20px"}}>35%</span>
                                    <p className='p-0' style={{ fontSize: "15px" , color:"black"}}> OFF</p>
                                </div>
                                <h3 className=' mb-3'>Great deal on organic food.
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>


            
        </>
    )
}

export default Deal