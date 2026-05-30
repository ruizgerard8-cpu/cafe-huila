import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#2b2b2b]">

      {/* HERO */}
      <div
        className="relative h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Finca Alto Horizonte
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Café de especialidad de alta gastronomía • Origen Huila • Hasta 92 puntos SCA
          </p>

          <a
            href="#historia"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Conocer la finca
          </a>
        </motion.div>
      </div>

      {/* CALIDAD */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Calidad del café
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            Cultivo de altura
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            92 puntos SCA
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            Origen Colombia
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="bg-white py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
        <p>
          Finca familiar en La Plata, Huila. Cultivamos café a más de 1.900 m.s.n.m.
          con procesos artesanales y enfoque en café de especialidad.
        </p>
      </section>

      {/* CAFÉ */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Nuestro café</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Origen", "La Plata, Huila"],
            ["Altitud", "1.900 m.s.n.m."],
            ["Variedades", "Castillo, Caturra, Geisha"],
            ["Proceso", "Lavado fermentación prolongada"],
            ["Recolección", "Manual selectiva"],
            ["Calidad", "Hasta 92 SCA"]
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <b>{item[0]}:</b> {item[1]}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-[#2d2a26] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Dirigido a alta gastronomía
        </h2>
        <p className="max-w-3xl mx-auto">
          Café exclusivo para restaurantes, tostadores y profesionales del café de especialidad.
        </p>
      </section>

    </div>
  );
}
