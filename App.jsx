import { motion } from "framer-motion";
import {
  Coffee,
  MapPin,
  Leaf,
  Award,
  Utensils
} from "lucide-react";

function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {children}
    </div>
  );
}

function Button({ children }) {
  return (
    <button className="bg-black text-white px-5 py-2 rounded-xl hover:opacity-80 transition">
      {children}
    </button>
  );
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-gray-800">

      {/* HERO */}
      <div className="relative h-[75vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Finca Alto Horizonte
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Café de especialidad • Huila • 92 SCA
          </p>

          <Button>Conocer la finca</Button>
        </motion.div>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">

        <Card>
          <Leaf className="mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cultivo de altura</h2>
          <p>Huila, suelos volcánicos y clima perfecto.</p>
        </Card>

        <Card>
          <Award className="mb-4" />
          <h2 className="text-xl font-semibold mb-2">92 puntos SCA</h2>
          <p>Café de especialidad reconocido internacionalmente.</p>
        </Card>

        <Card>
          <MapPin className="mb-4" />
          <h2 className="text-xl font-semibold mb-2">Origen Colombia</h2>
          <p>Producción familiar en el corazón cafetero.</p>
        </Card>

      </div>

      {/* ENFOQUE */}
      <div className="bg-[#2d2a26] text-white py-20 px-6 text-center">
        <Utensils className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">
          Alta gastronomía
        </h2>
        <p className="max-w-3xl mx-auto">
          Café para tostadores y restaurantes de especialidad.
        </p>
      </div>

    </div>
  );
}
