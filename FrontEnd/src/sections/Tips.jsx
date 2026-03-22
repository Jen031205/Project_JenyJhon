import TipCard from "../components/TipCard";
import { motion } from "framer-motion";
import { useState } from "react";

const tipsData = [
  // 🔹 Herramientas con categoría
  {
    tipo: "herramienta",
    categoria: "Diseño",
    nombre: "Canva",
    descripcion: "Crea presentaciones, posters y materiales visuales para tus estudios.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Canva_Logo.png",
    link: "https://www.canva.com/",
  },
  {
    tipo: "herramienta",
    categoria: "IA",
    nombre: "ChatGPT",
    descripcion: "IA que te ayuda a generar ideas, resúmenes y resolver dudas académicas.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg",
    link: "https://chat.openai.com/",
  },
  {
    tipo: "herramienta",
    categoria: "Productividad",
    nombre: "Notion",
    descripcion: "Organiza tus notas, tareas y proyectos de estudio en un solo lugar.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    link: "https://www.notion.so/",
  },

  // 🔹 Tip motivacional intercalado
  {
    tipo: "tip",
    mensaje: "Organiza tu tiempo y prioriza tus tareas, ¡el éxito está en la constancia!",
  },

  // 🔹 Más herramientas
  {
    tipo: "herramienta",
    categoria: "Productividad",
    nombre: "Trello",
    descripcion: "Organiza tareas y proyectos con tableros visuales estilo Kanban.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg",
    link: "https://trello.com/",
  },
  {
    tipo: "herramienta",
    categoria: "Educativa",
    nombre: "Khan Academy",
    descripcion: "Cursos y recursos gratuitos para aprender matemáticas, ciencia y más.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Khan_Academy_logo.svg",
    link: "https://www.khanacademy.org/",
  },
  {
    tipo: "herramienta",
    categoria: "IA",
    nombre: "Grammarly",
    descripcion: "Revisa gramática, ortografía y estilo en tus escritos académicos.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/31/Grammarly_logo.svg",
    link: "https://www.grammarly.com/",
  },

  // 🔹 Tip motivacional intercalado
  {
    tipo: "tip",
    mensaje: "Cada día es una nueva oportunidad para aprender algo nuevo.",
  },

  // 🔹 Últimas herramientas
  {
    tipo: "herramienta",
    categoria: "Educativa",
    nombre: "Quizlet",
    descripcion: "Crea tarjetas de estudio y realiza tests para memorizar conceptos.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Quizlet_logo.png",
    link: "https://quizlet.com/",
  },
  {
    tipo: "herramienta",
    categoria: "Productividad",
    nombre: "Miro",
    descripcion: "Tableros colaborativos para organizar ideas y proyectos visuales.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Miro_Logo.png",
    link: "https://miro.com/",
  },
  {
    tipo: "herramienta",
    categoria: "Productividad",
    nombre: "Evernote",
    descripcion: "Toma notas, organiza ideas y guarda información importante.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/42/Evernote_logo.svg",
    link: "https://evernote.com/",
  },

  // 🔹 Tip motivacional final
  {
    tipo: "tip",
    mensaje: "No te compares con otros, compite contigo mismo y mejora cada día.",
  },
];

export default function Tips() {
  const [filtro, setFiltro] = useState("todo"); // todo, tip, o categoría específica

  // Extraer categorías únicas de herramientas
  const categorias = [
    "todo",
    ...Array.from(new Set(tipsData.filter(i => i.tipo === "herramienta").map(i => i.categoria))),
    "tip",
  ];

  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
  const cardVariants = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  // Filtrar según botón seleccionado
  const elementosFiltrados = tipsData.filter((item) => {
    if (filtro === "todo") return true;
    if (filtro === "tip" && item.tipo === "tip") return true;
    if (item.tipo === "herramienta" && item.categoria === filtro) return true;
    return false;
  });

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="tips">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Herramientas y Tips de Estudio</h2>

        {/* Botones de filtro */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filtro === cat
                  ? "bg-yellow-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat === "todo" ? "Mostrar todo" : cat === "tip" ? "Tips" : cat}
            </button>
          ))}
        </div>

        {/* Grid de tips y herramientas */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {elementosFiltrados.map((item, index) =>
            item.tipo === "herramienta" ? (
              <motion.div key={index} variants={cardVariants}>
                <TipCard nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} link={item.link} />
              </motion.div>
            ) : (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`
                  relative
                  rounded-2xl
                  p-6 sm:p-8
                  ${index % 2 === 0 ? "bg-gradient-to-r from-green-100 to-green-200" : "bg-gradient-to-r from-blue-100 to-blue-200"}
                  shadow-lg
                  flex items-center justify-start
                  gap-4
                  text-left
                  cursor-default
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-2xl
                `}
              >
                <span className="text-2xl">💡</span>
                <p className="text-gray-900 dark:text-gray-900 font-semibold text-lg sm:text-xl">{item.mensaje}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}