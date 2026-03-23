import UserProfile from "./components/UserProfile";
import RecipeSearch from "./components/RecipeSearch";
import Review from "./components/Review";

function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      backgroundColor: "#eef2f7",
      minHeight: "100vh"
    }}>

      {/* Header */}
      <div style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold"
      }}>
        🍽 Recipe Management System
      </div>

      {/* Main Container */}
      <div style={{
        maxWidth: "900px",
        margin: "20px auto"
      }}>

        <div style={cardStyle}>
          <UserProfile />
        </div>

        <div style={cardStyle}>
          <RecipeSearch />
        </div>

        <div style={cardStyle}>
          <Review />
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default App;