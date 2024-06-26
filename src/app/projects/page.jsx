"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import ProjectCard from "@/components/ProjectCard/ProjectCard";


export default function Projects() {
  const [darkMode, setDarkMode] = useState(false); // Estado do modo escuro

  // Função para alternar entre os modos light e dark
  const toggleDarkMode = () => {};

  // Opções de menu
  const menuOptions = [
    { path: "/HomePage", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <div className={`relative`}>

      {/* Botão switch */}
      <div className="absolute top-5 right-12">
        {/* Utilize o ThemeSwitcher aqui, passando o darkClassName de acordo com o tema atual */}
        <ThemeSwitcher darkClassName="dark" />
      </div>

      {/* Renderize o componente Navbar com as opções de menu */}
      <div className="text-center" style={{ marginTop: "0.5cm" }}>
      <Navbar options={menuOptions} darkMode={darkMode} />

      </div>

      {/* Conteúdo principal */}
      <div style={{ marginLeft: "2.5cm", marginTop: "2cm", marginBottom: "2cm" }}>
        {/* Título */}
        <h1 className="font-bold text-3xl mb-4">
          Here are some of my accomplishments thus far, <br />
          which I believe have made positive contributions throughout my journey.
          <br />
        </h1>

        {/* Texto */}
        <p className="text-sm mb-4">
        Discover the projects I have been involved in throughout my professional journey.<br />
        From optimizing supply chain processes to driving business decisions through data analysis,<br />
         each project reflects my dedication to delivering high-quality results and driving meaningful impact.<br />
        </p>
      </div>

      {/* Divisão da tela em 3 partes */}
      <div className="flex" style={{justifyContent: "center"}}>
        {/* coluna da esquerda */}
        <div style={{ marginLeft: "0cm" }}>
          {/* Project 1 */}
          <ProjectCard
            name={"Business Intelligence Implementation"}
            logo={"/p2.png"}
            content={
              "Utilized data science techniques to analyze business data and drive strategic decisions. Implemented business intelligence solutions to enhance data-driven decision-making processes."
            }
            link="/p1"
            darkMode={darkMode} // Passa o estado de darkMode para ProjectCard
          />

          {/* Espaço entre os Projetos */}
          <div style={{ marginBottom: "0.5cm" }}></div>

          {/* Project 2 */}
          <ProjectCard
            name={"Ensign College"}
            logo={"/ensign.png"}
            content={
              "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense."
            }
            link={"https://www.ensign.edu/"}
          />
        </div>

        {/* coluna do meio */}
        <div style={{ marginLeft: "0.5cm" }}>
          {/* Project 3 */}
          <ProjectCard
            name={"Supply Chain Optimization"}
            logo={"/sc.png"}
            content={
              "Led initiatives to optimize supply chain processes and enhance efficiency. Implemented ERP systems for inventory management and logistics, resulting in cost savings and improved inventory control."
            }
            link="/p2"
          />


          {/* Espaço entre os Projetos */}
          <div style={{ marginBottom: "0.5cm" }}></div>

          {/* Project 4 */}
          <ProjectCard
            name={"Ensign College"}
            logo={"/ensign.png"}
            content={
              "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense."
            }
            link={"https://www.ensign.edu/"}
          />
        </div>

        {/* coluna da direita */}
        <div style={{ marginBottom: "2cm", marginLeft: "0.5cm" }}>
          {/* Project 5 */}
          <ProjectCard
            name={"Volunteer Missionary Work"}
            logo={"/lds.png"}
            content={
              "Served as a missionary, engaging with diverse communities and providing support through motivational training and strategic life planning."
            }
            link="/p3"
          />

          {/* Espaço entre os Projetos */}
          <div style={{ marginBottom: "0.5cm" }}></div>

          {/* Project 6 */}
          <ProjectCard
            name={"Ensign College"}
            logo={"/ensign.png"}
            content={
              "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense."
            }
            link={"https://www.ensign.edu/"}
          />
        </div>
      </div>

      {/* Linha horizontal */}
      <hr className="w-full border-gray-300" style={{ marginBottom: "4cm" }} />

      {/* Links no rodapé */}
      <p
        className="text-left absolute bottom-0 left-0"
        style={{ marginLeft: "2.5cm", marginBottom: "-1.0cm", fontSize: "1.0rem" }}
      >
        <a href="/HomePage" className="mx-4">
          Home
        </a>
        <a href="/about" className="mx-4">
          About
        </a>
        <a href="/projects" className="mx-4">
          Projects
        </a>
        <a href="/uses" className="mx-4">
          Uses
        </a>
      </p>

      {/* Texto no rodapé */}
      <p
        className="text-right  text-xs absolute bottom-0 right-0"
        style={{ marginRight: "1.5cm", marginBottom: "-1.0cm" }}
      >
        © 2024 Luiz Machado. All rights reserved.
      </p>
    </div>
  );
}
