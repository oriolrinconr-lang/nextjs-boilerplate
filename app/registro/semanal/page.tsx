export default function RegistroSemanal() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 32, fontFamily: "system-ui", lineHeight: 1.75 }}>
      <h1>Evaluación Semanal</h1>
      <p><strong>Sin evaluación, te engañas con facilidad.</strong></p>

      <h2>Método</h2>
      <p>
        Suma tus días cumplidos (✅) de la semana. No cuentes “casi”. Solo cumplimiento real.
      </p>

      <h2>Plantilla (copiar/pegar)</h2>
      <pre style={{ padding: 16, overflowX: "auto", border: "1px solid #ddd", borderRadius: 8 }}>
{`SEMANA __ (FECHAS: __ a __)

Días cumplidos (de 7): __/7

Físico:
- Entrenos completados: __/6
- Resistencia (Día B): ✅ / ❌
- Recuperación activa (Día D): ✅ / ❌

Mental:
- Cero dopamina barata: __/7
- Móvil controlado: __/7

Orden:
- 10 min diarios: __/7

Nota simbólica:
- S (7/7) | A (6/7) | B (5/7) | C (4/7) | D (≤3/7)

Una cosa que mantengo:
- __

Una cosa que corrijo:
- __`}
      </pre>

      <h2>Regla de continuidad</h2>
      <ul>
        <li>Si haces <strong>≤3/7</strong>, repites semana (sin subir dificultad).</li>
        <li>Si haces <strong>5/7 o más</strong>, progresas.</li>
      </ul>

      <p style={{ marginTop: 28 }}>
        <em>El hombre serio no se evalúa por cómo se siente, sino por lo que sostiene.</em>
      </p>
    </main>
  );
}
