"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__branding">
          <div className="header__logo">
            <img
              src="/img/rostyslav-datsko-icon.jpg"
              className="header__logo-img"
              alt="Rostyslav Datsko"
            />
          </div>

          <span className="header__name">Rostyslav Datsko</span>
        </div>

        {/* Desktop menu */}
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link href="/" className="header__menu-link">Home</Link>
            </li>

            <li className="header__menu-item">
              <Link href="/#about" className="header__menu-link">About</Link>
            </li>

            <li className="header__menu-item">
              <Link href="/#projects" className="header__menu-link">Projects</Link>
            </li>

            <li className="header__menu-item">
              <Link href="/#contact" className="header__menu-link">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Burger button */}
        <button
          className="header__burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`header__mobile-content ${
          menuOpen ? "mobile-menu-visible" : "mobile-menu-hidden"
        }`}
      >
        <ul className="header__mobile-menu">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>

          <li>
            <Link href="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </li>

          <li>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}