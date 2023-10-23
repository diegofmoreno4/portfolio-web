"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "educacion",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Full Stack Web Developer. Henry Bootcamp. 800 horas de cursado
          teórico-práctico. 2023.
        </li>
        <li>
          Ingeniería de Sistemas. Universidad del Tolima. 2019 - Actualmente.
        </li>
      </ul>
    ),
  },
  {
    title: "Experiencia",
    id: "experiencia",
    content: (
      <ul className="list-disc pl-2">
        <li>Paid Media And Data Analyst. Nov 2022 - Actualmente.</li>
        <li>Analista de ventas. Dic 2019 - Nov 2022.</li>
        <li>Analista de ventas. Abr 2021 - Jun 2022.</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("habilidades");
  const [isPending, starTransition] = useTransition();

  const handleTabChange = (id) => {
    starTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Images/Image-profile.jpg" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de mí</h2>
          <p className="text-base md:text-lg">
            Desarrollador Front End con experiencia en desarrollo de
            aplicaciones web y una sólida formación en Ingeniería de Sistemas.
            Mi formación académica y mi participación en el bootcamp Henry han
            fortalecido mis habilidades para trabajar en equipo y analizar datos
            de forma masiva. Me especializo en desarrollo Front-End, donde he
            creado interfaces de usuario modernas y atractivas utilizando
            tecnologías como HTML, CSS, JavaScript y librerías como React.
            También cuento con experiencia en desarrollo Back-End, trabajando
            con Node.js y Express. Además, poseo conocimientos en metodologías
            ágiles, GIT, estructura de datos, algoritmos y frameworks CSS.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("habilidades")}
              active={tab === "habilidades"}
            >
              {""}
              Habilidades{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacion")}
              active={tab === "educacion"}
            >
              {""}
              Educación{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiencia")}
              active={tab === "experiencia"}
            >
              {""}
              Experiencia{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
