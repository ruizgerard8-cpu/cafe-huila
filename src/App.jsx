import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Coffee, MapPin, Leaf, ShoppingCart } from "lucide-react";

export default function FincaCafeColombia() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-gray-800">
      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Finca Cafetera de Colombia
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Café de origen, cultivado con pasión en las montañas colombianas
          </p>
          <Button className="text-lg px-6 py-3">
            Conoce nuestro café
          </Button>
        </motion.div>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Leaf className="mx-auto mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Cultivo sostenible</h2>
            <p>
              Nuestro café se cultiva respetando la tierra y la biodiversidad de
              Colombia.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Coffee className="mx-auto mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Café de especialidad</h2>
            <p>
              Granos seleccionados a mano para ofrecer un sabor único y auténtico.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="mx-auto mb-4" size={40} />
            <h2 className="text-xl font-semibold mb-2">Origen colombiano</h2>
            <p>
              Cultivado en nuestra finca familiar en las montañas de Colombia.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* PRODUCTO */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestro Café</h2>
          <p className="mb-8">
            Café 100% arábica, tostado artesanalmente para preservar sus aromas
            naturales.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Café en grano</h3>
                <p className="mb-4">Ideal para moler en casa y disfrutar fresco.</p>
                <Button>
                  <ShoppingCart className="mr-2" size={18} /> Comprar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Café molido</h3>
                <p className="mb-4">Perfecto para preparación rápida y aromática.</p>
                <Button>
                  <ShoppingCart className="mr-2" size={18} /> Comprar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="bg-[#2d2a26] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="mb-6">
          Escríbenos para pedidos, visitas a la finca o colaboración.
        </p>
        <Button className="text-black bg-white hover:bg-gray-200">
          Contactar ahora
        </Button>
      </div>
    </div>
  );
}
