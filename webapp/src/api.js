const API = import.meta.env.VITE_API_URL || "https://atherfell2-production.up.railway.app";

export async function registerUser(tgUser) {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      telegramId: tgUser.id,
      username: tgUser.username
    })
  });
  return res.json();
}

export async function tap(telegramId) {
  const res = await fetch(`${API}/tap`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ telegramId })
  });
  return res.json();
}

export async function getUser(telegramId) {
  const res = await fetch(`${API}/user/${telegramId}`);
  return res.json();
}
