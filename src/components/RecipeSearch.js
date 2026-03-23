import React, { useState } from "react";
import axios from "axios";

function RecipeSearch() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [vegetarian, setVegetarian] = useState(false);

  const searchRecipes = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=${vegetarian ? "vegetarian" : ""}&number=6&apiKey=db3496e8df564404b2e67e41e77b91ae`
    );

    setRecipes(response.data.results);
  };

  return (
    <div>
      <h2>🔍 Search Recipes</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter recipe..."
          onChange={(e) => setQuery(e.target.value)}
          style={inputStyle}
        />

        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            onChange={() => setVegetarian(!vegetarian)}
          /> Vegetarian
        </label>
      </div>

      <button onClick={searchRecipes} style={buttonStyle}>
        Search
      </button>

      {/* Recipe Cards */}
      <div style={gridStyle}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={card}>
            <img src={recipe.image} alt="recipe" style={imageStyle} />
            <h4>{recipe.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  width: "220px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const gridStyle = {
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px"
};

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
};

const imageStyle = {
  width: "100%",
  borderRadius: "10px"
};

export default RecipeSearch;