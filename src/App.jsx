export default function App() {
  return (
    <div style={{ fontFamily: "Arial", background: "#f7f3ea", color: "#2d2a26" }}>

      {/* HERO */}
      <div style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')",
        backgroundSize: "cover",
        color: "white",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)"
        }} />

        <div style={{ position: "relative", maxWidth: 800 }}>
          <h1 style={{ fontSize: 60 }}>Finca Alto Horizonte</h1>
          <p style={{ fontSize: 20 }}>
            Café de especialidad • Huila, Colombia • Hasta 92 puntos SCA
          </p>
        </div>
      </div>

      {/* HISTORIA */}
      <div style={{ padding: 60, maxWidth: 900, margin: "auto" }}>
        <h2>Historia</h2>
        <p>
          Finca familiar en La Plata, Huila. Cultivamos café a más de 1.900 m.s.n.m.
          con procesos artesanales y enfoque en café de especialidad de alta calidad.
        </p>
      </div>

      {/* CAFÉ */}
      <div style={{ padding: 60, background: "white" }}>
        <h2>Nuestro Café</h2>
        <ul>
          <li>Origen: Huila, Colombia</li>
          <li>Altitud: 1.900 m.s.n.m.</li>
          <li>Variedades: Castillo, Caturra, Geisha</li>
          <li>Proceso: Lavado fermentación prolongada</li>
          <li>Calidad: hasta 92 puntos SCA</li>
        </ul>
      </div>

      {/* GASTRONOMÍA */}
      <div style={{
        padding: 60,
        background: "#2d2a26",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Alta gastronomía</h2>
        <p>
          Café exclusivo para restaurantes, tostadores y profesionales del café de especialidad.
        </p>
      </div>

    </div>
  )
}
