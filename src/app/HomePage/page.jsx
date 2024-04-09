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
        <div className="flex rounded-full ">
        <Image src="/face12.jpg" width={50} height={40} className="rounded-full" alt="User Photo" style={{ filter: darkMode ? '' : 'none' }}/>

        {/* Título */}
        <h1 className="font-bold text-4xl mb-4" style={{ marginLeft: "0.5cm", marginTop: "0.5cm" }} >Welcome to Luiz Machado's Digital Hub</h1>
        </div><br/>
        {/* Texto */}
        <p className="text-sm mb-4">
        Welcome to my Digital Hub! I'm Luiz Machado, a dedicated professional with a background in<br />
        business intelligence and a passion for leveraging data to drive impactful decisions.<br />
        Explore my projects and learn more about me below. <br />
       </p>

        {/* Logos */}

          <div className="flex">
            <a href="https://www.linkedin.com/in/luiz-machado-jr">
              <Image src="/in (2).png" alt="LinkedIn" width={25} height={25} className="mr-2" />
            </a>

            <a href="https://www.instagram.com/luiz_juniorx/">
              <Image src="/insta.png" alt="Twitter" width={25} height={25} className="mr-2" />
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
            date="2022-2024"
            title="Nurturing Data Intelligence at Ensign College"
            content="Developed a diverse skill set in data analysis and business intelligence techniques during my tenure at Ensign College, focusing on leveraging technology and strategic insights to drive organizational success."
            link="/article1"
            darkMode={darkMode}
          />

          {/* Espaço entre os artigos */}
          <div style={{ marginBottom: "1cm" }}></div>

          {/* Article 2 */}
          <ArticleSnippet
            date="2009-2019"
            title="Supply Chain Efficiency Enhancement"
            content="Implemented process improvements to enhance supply chain efficiency, resulting in significant cost savings."
            link="/article2"
          />

          {/* Espaço entre os artigos */}
          <div style={{ marginBottom: "1cm" }}></div>

          {/* Article 3 */}
          <ArticleSnippet
            date="2009-2019"
            title="Inventory Optimization Project"
            content="Led an initiative to optimize inventory management systems, resulting in a 20% reduction in excess inventory."
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
              title="Explore my professional journey"
              content="Delve into my diverse expertise and hands-on experience across industries."
              experiences={[
                {
                  logo: "/ensign.png",
                  organization: "Ensign College",
                  jobTitle: "Student",
                  startYear: 2022,
                  endYear: 2024,
                },
                {
                  logo: "/UVU.png",
                  organization: "UVU",
                  jobTitle: "Student",
                  startYear: 2020,
                  endYear: 2021,
                },
                {
                  logo: "/train.png",
                  organization: "Railway Company",
                  jobTitle: "Supply Chain Specialist",
                  startYear: 2009,
                  endYear: 2019,
                },
                {
                  logo: "/degree2.png",
                  organization: "Postgraduate degree",
                  jobTitle: "Business Management",
                  startYear: 2012,
                  endYear: 2013,
                },
                {
                  logo: "/degree3.png",
                  organization: "Bachelor's Degree in IT",
                  jobTitle: "Student",
                  startYear: 2009,
                  endYear: 2012,
                },
                {
                  logo: "/lds.png",
                  organization: "Volunteer Experience",
                  jobTitle: "Missionary",
                  startYear: 2006,
                  endYear: 2008,
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
