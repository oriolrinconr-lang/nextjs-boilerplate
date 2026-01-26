import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";


export const metadata: Metadata = {
  title: "Liberam Facultatem",
  description: "Esto no es motivación. Es estructura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="container headerInner">
            <Link href="/entrada" className="brand">
  <span className="brandMark">
    <Image
      src="/3. LF BLANCO EDITADO.png"
      alt="Liberam Facultatem"
      width={55}
      height={55}
      style={{ objectFit: "contain" }}
    />
  </span>
  <span className="brandText">Liberam Facultatem</span>
</Link>


            <nav className="nav">
              <Link className="navLink" href="/entrada">Entrada</Link>
              <Link className="navLink" href="/campo-mental">Campo Mental</Link>
              <Link className="navLink" href="/campo-fisico">Campo Físico</Link>
              <Link className="navLink" href="/registro">Registro</Link>
            </nav>
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="footer">
          <div className="container footerInner">
            <span>© {new Date().getFullYear()} Liberam Facultatem</span>
            <span className="muted">Orden · Silencio · Disciplina</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
