/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// Import the categories data
import {
  categorie1,
  categorie2,
  categorie3,
  categorie4,
  subcategorie1,
  subcategorie2,
  subcategorie3,
  subcategorie4,
} from "./category-menu";
import Link from "next/link";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setExpandedCategory(null); // Reset expanded category when closing the navbar
    }
  }, [isNavOpen]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
  };

  return (
    <header className="bg-gradient-to-l from-purple-900 via-purple-800 to-black p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src="/assets/logo/logo.png"
              alt="Ariel Fêmea Logo"
              width={55}
              height={55}
              className="mr-2 hover:-rotate-12 duration-300"
            />
          </div>
        </Link>

        <div className="flex gap-2 items-center justify-center max-md:hidden">
          <Image
            src={"/assets/diversos/cd.gif"}
            width={50}
            height={50}
            alt="Imagem CD"
          />
          <iframe
            className="w-[400px] h-[80px] -ml-9 rounded-xl items-center justify-center max-md:w-[50px]"
            src="https://open.spotify.com/embed/playlist/4dUB0fvgWp4CeaOzoVmYI5?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <nav className="hidden md:flex space-x-3">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src=""
              alt="Instagram Logo"
              className="w-[20px] h-[20px] hover:scale-105 transition duration-200"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src=""
              alt="Twitter Logo"
              className="w-[20px] h-[20px] hover:scale-105 transition duration-200 ml-1"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src=""
              alt="TikTok Logo"
              className="w-[20px] h-[20px] hover:scale-105 transition duration-200 mr-1"
            />
          </a>
        </nav>

        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="md:hidden text-white z-50 relative"
          aria-label="Toggle navigation"
        >
          {isNavOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-[70%] max-w-sm bg-gradient-to-bl from-purple-600 via-purple-800 to-purple-950 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } shadow-[-10px_0_15px_rgba(0,0,0,0.1)] overflow-y-auto`}
      >
        <div className="absolute inset-0 bg-lime-200 opacity-10 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-300 opacity-30"></div>
        <button
          onClick={() => setIsNavOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-lime-300 transition-colors duration-200"
          aria-label="Close navigation"
        ></button>
        <nav className="relative z-10 pt-16 px-4 h-full">
          <div className="-mt-5 mb-2 flex gap-3 items-center justify-center">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-300 text-xl font-bold flex items-center transition-all duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              <img
                src=""
                alt="Instagram Logo"
                className="w-[20px] h-[20px] hover:scale-105 transition duration-200"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-300 text-xl font-bold flex items-center transition-all duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              <img
                src=""
                alt="Twitter Logo"
                className="w-[20px] h-[20px] hover:scale-105 transition duration-200 ml-1"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-300 text-xl font-bold flex items-center transition-all duration-200"
              onClick={() => setIsNavOpen(false)}
            >
              <img
                src=""
                alt="TikTok Logo"
                className="w-[20px] h-[20px] hover:scale-105 transition duration-200"
              />
            </a>
          </div>

          {categorie1.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="pt-5 w-full text-base text-left font-extralight text-slate-50 hover:text-lime-300 flex items-center justify-between transition-all duration-200"
              >
                {category.name}
                {expandedCategory === category.name ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedCategory === category.name && (
                <ul className="mt-2 ml-4 space-y-2 animate-slideDown">
                  {subcategorie1.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link
                        href={subcategory.src}
                        className="font-extralight block text-white hover:text-lime-300 transition-colors duration-200"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {subcategory.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {categorie2.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-base font-extralight text-slate-50 hover:text-lime-300 flex items-center justify-between transition-all duration-200"
              >
                {category.name}
                {expandedCategory === category.name ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedCategory === category.name && (
                <ul className="mt-2 ml-4 space-y-2 animate-slideDown">
                  {subcategorie2.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link
                        href={subcategory.src}
                        className="block text-white font-extralight hover:text-lime-300 transition-colors duration-200"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {subcategory.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {categorie3.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-base font-extralight text-slate-50 hover:text-lime-300 flex items-center justify-between transition-all duration-200"
              >
                {category.name}
                {expandedCategory === category.name ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedCategory === category.name && (
                <ul className="mt-2 ml-4 space-y-2 animate-slideDown">
                  {subcategorie3.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link
                        href={subcategory.src}
                        className="block text-white font-extralight hover:text-lime-300 transition-colors duration-200"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {subcategory.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {categorie4.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-base font-extralight text-slate-50 hover:text-lime-300 flex items-center justify-between transition-all duration-200"
              >
                {category.name}
                {expandedCategory === category.name ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedCategory === category.name && (
                <ul className="mt-2 ml-4 space-y-2 animate-slideDown">
                  {subcategorie4.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link
                        href={subcategory.src}
                        className="block text-white font-extralight hover:text-lime-300 transition-colors duration-200"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {subcategory.category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-[400px] hover:scale-105 transition duration-300 fixed top-[234px] left-0 right-0 z-50">
            <a
              href="https://open.spotify.com/playlist/4dUB0fvgWp4CeaOzoVmYI5?si=b079bb3ceb804609"
              className="flex items-center justify-center gap-2"
            >
              <h1 className="text-slate-200 text-sm">Ouça a nossa playlist!</h1>

              <Image
                src={"/assets/socials/spotify.png"}
                width={20}
                height={20}
                alt="Spotify Logo"
              />
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay for the rest of the screen */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
    </header>
  );
}
