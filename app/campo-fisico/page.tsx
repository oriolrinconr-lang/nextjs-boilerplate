import Link from "next/link";

export default function CampoFisico() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui", lineHeight: 1.7 }}>
      <h1>Campo Físico</h1>
      <p><strong>El cuerpo obedece. La mente aprende.</strong></p>

      <p>
        Este campo no busca estética. Busca <strong>capacidad</strong>.
        Resistencia. Función. Disciplina. El físico como herramienta de gobierno personal.
      </p>

      <section style={{ marginTop: 28 }}>
        <h2>Programas</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>
            <Link href="/campo-fisico/iniciado-30">
              Programa Iniciado — 30 días (base)
            </Link>
          </li>
          <li style={{ opacity: 0.5 }}>
            Programa Operador — 60 días (bloqueado)
          </li>
          <li style={{ opacity: 0.5 }}>
            Pruebas (bloqueado)
          </li>
        </ul>
      </section>

      <p style={{ marginTop: 36 }}>
        <em>Empieza por el mínimo diario. La consistencia es la primera victoria.</em>
      </p>
    </main>
  );
}
