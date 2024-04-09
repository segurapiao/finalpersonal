'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import ArticleSnippet from "@/components/ArticleCard/ArticleCard";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import Image from 'next/image';

export default function HomePage() {
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

  const skills = [
    { name: "HTML", proficiency: 60, icon: "html5.png" },
    { name: "CSS", proficiency: 50, icon: "css3.png" },
    { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
  ];

  return (
    <div className="relative">

      {/* Botão ThemeSwitcher */}
      <div className="absolute top-5 right-12">
        <ThemeSwitcher darkClassName="dark" />
      </div>

      {/* Navbar/opções de menu */}
      <div className="text-center" style={{ marginTop: "0.5cm" }}>
        <Navbar options={menuOptions} />
      </div>

      {/* Conteúdo principal */}
      <div style={{ justifyContent: "center", marginLeft: "4cm", marginTop: "2cm" }}>

        {/* PHOTO */}
        <div className="w-10 h-10 bg-black rounded-full mb-4">
        <Image src="/photo.jpg" width={40} height={40} className="rounded-full" alt="User Photo" style={{ filter: darkMode ? '' : 'none' }}/>
        </div>


        {/* Título */}
        <h1 className="font-bold text-4xl mb-4" style={{ marginTop: "1cm" }}>Software engineer, father, and believer</h1>

        {/* Texto */}
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor <br />
        </p>

        {/* Logos */}

          <div className="flex">
            <a href="https://linkdin.com">
              <Image src="/in.png" alt="LinkedIn" width={25} height={25} className="mr-2" />
            </a>

            <a href="https://twiter.com">
              <Image src="/x.png" alt="Twitter" width={25} height={25} className="mr-2" />
            </a>

            <a href="https://github.com/segurapiao" >
                <Image src="/git.png" alt="GitHub" width={25} height={25} className="mr-2"/>
            </a>

          </div>

      </div>

      {/* Divisão da tela em duas metades */}
      <div className="flex" style={{justifyContent: "center"}}>
        <div style={{ marginLeft: "0cm", marginTop: "1cm" }}>
          {/* Article 1 */}
          <ArticleCard
            date="December 25, 2023"
            title="Lorem ipsum dolor sit ametzzzlalaia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
            link="/article1"
            darkMode={darkMode}
          />

          {/* Espaço entre os artigos */}
          <div style={{ marginBottom: "1cm" }}></div>

          {/* Article 2 */}
          <ArticleSnippet
            date="December 25, 2023"
            title="Lorem ipsum dolor sit ametzzzlalaia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
            link="/article2"
          />

          {/* Espaço entre os artigos */}
          <div style={{ marginBottom: "1cm" }}></div>

          {/* Article 3 */}
          <ArticleSnippet
            date="December 25, 2023"
            title="Lorem ipsum dolor sit ametzzzlalaia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
            link="/article3"
          />
        </div>

        {/* Retângulos na coluna da direita */}
        <div style={{ marginLeft: "3cm", marginTop: "0.5cm", marginRight: "3cm" }}>
          <div className="rounded-lg p-4 mb-1">
            <SignupWidget
              title={"Stay up to date"}
              content={"Get notified when I publish something new, and unsubscribe at any time."}
              darkMode={darkMode}
            />
          </div>

          <div className="rounded-lg p-4 mb-1">
            <WorkWidget
              title="Work"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
              experiences={[
                {
                  logo: "/microsoft.png",
                  organization: "Microsoft",
                  jobTitle: "Job Title 1",
                  startYear: 2018,
                  endYear: 2020,
                },
                {
                  logo: "/slack.png",
                  organization: "Apple",
                  jobTitle: "Job Title 2",
                  startYear: 2020,
                  endYear: null,
                },
              ]}
            />
          </div>
          <div className="rounded-lg p-4 mb-4">
            <SkillsWidget
              title={"Skills"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              skills={skills}
            />
          </div>
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
        className="text-right text-xs absolute bottom-0 right-0"
        style={{ marginRight: "1.5cm", marginBottom: "-1.0cm" }}
      >
        © 2024 John Doe. All rights reserved.
      </p>
    </div>
  );
}
