"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rick And Morty Website",
    description: "Proyecto 1",
    image: "/Images/Image-profile.jpg",
    tag: ["Todos", "Individual"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dogs API",
    description: "Proyecto 2",
    image: "/Images/Image-profile.jpg",
    tag: ["Todos", "Individual"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MarketZone",
    description: "Proyecto 1",
    image: "/Images/Image-profile.jpg",
    tag: ["Todos", "Grupal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Rick And Morty Website",
    description: "Proyecto 1",
    image: "/Images/Image-profile.jpg",
    tag: ["Todos", "Individual"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Rick And Morty Website",
    description: "Proyecto 1",
    image: "/Images/Image-profile.jpg",
    tag: ["Todos", "Individual"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Rick And Morty Website",
    description: "Proyecto 1",
    image: "/Images/Image-profile.jpg",
    tag: ["Todos", "Individual"],
    gitUrl: "/",
    previewUrl: "/",
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
    <section>
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
