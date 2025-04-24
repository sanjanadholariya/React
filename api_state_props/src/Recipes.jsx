const Recipes = ({ recipes }) => {
    console.log();

    return (
        <>
        <h1 align="center">Recipes</h1>
            <div>
                {
                    recipes.map((val , index) => {
                        return (
                            <div key={index}>
                                <h2>Name :- {val.name}</h2>
                                <img src={val.image} alt="" width={100} />
                                <h4>Ingredients :- </h4>
                                <p>{val.ingredients}</p>
                                <h4>Instructions :- </h4>
                                <p>{val.instructions}</p>
                                <h4></h4>
                                <p><b>MealType :- </b> {val.mealType}</p>

                                <hr /><hr /><hr /><hr /><hr />
                            </div>


                        )
                    })
                }

            </div>
        </>
    )


}
export default Recipes;