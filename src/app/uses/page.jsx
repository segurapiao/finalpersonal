'use client'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import UsesSection from '@/components/UsesSection/UsesSection';

export default function Uses() {
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
  const items = [
    {
      groupName: 'Workstation',
      items: [
        {
          title: 'HP Envy 2-in-1 14" Full HD Touch-Screen Laptop',
          description:
            'The HP Envy is an excellent option for professionals on the go. With its high-definition touchscreen display, Intel Core i5 processor, and 8GB of memory, it offers performance and versatility to meet productivity needs.',
        },
        {
          title: 'Lenovo ThinkPad X1 Carbon Gen 9',
          description:
            'A reliable and lightweight laptop is essential for a supply chain professional. The Lenovo ThinkPad X1 Carbon Gen 9 offers exceptional performance and portability for working anywhere.',
        },
        {
          title: 'Dell XPS 15',
          description:
            'The Dell XPS 151 is a popular choice among professionals who require performance and portability. With its high-resolution display, powerful processor, and sleek design, it is ideal for intensive data analysis and professional presentations.',
        },

      ],
    },
    {
      groupName: 'Development',
      items: [
        {
          title: 'Python',
          description:
            'Python is a versatile and powerful programming language, widely used in data analysis, statistical modeling, and process automation. Its simple syntax and robust libraries make it ideal for supply chain tasks.',
        },
        {
          title: 'R',
          description:
            'R is a statistical programming language widely used in data analysis and predictive modeling. Its powerful statistical and graphical libraries make it a popular choice among data science professionals.',
        },
      ],
    },
    {
      groupName: 'Data Analysis',
      items: [
        {
          title: 'Tableau',
          description:
            'Tableau is a leading data visualization platform, used to create interactive dashboards and dynamic reports. Its intuitive interface and powerful analytics capabilities make it easy to understand and communicate insights.',
        },
        {
          title: 'Power BI',
          description:
            'Power BI is a Microsoft business intelligence tool used to create custom reports and advanced analytics. Its integration with other Microsoft tools makes it a popular choice for supply chain professionals.',
        },
      ],
    },
    {
      groupName: 'Productivity',
      items: [
        {
          title: 'Jira',
          description:
            'Jira is an agile project management platform, widely used for planning, tracking, and collaboration on software projects. Its flexibility and integration with other tools make it a popular choice for development teams.',
        },
        {
          title: 'Trello',
          description:
            'Trello is a board-based project management tool that allows organizing tasks and collaborating with teams visually and intuitively. Its simplicity and ease of use make it a popular choice for small projects and teams.',
        },
      ],
    },
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
      <div className="p-10" style={{ marginLeft: "4cm", marginTop: "1cm" }}>
        {/* Título */}
        <h1 className="font-bold text-5xl mb-4" style={{ marginTop: "1cm" }}>
          Software I use, gadgets,
          <br />
          and other things I recommend.
        </h1>

        {/* Texto */}
        <p className="text-sm mb-4">
          Welcome to my curated list of software, gadgets, and tools that I use and highly recommend. In this digital age, having the right tools<br />
          can significantly enhance productivity and streamline workflows. From essential software for development to must-have gadgets for your<br />
          workstation, I have compiled a comprehensive list to help you stay organized, efficient, and productive. Whether you are a developer, designer,<br />
          or productivity enthusiast, you are sure to find something valuable in my collection. Explore the carefully selected tools and elevate your<br />
          digital experience today.<br />
        </p>
      </div>

     <div style={{ marginLeft: "4cm", marginTop: "0cm", marginBottom: "2cm" }}>
        <>
          <UsesSection items={items} />
        </>
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
