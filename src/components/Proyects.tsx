

export function Proyects() {
  const projects = [
    {
      name: "Aplcación de eventos",
      description: "Permite buscar y crear eventos cerca de tu ubicación y mostrar su ubicación (Golang, PostgreSQL, React)",
      link: "https://example.com/project1",
    },
    {
      name: "Aplicación de Tareas",
      description: "una aplicacion para gestionar tareas con login de usuario ( PostgreSQL, Express, React)",
      link: "https://example.com/project2",
    },
    {
      name: "Ecommerce",
      description: "Un ecommerce de productos de tecnología (React, Tailwind CSS, PostgreSQL y Express)",
      link: "https://example.com/project3",
    },
    {
      name: "Pokememory",
      description: "Una app que permite jugar al memory con pokemones (React, Tailwind CSS)",
      link: "https://example.com/project4",
    },
    {
      name: "Calculadora",
      description: "Una calculadora sencilla (React, Tailwind CSS)",
      link: "https://example.com/project5",
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