import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#1f1f1f] font-sans">

      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            Finca Alto Horizonte
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Café de especialidad de origen Huila · 92 puntos SCA · Alta gastronomía
          </p>

          <a
            href="#historia"
            className="mt-10 inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Conocer la finca
          </a>
        </motion.div>
      </section>

      {/* VALUE */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-16">
          Café de origen excepcional
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Altura extrema",
              text: "Cultivado a 1.900 m.s.n.m. en microclimas únicos de Huila.",
            },
            {
              title: "92 puntos SCA",
              text: "Perfil sensorial complejo, limpio y de alta puntuación en taza.",
            },
            {
              title: "Proceso artesanal",
              text: "Recolección manual y fermentaciones controladas lote a lote.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/5"
            >
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="historia" className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-10">Nuestra historia</h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Finca Alto Horizonte nace en La Plata, Huila (Colombia), una región reconocida
            por producir algunos de los cafés más complejos del país. A más de 1.900 metros
            de altitud, combinamos tradición familiar y procesos de precisión para obtener
            cafés de especialidad con identidad propia.
          </p>
        </div>
      </section>

      {/* COFFEE SPECS */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-center text-4xl font-light mb-16">
          Nuestro café
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Origen", "La Plata, Huila"],
            ["Altitud", "1.900 m.s.n.m."],
            ["Variedades", "Castillo · Caturra · Geisha"],
            ["Proceso", "Lavado con fermentación prolongada"],
            ["Recolección", "Manual selectiva"],
            ["Calidad", "Hasta 92 puntos SCA"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#fff] p-6 rounded-xl border border-black/5"
            >
              <p className="text-sm text-gray-500">{item[0]}</p>
              <p className="font-medium mt-1">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GASTRONOMY */}
      <section className="bg-[#1f1f1f] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-light mb-6">
          Alta gastronomía
        </h2>

        <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
          Un café diseñado para restaurantes, tostadores y profesionales que buscan
          un producto de origen, trazabilidad y excelencia en taza.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        Finca Alto Horizonte · Café de especialidad · Huila, Colombia
      </footer>

    </div>
  );
}
