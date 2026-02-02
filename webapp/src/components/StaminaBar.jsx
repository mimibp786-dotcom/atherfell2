export default function StaminaBar({ value, max }) {
  return (
    <div
      style={{
        width: "100%",
        height: 20,
        background: "#1c1c1c",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: `${(value / max) * 100}%`,
          height: "100%",
          background: "#2e86ff",
          transition: "0.3s",
        }}
      />
    </div>
  );
}
