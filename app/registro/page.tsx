"use client";

import { useState } from "react";

export default function RegistroPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg(data?.error ?? "Error al registrar.");
        return;
      }

      setMsg("Registro completado. Ya puedes iniciar sesión.");
      setName("");
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ maxWidth: 520 }}>
      <h1 style={{ fontSize: 34, marginBottom: 10 }}>Registro</h1>
      <p style={{ opacity: 0.7, marginBottom: 18 }}>No es motivación. Es estructura.</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" minLength={2} required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña (mín 8)"
          type="password"
          minLength={8}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creando…" : "Crear cuenta"}
        </button>

        {msg && <p style={{ margin: 0 }}>{msg}</p>}
      </form>
    </section>
  );
}
