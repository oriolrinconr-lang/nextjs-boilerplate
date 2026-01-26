import Link from "next/link";

export default function Registro() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui", lineHeight: 1.7 }}>
      <h1>Registro</h1>
      <p><strong>Lo que no se mide, se negocia.</strong></p>

      <p>
        Este sistema no existe para castigarte. Existe para <strong>evitar la mentira</strong>.
        Aquí no hay “me siento bien”. Hay cumplido o no cumplido.
      </p>

      <section style={{ marginTop: 28 }}>
        <h2>Accesos</h2>
        <ul style={{ lineHeight: 2 }}>
          <li><Link href="/registro/diario">Registro Diario</Link></li>
          <li><Link href="/registro/semanal">Evaluación Semanal</Link></li>
          <li style={{ opacity: 0.5 }}>Rachas (bloqueado)</li>
        </ul>
      </section>

      <p style={{ marginTop: 36 }}>
        <em>Sin registro no hay progreso. Solo relatos.</em>
      </p>
    </main>
  );
}
