function TeamMemberCard({ name, role, image }) {
  return (
    <div
      style={{
        width: "260px",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "white",
      }}
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
