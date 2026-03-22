import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import videoBg from "../assets/video.mp4"; // 👈 IMPORTANTE

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center pt-24 px-6 overflow-hidden">
      
      {/* 🎥 VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✨ CONTENIDO */}
      <div className="relative z-10">

        {show && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-5xl md:text-6xl font-bold mb-6"
            >
              Biblioteca Digital Académica
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-white/90 max-w-2xl text-lg leading-relaxed mx-auto"
            >
              Accede a una colección de recursos educativos, libros gratuitos y proyectos académicos diseñados para apoyar tu aprendizaje y desarrollo profesional.
            </motion.p>

            <motion.a
              href="#proyectos"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="inline-block mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-110 transition"
            >
              Explorar contenido
            </motion.a>
          </>
        )}

      </div>

    </section>
  );
}