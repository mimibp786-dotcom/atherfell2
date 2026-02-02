import { useEffect, useState } from "react";
import axios from "axios";
import WebApp from "@twa-dev/sdk";
import TapButton from "./components/TapButton";
import StaminaBar from "./components/StaminaBar";

export default function App() {
  const [user, setUser] = useState(null);
  const [gold, setGold] = useState(0);
  const [stamina, setStamina] = useState(200);

  const API = import.meta.env.VITE_API;

  useEffect(() => {
    const u = WebApp.initDataUnsafe.user;
    setUser(u);

    axios.post(`${API}/auth`, { initDataUnsafe: WebApp.initDataUnsafe });
  }, []);

  async function tap() {
    const { data } = await axios.post(`${API}/tap`, {
      tg_id: user.id,
    });

    if (data.ok) {
      setGold((g) => g + 1);
      setStamina((s) => s - 1);
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url(/assets/bg.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
        padding: 20,
      }}
    >
      <h1 style={{ textAlign: "center" }}>⚔️ Atherfell ⚔️</h1>

      <div style={{ fontSize: 24, marginBottom: 10 }}>
        🪙 Gold: {gold}
      </div>

      <StaminaBar value={stamina} max={200} />

      <TapButton onTap={tap} />
    </div>
  );
}
