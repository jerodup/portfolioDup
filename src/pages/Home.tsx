import { Navbar } from "../components/NavBar.tsx";
import { SkillsList } from "../components/SkillsList.tsx";
import HeadScene from "../components/HeadModel.tsx";
import { Proyects } from "../components/Proyects.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Contact } from "../components/Contact.tsx";


export default function Home() {
  return (
    <div>
          <Navbar />
          <div className="container mx-auto flex flex-col lg:flex-row gap-4 my-4 px-4" >
            {/* Columna Izquierda */}
            <div className="flex flex-col w-full lg:w-2/6 lg:h-[calc(100vh-97px)] sm:h-fit border gap-4 border-black p-4">
              <div className="flex flex-col w-full h-[300px] lg:h-3/4 bg-black">
                <HeadScene />
              </div>
              <div className="font-[Oswald] flex flex-col justify-center items-start">
                <div className="flex gap-4 items-center flex-wrap">
                  <h1 className="text-2xl font-bold">Hola, soy Jerónimo Dupleich</h1>
                  <div className="flex gap-2 mt-2">
                    <a href="https://github.com/jerodup">
                      <FaGithub className="text-2xl text-black hover:text-gray-900 transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/jeronimo-dupleich/">
                      <FaLinkedin className="text-2xl text-black hover:text-gray-900 transition-colors duration-300" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-gray-950 font-light">
                  Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web.
                </p>
              </div>
            </div>
    
            {/* Columna Proyectos */}
            <div className="w-full lg:w-3/6 h-auto font-[Oswald]">
              <h2 className="text-xl font-bold mb-4">Proyectos</h2>
              <div className="w-full max-h-[calc(100vh-145px)] overflow-y-auto scroll-hide">
                <Proyects />
              </div>
            </div>
    
            {/* Columna Derecha */}
            <div className="flex flex-col w-full lg:w-1/6 font-[Oswald] gap-4">
              <SkillsList />
              <Contact />
            </div>
          </div>
        </div>
  )
}