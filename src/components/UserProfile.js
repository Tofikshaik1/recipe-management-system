import React, { useState } from "react";

function UserProfile() {

  const [profile, setProfile] = useState({
    diet: "",
    allergies: "",
    skill: "",
    preferredIngredients: "",
    avoidIngredients: ""
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    alert("Profile Saved Successfully!");
  };

  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>👤 User Profile</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="diet"
          placeholder="Diet Preference (veg/non-veg)"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="allergies"
          placeholder="Allergies"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="skill"
          placeholder="Cooking Skill Level"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="preferredIngredients"
          placeholder="Preferred Ingredients"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="avoidIngredients"
          placeholder="Ingredients to Avoid"
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Save Profile
        </button>

      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px"
};

export default UserProfile;