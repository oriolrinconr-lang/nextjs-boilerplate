"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container headerInner">
        <Link href="/entrada" className="brand" onClick={() => setOpen(false)}>
          <span className="brandMark">
            <Image
              src="/3. LF BLANCO EDITADO.png"
              alt="Liberam Facultatem"
              width={36}
              height={36}
              style={{ objectFit: "contain" }}
              priority
            />
          </span>
          <span className="brandText">Liberam Facultatem</span>
        </Link>

        <button
          className="menuBtn"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span className="menuIcon" />
        </button>

        <nav className={`nav ${open ? "navOpen" : ""}`}>
          <Link className="navLink" href="/entrada" onClick={() => setOpen(false)}>
            Entrada
          </Link>
          <Link className="navLink" href="/campo-mental" onClick={() => setOpen(false)}>
            Campo Mental
          </Link>
          <Link className="navLink" href="/campo-fisico" onClick={() => setOpen(false)}>
            Campo Físico
          </Link>
          <Link className="navLink" href="/registro" onClick={() => setOpen(false)}>
            Registro
          </Link>
        </nav>
      </div>
    </header>
  );
}
