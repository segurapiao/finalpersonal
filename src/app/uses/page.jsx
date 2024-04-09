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
    { path: "/about2", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];
  const items = [
    {
      groupName: 'Workstation',
      items: [
        {
          title: '16” MacBook Pro, M1 Max, 64GB RAM (2022)',
          description:
            'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.',
        },
        {
          title: 'Dell UltraSharp U2717D',
          description:
            'I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.',
        },
        {
          title: 'Keychron K2',
          description:
            'I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.',
        },
        {
          title: 'Logitech MX Master 3',
          description:
            'I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.',
        },
        {
          title: 'Audio-Technica ATH-M50x',
          description:
            'I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.',
        },
        {
          title: 'Rain Design mStand',
          description:
            'I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.',
        },
      ],
    },
    {
      groupName: 'Development',
      items: [
        {
          title: 'Visual Studio Code',
          description:
            'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
        },
        {
          title: 'iTerm2 + Oh My Zsh',
          description:
            'I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.',
        },
      ],
    },
    {
      groupName: 'Design',
      items: [
        {
          title: 'Figma',
          description:
            'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
        },
        {
          title: 'Whimsical',
          description:
            'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
        },
      ],
    },
    {
      groupName: 'Productivity',
      items: [
        {
          title: 'Notion',
          description:
            'I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.',
        },
        {
          title: 'Alfred',
          description:
            'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
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
          Software I use, gadgets I love,
          <br />
          and other things I recommend.
        </h1>

        {/* Texto */}
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor <br />
        </p>
      </div>

     <div style={{ marginLeft: "4cm", marginTop: "1cm", marginBottom: "4cm" }}>
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
        © 2024 John Doe. All rights reserved.
      </p>
    </div>
  );
}
