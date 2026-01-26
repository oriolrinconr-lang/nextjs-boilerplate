import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: 32, fontFamily: "system-ui" }}>
      <h1>Liberam Facultatem</h1>
      <p><strong>Entrada</strong></p>
      <p>Si estás viendo esto, la base está operativa. Entra por la puerta.</p>
      <p style={{ marginTop: 24 }}>
        <Link href="/entrada">Ir a /entrada →</Link>
      </p>
    </main>
  );
}
