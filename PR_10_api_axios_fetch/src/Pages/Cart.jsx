import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Action/CartAction";
import Header from "../Components/Header";

const Cart = () => {

 const dispatch = useDispatch();
 const data = useSelector(state => state.cart.cart)
 console.log(data);
 

 useEffect(()=>{
  dispatch(getCart())
 },[])

 return (

  

  <div className="container mt-5" style={{ backgroundColor: "#f5f0e6", padding: "20px", borderRadius: "15px" }}>
    <Header/>
    <h2 className="text-center mb-4" style={{ color: "#4e342e" }}>Cart Data</h2>

    {data && data.length > 0 ? (
      data.map((cart) => (
        <div key={cart.id} className="card mb-4 shadow" style={{ backgroundColor: "#d7ccc8", border: "1px solid #a1887f", borderRadius: "15px", overflow: "hidden" }}>
          <div className="card-header" style={{ backgroundColor: "#a1887f", color: "#fff", fontWeight: "bold" }}>
            Cart ID: {cart.id}
          </div>
          <div className="card-body">
            <p><strong>Total:</strong> ${cart.total}</p>
            <p><strong>Discounted Total:</strong> ${cart.discountedTotal}</p>
            <p><strong>User ID:</strong> {cart.userId}</p>
            <p><strong>Total Products:</strong> {cart.totalProducts}</p>
            <p><strong>Total Quantity:</strong> {cart.totalQuantity}</p>

            <h5 style={{ color: "#4e342e" }}>Products:</h5>
            <div className="row">
              {cart.products.map((product) => (
                <div key={product.id} className="col-md-3 mb-3">
                  <div className="card h-100 shadow-sm" style={{ backgroundColor: "#efebe9", border: "1px solid #a1887f", borderRadius: "15px" }}>
                    <img 
                      src={product.thumbnail} 
                      className="card-img-top" 
                      alt={product.title} 
                      style={{ height: '150px', objectFit: 'cover', borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title" style={{ color: "#4e342e" }}>{product.title}</h6>
                      <p className="card-text">
                        Qty: {product.quantity} <br />
                        Price: ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    ) : (
      <h4 className="text-center" style={{ color: "#4e342e" }}>No Cart Data Found</h4>
    )}
  </div>
);

}

export default Cart;