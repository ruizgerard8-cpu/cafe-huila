import { motion } from "framer-motion";
import { Coffee, MapPin, Leaf, ShoppingCart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-gray-800 font-sans">

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Finca Alto Horizonte
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Café de especialidad · Huila Colombia · Hasta 92 puntos SCA
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            Conoce nuestro café
          </button>
        </motion.div>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <Leaf className="mx-auto mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2">Cultivo sostenible</h2>
          <p>
            Cultivado respetando la tierra, el clima y la biodiversidad de Huila.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <Coffee className="mx-auto mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2">Café de especialidad</h2>
          <p>
            Granos seleccionados manualmente para calidad en taza excepcional.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <MapPin className="mx-auto mb-4" size={40} />
          <h2 className="text-xl font-semibold mb-2">Origen Colombia</h2>
          <p>
            Finca familiar en las montañas de La Plata, Huila.
          </p>
        </div>

      </div>

      {/* PRODUCTO */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">Nuestro Café</h2>
          <p className="mb-10">
            Café 100% arábica de alta montaña, procesado artesanalmente.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#f7f3ea] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Café en grano</h3>
              <p className="mb-4">Ideal para molienda profesional o espresso.</p>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mx-auto">
                <ShoppingCart size={18} /> Comprar
              </button>
            </div>

            <div className="bg-[#f7f3ea] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Café molido</h3>
              <p className="mb-4">Perfecto para preparación rápida y consistente.</p>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mx-auto">
                <ShoppingCart size={18} /> Comprar
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="bg-[#2d2a26] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="mb-6">
          Escríbenos para restaurantes, tostadores o visitas a la finca.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
          Contactar
        </button>
      </div>

    </div>
  );
}
