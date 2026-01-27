"use client";
import { useState } from "react";

export default function RegistroPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setMsg(data?.error ?? "Error");
    setMsg("OK: usuario creado");
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h1>Registro</h1>
      <form onSubmit={submit} style={{ display: "grid", gap: 10 }}>
        <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button>Crear cuenta</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

