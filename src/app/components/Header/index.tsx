"use client"

import React from "react";
import "./Header.css";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const searchBet = () => {
    const input = document.getElementById("search-container");

    if (input?.classList.contains("hidden")) {
      input.classList.remove("hidden");
      input.classList.add("search-input");
    } else {
      input?.classList.remove("search-input");
      input?.classList.add("hidden");
    }
  };

  const openMenu = () => {
    const listItems = document.getElementById("list-container");
    const menuButton = document.getElementById("menu");
    const closeButton = document.getElementById("close-button");

    if (listItems?.classList.contains("hidden")) {
      listItems.classList.remove("hidden");
      listItems.classList.add("show-list");

      menuButton?.classList.add("hidden");
      closeButton?.classList.remove("hidden");
      closeButton?.classList.add("show");
    } else {
      listItems?.classList.remove("show-list");
      listItems?.classList.add("hidden");

      menuButton?.classList.remove("hidden");
      closeButton?.classList.remove("show");
      closeButton?.classList.add("hidden");
    }
  };

  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="container-menu">
            <h1>
              <Link href="/">Apostas Rápidas</Link>
            </h1>
            <ul className="hidden" id="list-container">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/futebol">Futebol</Link>
              </li>
              <li>
                <Link href="/basquete">Basquete</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
            </ul>
          </div>
          <div className="options-container">
            <Search onClick={searchBet} />
            <Menu id="menu" onClick={openMenu} />
            <X id="close-button" className="hidden" onClick={openMenu} />
          </div>
        </div>
      </nav>
      <div className="hidden" id="search-container">
        <input type="text" placeholder="Buscar dicas..." />
        <button>Buscar</button>
      </div>
    </header>
  );
};

export default Header;
