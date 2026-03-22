import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ isOpen, onClose, data }) {
  const navigate = useNavigate();

  // 🔒 Bloquear scroll del fondo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ⌨️ Cerrar con ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose} // 👈 cerrar al dar click fuera
    >
      
      {/* CONTENEDOR */}
      <div
        onClick={(e) => e.stopPropagation()} // 👈 evita cerrar si clic dentro
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fadeIn relative"
      >
        
        {/* BOTÓN CERRAR */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✖
        </button>

        {/* IMAGEN */}
        {data.imagen ? (
          <img 
            src={data.imagen} 
            className="w-full h-56 object-cover"
          />
        ) : (
          <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
            Sin imagen
          </div>
        )}

        {/* CONTENIDO */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {data.titulo}
          </h2>

          <p className="text-gray-600 mb-6">
            {data.descripcion}
          </p>

          {/* BOTONES */}
          <div className="flex gap-4">
            
            <button 
              onClick={() => navigate(`/proyecto/${data.titulo}`)}
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Ver detalle
            </button>

            <button 
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Cerrar
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}