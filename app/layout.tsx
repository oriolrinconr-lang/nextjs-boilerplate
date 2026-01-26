import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://liberam-facultatem.vercel.app"),
  title: "Liberam Facultatem",
  description: "Esto no es motivación. Es estructura.",
  openGraph: {
    title: "Liberam Facultatem",
    description: "Esto no es motivación. Es estructura.",
    url: "https://liberam-facultatem.vercel.app",
    siteName: "Liberam Facultatem",
    images: [
      {
        url: "https://liberam-facultatem.vercel.app/LFimage.png",
        width: 1200,
        height: 630,
        alt: "Liberam Facultatem",
      },
      twitter: {
  card: "summary_large_image",
  title: "Liberam Facultatem",
  description: "Esto no es motivación. Es estructura.",
  images: ["https://liberam-facultatem.vercel.app/LFimage.png"],
},

    ],
    locale: "es_ES",
    type: "website",
  },
} as const;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />

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

