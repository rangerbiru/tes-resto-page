import React, { useEffect, useState } from "react";
import "./style.css";
import Hamburger from "hamburger-react";

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.getElementById("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  });

  return (
    <header
      className="flex items-center py-10 px-32 w-full fixed header-sticky max-lg:px-5"
      id="header"
    >
      <div className="logo">
        <h2 className="text-xl border-2 py-1 px-4 text-white">RESTO</h2>
      </div>

      <nav className="ml-auto">
        <ul className="flex gap-6 text-white tracking-wider uppercase max-md:hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}

      <div className="hidden max-md:block">
        <Hamburger
          toggled={openHamburger}
          toggle={setOpenHamburger}
          direction={"right"}
          color="#fff"
          rounded
        />

        {openHamburger ? (
          <>
            <ul className="absolute gap-6 w-full flex flex-col left-0 top-24 py-4 px-6 mt-2 bg-white ham-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
