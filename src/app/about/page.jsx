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
    { path: "/about", label: "About" },
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
        <div>

          <h1 className="font-bold text-4xl mb-4" style={{ marginTop: "1cm" }}>
            I am Luiz and Life is <br/>a gift given by God :) <br/>
          </h1>

          <p className="text-sm mb-4">
          Hello! I'm Luiz Machado, a multifaceted professional with a love for data,<br/>
          adventure, and community. Beyond my professional endeavors, I'm passionate<br/>
          about Brazilian ballroom dancing, longboarding, soaking up the sun at the<br/>
          beach, and exploring nature through hikes and camping trips.<br/>
          </p>


          <h1 className="font-bold mb-4" style={{ marginTop: "1cm" }}>
          Professional Background<br/>
          </h1>

          <p className="text-sm mb-4">
          With a solid educational foundation in Business Intelligence and<br/>
          Information Technology, combined with hands-on experience in supply<br/>
          chain management, I bring a unique blend of skills to the table.<br/>
          My proactive approach, coupled with critical thinking and a<br/>
          team-oriented mindset, enables me to drive impactful results in<br/>
          any project I undertake.
          </p>

          <h1 className="font-bold mb-4" style={{ marginTop: "1cm" }}>
          Hobbies<br/>
          </h1>

          <p className="text-sm mb-4">
            When I'm not immersed in the world of data and business, you<br/>
            can find me gliding across dance floors, cruising on my longboard,<br/>
            or soaking up the beauty of nature on a camping trip. I believe in<br/>
            living life to the fullest and embracing every opportunity for<br/>
            adventure and growth.
          </p>

        </div>

        {/* Lado direito */}
        <div style={{ marginLeft: "2cm", marginTop: "1cm"}}>
          {/* PHOTO */}
          <div className="flex">
            <Image src="/pic2.JPG" width={400} height={400} alt="User Photo" style={{ filter: darkMode ? '' : 'none' }}/>
          </div>

          {/* Logos */}
         <div className="flex">

            <div style={{ marginLeft: "0cm", marginTop: "0cm"}}><br />
            <a href="https://www.linkedin.com/in/luiz-machado-jr" className="flex items-center">
              <Image src="/in (2).png" alt="LinkedIn" width={32} height={32} className="mr-4" />
              Follow me on LinkedIn
              </a><br />

              <a href="https://www.instagram.com/luiz_juniorx/" className="flex items-center">
              <Image src="/insta.png" alt="Twitter" width={32} height={32} className="mr-4" />
              Follow me on Instagram
              </a><br />

              <a href="https://github.com/segurapiao" className="flex items-center">
                <Image src="/git.png" alt="GitHub" width={32} height={32} className="mr-4"/>
                Follow me on GitHub
              </a><br/>

              <a href="mailto:jrufrj@yahoo.com.br" className="flex items-center text-blue-500">
                  <Image src="/mail.png" alt="e-mail" width={32} height={32} className="mr-4" />
                  jrufrj@yahoo.com.br
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
        © 2024 Luiz Machado. All rights reserved.
      </p>
    </div>
  );
}
