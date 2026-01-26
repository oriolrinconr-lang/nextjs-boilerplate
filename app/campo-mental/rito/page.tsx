export default function RitoEntrada() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui", lineHeight: 1.75 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ marginBottom: 8 }}>Rito de Entrada</h1>
        <p style={{ margin: 0 }}>
          <strong>7 días. Sin negociación.</strong>
        </p>
        <p style={{ marginTop: 10, opacity: 0.85 }}>
          Esto no es un formulario. Es una prueba mínima de gobierno personal. Si no puedes sostener 7 días,
          no estás listo para pertenecer.
        </p>
      </header>

      <section>
        <h2>Regla cero</h2>
        <p>
          No hay dramatismo. No hay discurso. No hay “mañana empiezo”.
          Solo existe: <strong>cumplido</strong> o <strong>no cumplido</strong>.
        </p>

        <h2>Las 5 obligaciones (cada día, durante 7 días)</h2>
        <ol>
          <li>
            <strong>Orden externo (10 min):</strong> cama hecha + 10 minutos de limpieza real (suelo, ropa, cocina o baño).
          </li>
          <li>
            <strong>Entrenamiento físico (mínimo 20 min):</strong> caminar rápido / cuerda / calistenia / bici.
            No es por rendimiento; es por obediencia.
          </li>
          <li>
            <strong>Cero dopamina barata:</strong> pornografía, apuestas, scroll compulsivo y consumo impulsivo.
            Si caes, se registra y se reinicia el día siguiente (sin novela).
          </li>
          <li>
            <strong>Móvil fuera del dormitorio:</strong> o, si no es posible, fuera de la cama y en modo avión 60 min antes de dormir.
          </li>
          <li>
            <strong>Una incomodidad consciente:</strong> ducha fría 60–90s o 20 min de caminata sin música, en silencio.
          </li>
        </ol>

        <h2>El registro (sin apps, sin excusas)</h2>
        <p>
          Cada noche, anota en una nota del móvil o papel:
        </p>
        <ul>
          <li>Día 1–7</li>
          <li>✅/❌ en cada obligación</li>
          <li>Una frase: qué aprendiste hoy (máximo 1 línea)</li>
        </ul>

        <h2>Consecuencia</h2>
        <p>
          Si fallas 2 días en la semana, no avanzas. Punto.
          Vuelves a empezar el rito desde el día 1.
        </p>

        <h2>Las dos vías</h2>
        <p>Tras completar 7 días, eliges vía:</p>
        <ul>
          <li>
            <strong>Reconstrucción:</strong> si vienes del caos, adicción o desorden crónico. Primero control básico.
          </li>
          <li>
            <strong>Elevación:</strong> si ya cumples y quieres exigencia superior. Se sube la carga desde el día 1.
          </li>
        </ul>

        <h2>Cierre</h2>
        <p>
          Liberam Facultatem no se compra. Se demuestra.
        </p>
        <p style={{ marginTop: 20 }}>
          <em>Vuelve cuando hayas cumplido 7 días. No antes.</em>
        </p>
      </section>
    </main>
  );
}
