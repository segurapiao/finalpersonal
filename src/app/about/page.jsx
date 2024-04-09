'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Image from 'next/image';

export default function HomePage() {
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

  return (
    <div className="relative">

      {/* Botão switch */}
      <div className="absolute top-5 right-12">
        {/* Utilize o ThemeSwitcher aqui, passando o darkClassName de acordo com o tema atual */}
        <ThemeSwitcher darkClassName="dark" />
      </div>

      {/* Renderize o componente Navbar com as opções de menu */}
      <div className="text-center" style={{ marginTop: "0.5cm" }}>
        <Navbar options={menuOptions} />
      </div>

    {/* Divisão da tela em duas metades */}
      <div className="flex" style={{ justifyContent: "center", marginTop: "2cm", marginBottom: "2cm" }}>

        {/* Lado esquerdo */}
        <div style={{ marginLeft: "4m" }}>

          <h1 className="font-bold text-4xl mb-4" style={{ marginTop: "1cm" }}>
            I am Jane. I live in <br/>New York City, where <br/>I develop the future.
          </h1>

          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et <br/>
            massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit <br/>
            Ut et massa mi Lorem ipsum dolor sit amet consectetur <br/>
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet <br />
            consectetur adipiscing elit Ut et massa mi..<br/>
          </p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et <br/>
            massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit <br/>
            Ut et massa mi Lorem ipsum dolor sit amet consectetur <br/>
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet <br />
            consectetur adipiscing elit Ut et massa mi..<br/>
          </p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et <br/>
            massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit <br/>
            Ut et massa mi Lorem ipsum dolor sit amet consectetur <br/>
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet <br />
            consectetur adipiscing elit Ut et massa mi..<br/>
          </p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et <br/>
            massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit <br/>
            Ut et massa mi Lorem ipsum dolor sit amet consectetur <br/>
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet <br />
            consectetur adipiscing elit Ut et massa mi..<br/>
          </p>
        </div>

        {/* Lado direito */}
        <div style={{ marginLeft: "2cm", marginTop: "1cm"}}>
          {/* PHOTO */}
          <div className="flex">
            <Image src="/woman.png" width={400} height={400} alt="User Photo" style={{ filter: darkMode ? '' : 'none' }}/>
          </div>

          {/* Logos */}
         <div className="flex">

            <div style={{ marginLeft: "0cm", marginTop: "0cm"}}><br />
            <a href="https://linkdin.com" className="flex items-center">
              <Image src="/in.png" alt="LinkedIn" width={32} height={32} className="mr-4" />
              Follow me on LinkedIn
              </a><br />

              <a href="https://twiter.com" className="flex items-center">
              <Image src="/x.png" alt="Twitter" width={32} height={32} className="mr-4" />
              Follow me on X
              </a><br />

              <a href="https://github.com/segurapiao" className="flex items-center">
                <Image src="/git.png" alt="GitHub" width={32} height={32} className="mr-4"/>
                Follow me on GitHub
              </a><br/>

              <a href="mailto:jane@email.com" className="flex items-center text-blue-500">
                  <Image src="/mail.png" alt="e-mail" width={32} height={32} className="mr-4" />
                  jane@email.com
              </a>

            </div>

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
