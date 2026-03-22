import { useParams } from "react-router-dom";

export default function ProyectoDetalle() {
  const { id } = useParams();

  return (
    <div className="p-20">
      
      <h1 className="text-4xl font-bold mb-4">
        Proyecto {id}
      </h1>

      <p className="text-gray-600 mb-6">
        Aquí irá toda la información completa del proyecto.
      </p>

      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
        Comprar con PayPal
      </button>

    </div>
  );
}