"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rick And Morty Website",
    description:
      "Una aplicación web que utiliza React y Redux para explorar información detallada sobre los personajes de la serie Rick and Morty, con capacidad de filtrados.",
    image: "/Images/rickandmorty.png",
    tag: ["Todos", "Individual"],
    gitUrl: "https://github.com/diegofmoreno4/Rick-y-Morty",
    previewUrl:
      "https://www.linkedin.com/posts/diego-felipe-montealegre-126a30189_react-redux-activity-7063869489255198723-QqOP?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "Dogs App",
    description:
      "Una aplicación completa que utiliza React, Redux, PostgreSQL y Node.js para mostrar información sobre razas de perros, con características como paginación, filtros y búsqueda inteligente.",
    image: "/Images/dogspi.png",
    tag: ["Todos", "Individual"],
    gitUrl: "https://github.com/diegofmoreno4/dog-api",
    previewUrl:
      "https://www.linkedin.com/posts/diego-felipe-montealegre-126a30189_react-redux-sequelize-activity-7089959753556074496-wWcN?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "MarketZone",
    description:
      "Un sitio web que permite a diferentes personas crear tiendas en línea y vender productos, fomentando la interacción entre vendedores y compradores.",
    image: "/Images/marketzone.png",
    tag: ["Todos", "Grupal"],
    gitUrl: "https://github.com/PF-MarketZone/Market-Zone",
    previewUrl: "https://marketzone.vercel.app/home",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="proyectos">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Individual"
          isSelected={tag === "Individual"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Grupal"
          isSelected={tag === "Grupal"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
