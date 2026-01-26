export default function RegistroDiario() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui", lineHeight: 1.75 }}>
      <h1>Registro Diario</h1>
      <p><strong>5 checks. 1 línea. Sin novela.</strong></p>

      <h2>Cómo usarlo</h2>
      <ol>
        <li>Copia este bloque en una nota del móvil cada mañana (o cada noche).</li>
        <li>Marca ✅ o ❌.</li>
        <li>Escribe una sola línea de aprendizaje.</li>
      </ol>

      <h2>Bloque de registro (copiar/pegar)</h2>
      <pre style={{ padding: 16, overflowX: "auto", border: "1px solid #ddd", borderRadius: 8 }}>
{`DÍA __ / FECHA: __

1) Orden externo (10 min):      ✅ / ❌
2) Entrenamiento físico:        ✅ / ❌
3) Cero dopamina barata:        ✅ / ❌
4) Móvil fuera de la cama:      ✅ / ❌
5) Incomodidad consciente:      ✅ / ❌

Aprendizaje (1 línea):
- __`}
      </pre>

      <h2>Reglas</h2>
      <ul>
        <li><strong>Entrenamiento físico</strong>: mínimo 20 min (o el día asignado del programa).</li>
        <li><strong>Cero dopamina barata</strong>: porno, apuestas, scroll compulsivo, consumo impulsivo.</li>
        <li><strong>Si fallas</strong>: registras y vuelves al plan en la siguiente acción. Sin culpa.</li>
      </ul>

      <p style={{ marginTop: 28 }}>
        <em>La disciplina no necesita emoción. Necesita registro.</em>
      </p>
    </main>
  );
}
