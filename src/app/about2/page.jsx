"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ArticleSnippet from "@/components/ArticleCard/ArticleCard";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false); // Estado do modo escuro

  // Função para alternar entre os modos light e dark
  const toggleDarkMode = () => {};

  // Nav Bar
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
      <div
        className="absolute right-0 top-0 bottom-0 bg-gray-200 w-10"
        style={{ marginBottom: "-4.0cm", marginTop: "-2.0cm" }}
      ></div>
      <div className="absolute top-5 right-12">
        <ThemeSwitcher darkClassName="dark" />
      </div>
      <div className="text-center" style={{ marginTop: "0.5cm" }}>
        <Navbar options={menuOptions} />
      </div>
      <div className="flex">
        <div className=" w-1/2 p-10" style={{ marginLeft: "4cm", marginTop: "0cm" }}>
          <h1 className="font-bold text-4xl mb-4" style={{ marginTop: "1cm" }}>
            I am Jane. I live in New York City, where I develop the future.
          </h1>

          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi <br />
          </p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi <br />
          </p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi <br />
          </p>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi <br />
          </p>
        </div>

        <div className="w-1/3 p-10" style={{ marginLeft: "1cm", marginTop: "3cm" }}>
          {/* PHOTO */}
          <div className="flex w-500 h-400 bg-black mb-4">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTxO1Wg_oSP8kHxETWWISlEg5y_AxSJpqZMjl9TOSrCeemolg2"
              width={500}
              height={400}
              alt="User Photo"
            />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <a href="/x.png" className="w-8 h-8 mr-2">
                <img src="/x.png" alt="Follow me on X" />
              </a>
              <span>Follow me on X</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="/git.png" className="w-8 h-8 mr-2">
                <img src="/git.png" alt="Follow me on GitHub" />
              </a>
              <span>Follow me on GitHub</span>
            </div>
            <div className="flex items-center mb-2">
              <a href="/in.png" className="w-8 h-8 mr-2">
                <img src="/in.png" alt="Follow me on LinkedIn" />
              </a>
              <span>Follow me on LinkedIn</span>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-center">
              <a href="mailto:jane@email.com" className="w-8 h-8 mr-2">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNhc5wYpOZgiozgKpfx9g-PwCAM3yW3x6vUZT4Rikp-u-_zfbd" />
              </a>
              <a href="mailto:jane@email.com" className="text-blue-500">
                jane@email.com
              </a>
            </div>
          </div>

          <hr className="w-full border-gray-300" style={{ marginBottom: "4cm" }} />

          {/* Links no rodapÃ© */}
          <p
            className="text-left text-gray-800 absolute bottom-0 left-0"
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

          {/* Texto no rodapÃ© */}
          <p
            className="text-right text-gray-500 text-xs absolute bottom-0 right-0"
            style={{ marginRight: "1.5cm", marginBottom: "-1.0cm" }}
          >
            Â© 2024 John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}