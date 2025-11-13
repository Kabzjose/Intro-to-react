import { useState } from "react";
import TeamMemberCard from "./student.jsx";
import "./index.css";
function App() {
  const members = [
    {
      name: "Jose Kabz",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Alice Peter",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Mark Ronny",
      role: "Backend Engineer",
      image: "https://i.pravatar.cc/150?img=12",
    },
  ];
  //Dark mode -True(dark) false(light)
  const [darkMode,setDarkMode]=useState(false);
  
 const themeStyles={
  backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#f5f5f5" : "#121212",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s",
  };


 
  return (
    <div style={themeStyles}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: darkMode ? "#333" : "#4caf50",
          color: "white",
          transition: "transform 0.2s, background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Toggle Theme
      </button>
      <h1 style={{ marginBottom: "20px" }}>Team Members</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {members.map((m, index) => (
          <TeamMemberCard
            key={index}
            name={m.name}
            role={m.role}
            image={m.image}
            darkMode={darkMode} // pass theme to cards 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
