import './PopularProduct.css'
import { FaArrowRight } from "react-icons/fa";
import juicy from '../assets/juicy.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";

import { useState } from 'react';

const PopularProducts = () => {



    const [category, setCategory] = useState([])
    const [cat, setCat] = useState("All")
    const [products, setProduct] = useState([])

    const categoryfun = () => {
        fetch('https://mocki.io/v1/3bd794e4-4db8-44bc-9fc3-560ce0f010a8')
            .then((data) => data.json())
            .then((data) => {
                setCategory(data.categories)
                setProduct(data.products);

            })
    }

    
    useState(() => {
        categoryfun()
       
    }, [])

    const filterData = cat === "All" ? products : products.filter(val => val.category == cat)
    console.log(filterData);


    return (
        <>
            <div className='mt-5 mb-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 " >
                            <h4 align="center" className='fw-bold'>Popular Products
                            </h4 >
                            <div className="col-5 m-auto" >
                                <p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row ">
                    <div className="col-3">

                        <div class="list-group  list_popular">
                            {
                                category.map((val, index) => {
                                    return (
                                        <button onClick={() => setCat(val.name)} type="button" class="list-group-item button-list list-group-item-action d-flex" >
                                            <div className="col-11"> <p> {val.name}  </p></div>
                                            <div className="col-1"><FaArrowRight /></div>
                                        </button>
                                    )
                                })
                            }

                        </div>

                        <div className='popularImage'>
                            <img src={juicy} alt="" className='mt-3 rounded-1' width="100%" height="420px" />
                            <div className='imgdata'>
                                <h3 style={{ color: "white" }}>Juicy
                                </h3>
                                <h3 style={{ color: "#f7e8aa", fontWeight: 700 }}>FRUITS
                                </h3>
                                <p style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>100% Natural
                                </p>
                                <button style={{ border: "none", color: "white", fontWeight: 500, backgroundColor: "#64b496", borderRadius: "3px", fontSize: "14px", padding: "4px 8px" }}>shop now</button>
                            </div>

                        </div>

                    </div>
                    <div className="col-9 ">
                        <div className='d-flex flex-wrap'>
                            {
                                filterData.map((val, index) => {
                                    const {image , category , title , price , oldPrice} = val
                                    return (
                                        <div key={index} className="col-3">
                                            <div className="card  text-center p-3 shadow-sm mb-4 me-4 rounded- " width="100%" >
                                                <img src={image} className=" w-100 mx-auto" alt="Lemon" style={{ height: '150px', objectFit: 'contain' }} />

                                                <div className="card-body p-1">
                                                    <p style={{ color: "grey" }} className="badge bg-light  mb-2">{category}</p>

                                                    <div className="mb-2">
                                                        <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <MdOutlineStarPurple500 style={{ color: "#f5885f" }} /> <p style={{ fontSize: '10px', display: "inline" }} className="text-muted">(4.5)</p>
                                                    </div>

                                                    <p style={{ fontSize: "13px", fontWeight: 500 }} className="card-title">{title}</p>

                                                    <div>
                                                        <span style={{ color: "#64b496", fontSize: "13px" }} className=" fw-bold me-2">{price}</span>
                                                        <span style={{ fontSize: "10px" }} className="text-decoration-line-through text-muted">{oldPrice}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProducts