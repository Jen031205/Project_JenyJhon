import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Detalle({ data, onClose }) {

  useEffect(() => {
    if (!data) return; // 👈 control interno

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [data, onClose]);

  // 👇 ahora sí puedes retornar
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden grid md:grid-cols-2"
      >

        {/* IMAGEN */}
        <div className="h-64 md:h-full">
          <img
            src={data.imagen}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENIDO */}
        <div className="p-8 flex flex-col justify-between">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {data.titulo}
            </h2>

            <p className="text-gray-600 mb-6">
              {data.descripcion}
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Proyecto listo para implementar</li>
              <li>✔ Código estructurado y limpio</li>
              <li>✔ Fácil de personalizar</li>
              <li>✔ Ideal para estudiantes</li>
            </ul>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl font-bold text-indigo-600">
              ${data.precio} MXN
            </span>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Comprar ahora
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow hover:bg-white"
        >
          ✖
        </button>

      </motion.div>
    </div>
  );
}