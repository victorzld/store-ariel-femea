import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CategoryMenu from "./components/category-menu";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ariel Fêmea",
  description: "Artesanatos únicos e diveritos, para você e sua casa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head></head>
      <body
        className={`${inter.className} antialiased bg-desktop2 bg-cover bg-center max-md:bg-mobile
        max-md:bg-contain max-md:bg-center`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
          <CategoryMenu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
