"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface Categories {
    name: string,
}

interface SubCategories {
    id: number,
    category: string,
    src: string
}

export const categorie1: Array<Categories> = [
    {
        name: "Club Penguin",
    }
]

export const categorie2: Array<Categories> = [
    {
        name: "Broches",
    },
]

export const categorie3: Array<Categories> = [
    {
        name: "Porta Trecos",
    },
]

export const categorie4: Array<Categories> = [
    {
        name: "Chaveiros",
    }
]

export const categorie5: Array<Categories> = [
    {
        name: "Ímãs"
    }
]


export const subcategorie1: Array<SubCategories> = [
    {
        id: 1,
        category: "Broches",
        src: "/colecao/club-penguin",
    },
    {
        id: 2,
        category: "Chaveiros",

        src: "/colecao/chaveiros",
    },
]

export const subcategorie2: Array<SubCategories> = [
    {
        id: 1,
        category: "Club Penguin",
        src: "/colecao/club-penguin",
    },
    {
        id: 2,
        category: "Pucca",
        src: "/colecao/pucca"
    }
]

export const subcategorie3: Array<SubCategories> = [
    {
        id: 1,
        category: "Diversos",
        src: "/colecao/diversos",
    },
    {
        id: 2,
        category: "2000's",
        src: "/colecao/2000"
    }
]

export const subcategorie4: Array<SubCategories> = [
    {
        id: 1,
        category: "Club Penguin",
        src: "/colecao/chaveiros",
    },
    {
        id: 2,
        category: "Pucca",
        src: "/colecao/pucca"
    }
]

export const subcategorie5: Array<SubCategories> = [
    {
        id: 1,
        category: "Animal Crossing",
        src: "/colecao/animal-crossing"
    },
    {
        id: 2,
        category: "Pucca",
        src: "/colecao/pucca"
    }
]

export default function CategoryMenu() {
    const [activeCategory1, setActiveCategory1] = useState<string | null>(null)
    const [activeCategory2, setActiveCategory2] = useState<string | null>(null)
    const [activeCategory3, setActiveCategory3] = useState<string | null>(null)
    const [activeCategory4, setActiveCategory4] = useState<string | null>(null)
    const [activeCategory5, setActiveCategory5] = useState<string | null>(null)

    return (
        <nav className="hidden md:block bg-purple-800 text-white shadow-md">
            <div className="flex items-center justify-center px-20">
                <div className="container mx-auto">
                    <ul className="flex justify-center space-x-8">
                        {categorie1.map((category) => (
                            <li
                                key={category.name}
                                className="relative group"
                                onMouseEnter={() => setActiveCategory1(category.name)}
                                onMouseLeave={() => setActiveCategory1(null)}
                            >
                                <button className="py-4 px-2 flex items-center hover:text-lime-300 transition-colors duration-200 font-bold">
                                    {category.name}
                                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                {activeCategory1 === category.name && (
                                    <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-white to-pink-100 rounded-md shadow-lg overflow-hidden z-20 animate-fadeIn">
                                        <ul className="py-2">
                                            {subcategorie1.map((subcategory, index) => (
                                                <li key={subcategory.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slideDown">
                                                    <Link
                                                        href={subcategory.src}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200"
                                                    >
                                                        {subcategory.category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container mx-auto">
                    <ul className="flex justify-center space-x-8">
                        {categorie2.map((category) => (
                            <li
                                key={category.name}
                                className="relative group"
                                onMouseEnter={() => setActiveCategory2(category.name)}
                                onMouseLeave={() => setActiveCategory2(null)}
                            >
                                <button className="py-4 px-2 flex items-center hover:text-lime-300 transition-colors duration-200 font-bold">
                                    {category.name}
                                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                {activeCategory2 === category.name && (
                                    <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-white to-pink-100 rounded-md shadow-lg overflow-hidden z-20 animate-fadeIn">
                                        <ul className="py-2">
                                            {subcategorie2.map((subcategory, index) => (
                                                <li key={subcategory.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slideDown">
                                                    <Link
                                                        href={subcategory.src}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200"
                                                    >
                                                        {subcategory.category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container mx-auto">
                    <ul className="flex justify-center space-x-8">
                        {categorie3.map((category) => (
                            <li
                                key={category.name}
                                className="relative group"
                                onMouseEnter={() => setActiveCategory3(category.name)}
                                onMouseLeave={() => setActiveCategory3(null)}
                            >
                                <button className="py-4 px-2 flex items-center hover:text-lime-300 transition-colors duration-200 font-bold">
                                    {category.name}
                                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                {activeCategory3 === category.name && (
                                    <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-white to-pink-100 rounded-md shadow-lg overflow-hidden z-20 animate-fadeIn">
                                        <ul className="py-2">
                                            {subcategorie3.map((subcategory, index) => (
                                                <li key={subcategory.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slideDown">
                                                    <Link
                                                        href={subcategory.src}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200"
                                                    >
                                                        {subcategory.category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container mx-auto">
                    <ul className="flex justify-center space-x-8">
                        {categorie4.map((category) => (
                            <li
                                key={category.name}
                                className="relative group"
                                onMouseEnter={() => setActiveCategory4(category.name)}
                                onMouseLeave={() => setActiveCategory4(null)}
                            >
                                <button className="py-4 px-2 flex items-center hover:text-lime-300 transition-colors duration-200 font-bold">
                                    {category.name}
                                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                {activeCategory4 === category.name && (
                                    <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-white to-pink-100 rounded-md shadow-lg overflow-hidden z-20 animate-fadeIn">
                                        <ul className="py-2">
                                            {subcategorie4.map((subcategory, index) => (
                                                <li key={subcategory.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slideDown">
                                                    <Link
                                                        href={subcategory.src}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200"
                                                    >
                                                        {subcategory.category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container mx-auto">
                    <ul className="flex justify-center space-x-8">
                        {categorie5.map((category) => (
                            <li
                                key={category.name}
                                className="relative group"
                                onMouseEnter={() => setActiveCategory5(category.name)}
                                onMouseLeave={() => setActiveCategory5(null)}
                            >
                                <button className="py-4 px-2 flex items-center hover:text-lime-300 transition-colors duration-200 font-bold">
                                    {category.name}
                                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                {activeCategory5 === category.name && (
                                    <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-white to-pink-100 rounded-md shadow-lg overflow-hidden z-20 animate-fadeIn">
                                        <ul className="py-2">
                                            {subcategorie5.map((subcategory, index) => (
                                                <li key={subcategory.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slideDown">
                                                    <Link
                                                        href={subcategory.src}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200"
                                                    >
                                                        {subcategory.category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

