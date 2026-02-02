export default function TapButton({ onTap }) {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <img
        src="/assets/sword.png"
        alt="tap"
        style={{
          width: 180,
          transition: "transform 0.1s",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.target.style.transform = "scale(0.9)";
          setTimeout(() => (e.target.style.transform = "scale(1)"), 100);
          onTap();
        }}
      />
    </div>
  );
}
