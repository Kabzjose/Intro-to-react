function TeamMemberCard({ name, role, image,darkMode }) {
  return (
    <div
     
      className="team-card"
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "12px",
        }}
      />

      <h2 style={{ fontSize: "20px", marginBottom: "6px" }}>{name}</h2>
      <p style={{ color: "#666", fontSize: "16px" }}>{role}</p>
    </div>
  );
}

export default TeamMemberCard;
