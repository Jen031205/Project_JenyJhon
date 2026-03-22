import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Libros from "./sections/Libros";
import Proyectos from "./sections/Proyectos";
import Tips from "./sections/Tips";
import Footer from "./sections/Footer";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function Home() {
  return (
    <>
      <Hero />
      <Libros />
      <Proyectos />
      <Tips />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<ProyectoDetalle />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;