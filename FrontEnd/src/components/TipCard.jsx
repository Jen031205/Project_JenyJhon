import { motion } from "framer-motion";

export default function TipCard({ nombre, descripcion, imagen, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        relative
        bg-white dark:bg-gray-800
        shadow-lg
        rounded-xl
        p-6
        flex flex-col items-center text-center
        cursor-pointer
        overflow-hidden
        transition-transform duration-300
      "
    >
      {/* Gradient glow animado */}
      <span className="
        absolute -inset-0.5
        rounded-xl
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        animate-gradient
        blur-xl
        opacity-80
        z-0
      "></span>

      {/* Contenido de la card */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={imagen}
          alt={nombre}
          className="w-24 h-24 mb-4 object-contain"
        />
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          {nombre}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{descripcion}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-yellow-500 hover:bg-yellow-400
            text-gray-900 font-semibold
            px-4 py-2 rounded-md
            transition-colors duration-300
          "
        >
          Visitar
        </a>
      </div>
    </motion.div>
  );
}