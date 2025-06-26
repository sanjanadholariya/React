import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../redux/Action/RecipeAction";
import Header from "../Components/Header";
const Recipes = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.recipe.recipe)
  console.log(data);
  

  useEffect(()=>{
    dispatch(getRecipe())
  },[])

  return (
  <div className="container mt-5" style={{ backgroundColor: "#f5f0e6", padding: "20px", borderRadius: "15px" }}>
    <Header/>
    <h2 className="text-center mb-4" style={{ color: "#4e342e" }}>Recipe Data</h2>

    {data && data.length > 0 ? (
      <div className="row">
        {data.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow" style={{ backgroundColor: "#d7ccc8", border: "1px solid #a1887f", borderRadius: "15px", overflow: "hidden" }}>
              
              <div style={{ height: '250px', backgroundColor: "#fff" }}>
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  style={{ 
                    height: '100%', 
                    width: '100%', 
                    objectFit: 'contain', 
                    padding: "10px" 
                  }} 
                />
              </div>

              <div className="card-body">
                <h5 className="card-title" style={{ color: "#4e342e" }}>{recipe.name}</h5>
                <p className="card-text" style={{ color: "#4e342e" }}>
                  <strong>Cuisine:</strong> {recipe.cuisine} <br />
                  <strong>Difficulty:</strong> {recipe.difficulty} <br />
                  <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min <br />
                  <strong>Servings:</strong> {recipe.servings}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <h4 className="text-center" style={{ color: "#4e342e" }}>No Recipe Data Found</h4>
    )}
  </div>
);

}

export default Recipes;