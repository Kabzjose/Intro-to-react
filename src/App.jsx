import TeamMemberCard from "./student.jsx";

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

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
