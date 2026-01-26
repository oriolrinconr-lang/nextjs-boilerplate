import Link from "next/link";

export default function CampoMental() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui" }}>
      <h1>Campo Mental</h1>
      <p><strong>Orden interior antes de poder exterior.</strong></p>

      <p>
        Este campo no está diseñado para entretenerte ni motivarte.
        Está diseñado para <strong>reordenarte</strong>.
      </p>

      <section style={{ marginTop: 32 }}>
        <h2>Accesos</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>
            <Link href="/campo-mental/manual">
              Manual del Autodominio
            </Link>
          </li>
          <li>
            <Link href="/campo-mental/rito">
              Rito de Entrada
            </Link>
          </li>
          <li style={{ opacity: 0.5 }}>
            Protocolos (bloqueado)
          </li>
        </ul>
      </section>

      <p style={{ marginTop: 40 }}>
        <em>No avances sin haber entendido el manual.</em>
      </p>
    </main>
  );
}
