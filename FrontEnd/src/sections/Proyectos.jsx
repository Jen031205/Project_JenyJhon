import { useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { container, item } from "../animations/animations";
import Detalle from "../pages/Detalle";

export default function Proyectos() {
  const [selected, setSelected] = useState(null);

  const proyectos = [
    {
      titulo: "Sistema de Inventario",
      descripcion: "Proyecto completo listo para implementar",
      imagen: "https://picsum.photos/300/200",
      tipo: "premium",
      precio: 99
    },
    {
      titulo: "App Escolar",
      descripcion: "Gestión de alumnos y profesores",
      imagen: "https://picsum.photos/301/200",
      tipo: "premium",
      precio: 79
    }
  ];

  return (
    <section id="proyectos" className="p-16">
      
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Proyectos premium
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {proyectos.map((itemData, i) => (
          <motion.div key={i} variants={item}>
            <Card 
              {...itemData}
              onClick={() => setSelected(itemData)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* DETALLE PRO */}
      <Detalle 
        data={selected}
        onClose={() => setSelected(null)}
      />

    </section>
  );
}