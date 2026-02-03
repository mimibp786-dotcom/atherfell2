export default function EnergyBar({ energy, max }) {
  const percent = (energy / max) * 100;

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <div
        style={{
          height: 20,
          background: "#333",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "gold",
            transition: "width 0.3s",
          }}
        ></div>
      </div>

      <p style={{ textAlign: "center", marginTop: 5 }}>
        Energy: {energy}/{max}
      </p>
    </div>
  );
}
