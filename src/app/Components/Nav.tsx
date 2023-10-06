"use client"
import React from "react";
import { useState } from "react";
export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary p-2 flex flex-col md:flex-row items-center justify-between">
      <div className="flex justify-between items-center w-full md:w-auto pl-3 pr-3">
        <div className="flex items-center">
          <img className="w-14 h-14" src="home/logo2.png" alt="" />
          <h2 className="text-2xl ml-2 font-semibold text-white">
            Pedidos Crombie
          </h2>
        </div>

        <div className="flex items-center">
          <span onClick={toggleMenu} className="md:hidden dark:bg-slate-300 dark:rounded-full dark:p-2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="
              alt="Menu Icon"
            />
          </span>
        </div>
      </div>

      <ul
        className={`dark:text-white flex ${menuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center space-x-0 mt-2 md:space-x-4 space-y-2 md:space-y-0 text-[#4F5665] mb-2`}
      >
        <li className="text-base cursor-pointer md:last-child:mb-0">About</li>
        <li className="text-base cursor-pointer md:last-child:mb-0">Register</li>
        <li className="text-base cursor-pointer md:last-child:mb-0">Help</li>
      </ul>

      <div className={`flex ${menuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0`}>
        <a href="" className="text-base font-semibold">
          Sign In
        </a>
        <button className="text-base button-color-basic font-semibold border border-white px-4 py-2 rounded-full cursor-pointer pl-5 pr-5 hover-[#F53855] boton-fondo">
          Sign Up
        </button>
      </div>
    </nav>
    );
}
export default NavBar;