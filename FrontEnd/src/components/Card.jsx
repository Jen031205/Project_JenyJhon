import { motion } from "framer-motion";

export default function Card({ titulo, descripcion, imagen, onClick, precio, tipo = "gratis" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition"
    >
      
      {/* IMAGEN */}
      {imagen ? (
        <img
          src={imagen}
          loading="lazy"
          className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
        />
      ) : (
        <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
          Sin imagen
        </div>
      )}

      {/* BADGE */}
      <div className="absolute top-3 left-3 z-10">
        {tipo === "premium" ? (
          <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
            💰 Premium
          </span>
        ) : (
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
            Gratis
          </span>
        )}
      </div>

      {/* PRECIO */}
      {tipo === "premium" && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-black/70 text-white text-sm px-3 py-1 rounded-lg backdrop-blur-md">
            ${precio} MXN
          </span>
        </div>
      )}

      {/* OVERLAY PRO */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* CONTENIDO */}
      <div className="absolute bottom-0 p-5 text-white translate-y-10 group-hover:translate-y-0 transition duration-300 w-full">
        
        <h2 className="font-bold text-lg mb-2">
          {titulo}
        </h2>

        <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-300">
          {descripcion}
        </p>

        {/* BOTÓN */}
        <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
          {tipo === "premium" ? "Comprar ahora 💰" : "Ver libro 📚"}
        </button>

      </div>

    </motion.div>
  );
}