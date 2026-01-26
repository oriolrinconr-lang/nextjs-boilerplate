export default function Entrada() {
  return (
   import Image from "next/image";

    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui", lineHeight: 1.75 }}>
     <div style={{ marginBottom: 36 }}>
  <Image
    src="/entrada.jpg"
    alt="Liberam Facultatem"
    width={1600}
    height={600}
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "18px",
      objectFit: "cover",
      opacity: 0.9,
    }}
    priority
  />
</div>

      <h1>Liberam Facultatem</h1>

      <p><strong>Esto no es motivación. Es estructura.</strong></p>

      <p>
        Liberam Facultatem es un campo de entrenamiento físico y mental, de orientación
        estoico-formativa, para hombres que están dispuestos a gobernarse.
      </p>

      <h2>No es para ti si…</h2>
      <ul>
        <li>Buscas motivación en lugar de disciplina.</li>
        <li>Quieres resultados sin incomodidad.</li>
        <li>Te defines como víctima y no como responsable.</li>
        <li>Abandonas cuando nadie te mira.</li>
      </ul>

      <h2>Qué sí encontrarás</h2>
      <ul>
        <li>Orden antes que entusiasmo.</li>
        <li>Reglas simples sostenidas en el tiempo.</li>
        <li>Entrenamiento físico y mental integrado.</li>
        <li>Silencio, constancia y exigencia.</li>
      </ul>

      <h2>La entrada</h2>
      <p>
        El acceso no es inmediato. Primero hay un <strong>Rito de Entrada</strong>.
        Siete días de cumplimiento básico. Sin discursos. Sin negociación.
      </p>

      <p style={{ marginTop: 28 }}>
        <em>
          Si no estás dispuesto a cumplir 7 días, no continúes.
          Vuelve cuando estés listo.
        </em>
      </p>
    </main>
  );
}
