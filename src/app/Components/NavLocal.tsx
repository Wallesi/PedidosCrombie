"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";
export const NavLocal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-primary">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          
          <div className="flex-1 px-2 mx-2 text-xl text-white font-bold">
              <img className="w-12 mr-2" src="/Home/logo2.png" alt="" />
              <a href="/">Pedidos Crombie</a>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <Link href="/user/shop" className="btn btn-accent mr-4">Perfil</Link >
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-black">
          {/* Sidebar content here */}
          <button className="btn btn-neutral"><Link href="/user/shop" className="btn btn-accent mr-4">Perfil</Link ></button>
        </ul>
      </div>
    </div>

  );
}
export default NavLocal;