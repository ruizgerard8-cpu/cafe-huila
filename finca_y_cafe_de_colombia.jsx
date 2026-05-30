import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Coffee, MapPin, Leaf, Award, Utensils } from "lucide-react";

export default function FincaCafeColombia() {
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
            Café de especialidad de alta gastronomía • Origen Huila • Hasta 92 puntos SCA
          </p>
          <Button className="text-lg px-6 py-3">
            Conocer la finca
          </Button>
        </motion.div>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Leaf className="mx-auto mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Cultivo de altura</h2>
            <p>
              Cultivado en las montañas de Huila, donde la altitud, el clima y los suelos volcánicos
              aportan complejidad y dulzura al café.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Award className="mx-auto mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Café de especialidad 92 SCA</h2>
            <p>
              Lotes cuidadosamente seleccionados con puntuaciones de cata de hasta 92 puntos,
              reconocidos por su calidad excepcional.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="mx-auto mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Origen Colombia</h2>
            <p>
              Producción familiar en el corazón cafetero de Colombia.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* HISTORIA */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
          <p className="text-lg leading-relaxed mb-6">
            Ubicada en el municipio de La Plata, en el departamento de Huila, Colombia,
            Finca Alto Horizonte es una finca familiar dedicada al cultivo de café de especialidad de alta calidad.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A más de 1.900 metros sobre el nivel del mar, nuestras plantaciones se benefician de un clima privilegiado,
            suelos volcánicos y una combinación única de altitud, temperatura y tradición cafetera.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestra familia trabaja cada etapa del proceso con el objetivo de producir cafés excepcionales,
            respetando el entorno natural y preservando el conocimiento transmitido durante generaciones.
          </p>
        </div>
      </div>

      {/* CAFÉ */}
      <div className="bg-[#f7f3ea] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Nuestro café</h2>
          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Origen</h3>
              <p>La Plata, Huila, Colombia</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Altitud</h3>
              <p>1.900 m.s.n.m.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Variedades</h3>
              <p>Castillo, Caturra y Geisha</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Proceso</h3>
              <p>Lavado con fermentación prolongada</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Recolección</h3>
              <p>Manual y selectiva</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Calidad en taza</h3>
              <p>Hasta 92 puntos SCA</p>
            </div>

          </div>
        </div>
      </div>

      {/* FILOSOFÍA */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Filosofía</h2>
          <p className="text-lg leading-relaxed mb-6">
            Creemos que un gran café nace en el origen.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Por eso mantenemos un control cuidadoso de cada etapa: desde la selección manual de las cerezas maduras
            hasta el secado y almacenamiento del grano.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestro objetivo es ofrecer cafés con identidad propia, capaces de transmitir la riqueza del territorio
            y la dedicación de las personas que los producen.
          </p>
        </div>
      </div>

      {/* ENFOQUE */}
      <div className="bg-[#2d2a26] text-white py-20 px-6 text-center">
        <Utensils className="mx-auto mb-4" size={40} />
        <h2 className="text-3xl font-bold mb-4">Dirigido a alta gastronomía</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Finca Alto Horizonte nace con la vocación de conectar directamente con tostadores,
          restaurantes y profesionales que buscan cafés de origen auténtico, trazable y de calidad excepcional.
          Cada lote representa el trabajo de una familia, una región y una tradición cafetera reconocida internacionalmente.
        </p>
      </div>

    </div>
  );
}
