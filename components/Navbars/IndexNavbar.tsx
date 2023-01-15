import Image from "next/image";
import Link from "next/link";
import React from "react";
// components

import IndexDropdown from "../Dropdowns/IndexDropdown";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-white bg-opacity-90 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <Image
                src="/img/TurboLaserLogo-600px.png"
                alt="logo"
                width="150"
                height="150"
              />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {["Home", "Products", "About Us", "Contact Us"].map((item) => (
                <li key={item} className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-7 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="flex items-center pl-5">
                <IndexDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
