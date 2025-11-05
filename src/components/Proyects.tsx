

export function Proyects() {
  const projects = [

    {
      name: "Ecommerce",
      description: "Un ecommerce de productos de tecnología (React, Tailwind CSS, PostgreSQL y Express)",
      link: "https://github.com/jerodup/E-commerce",
    },
    {
      name: "Aplcación de eventos",
      description: "Permite buscar y crear eventos cerca de tu ubicación y mostrar su ubicación (Golang, PostgreSQL, React)",
      link: "https://github.com/jerodup/eventapp",
    },
    {
      name: "Login",
      description: "Un login completo con validaciones y recuperacion de contraseña (React, Tailwind CSS, Express, PostgreSQL)",
      link: "https://github.com/jerodup/login",
    },
    {
      name: "Aplicación de Tareas",
      description: "una aplicacion para gestionar tareas con login (simple) de usuario ( PostgreSQL, Express, React)",
      link: "https://github.com/jerodup/eventapp",
    },
    {
      name: "Pokememory",
      description: "Una app que permite jugar al memory con pokemones (React, Tailwind CSS)",
      link: "https://pokememory-44141b.netlify.app/",
    },
    
  ]

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-4 p-3 border "
        >
          <h2 className="text-lg font-bold">{project.name}</h2>
          <p className="text-sm text-gray-700">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            Ver más
          </a>
        </div>
      ))}
    </>
  )
}