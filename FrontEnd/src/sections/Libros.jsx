import Card from "../components/Card";
import { motion } from "framer-motion";
import { container, item } from "../animations/animations";

export default function Libros() {

  const libros = [
    {
      titulo: "Hábitos de estudio",
      descripcion: "Aprende a organizar tu tiempo",
      imagen: "https://picsum.photos/300/200",
      tipo: "gratis"
    },
    {
      titulo: "Matemáticas básicas",
      descripcion: "Refuerza tus conocimientos",
      imagen: "https://picsum.photos/301/200",
      tipo: "gratis"
    },
    {
      titulo: "Programación web",
      descripcion: "Aprende desarrollo moderno",
      imagen: "https://picsum.photos/302/200",
      tipo: "gratis"
    }
  ];

  return (
    <section id="libros" className="p-16 bg-gray-100">
      
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Libros gratuitos
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {libros.map((itemData, i) => (
          <motion.div key={i} variants={item}>
            <Card {...itemData} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}