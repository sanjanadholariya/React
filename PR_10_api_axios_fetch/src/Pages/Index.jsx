import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
 return (
  <div className="container mt-5" style={{ backgroundColor: "#f5f0e6", padding: "30px", borderRadius: "20px", textAlign: "center" }}>
    <h1 style={{ color: "#4e342e", marginBottom: "30px" }}>Welcome to the Cart & Recipe App</h1>

    <div className="d-flex justify-content-center gap-4 flex-wrap">
      
      <a href="/cart" style={{
        textDecoration: "none",
        backgroundColor: "#a1887f",
        color: "#fff",
        padding: "15px 30px",
        borderRadius: "10px",
        fontWeight: "bold",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "0.3s"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#8d6e63"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#a1887f"}
      >
        Go to Cart
      </a>

      <a href="/recipes" style={{
        textDecoration: "none",
        backgroundColor: "#a1887f",
        color: "#fff",
        padding: "15px 30px",
        borderRadius: "10px",
        fontWeight: "bold",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "0.3s"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#8d6e63"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#a1887f"}
      >
        Go to Recipes
      </a>
      
    </div>
  </div>
);

  
}

export default Index