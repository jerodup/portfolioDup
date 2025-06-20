import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="relative w-full h-auto overflow-hidden border border-black p-4 flex flex-col justify-center gap-4  ">
      <h3 className="text-xl font-bold">Conversemos!</h3>
      <p className="text-gray-950 font-light">
        Si tienes alguna pregunta o quieres hablar sobre un proyecto, no dudes
        en contactarme.
      </p>
      <Link to="/contact" className="bg-black text-center text-white py-2 px-4 hover:bg-white hover:text-black border transition-colors duration-300 cursor-pointer">
        Contactar
      </Link>
    </div>
  );
}
