import { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Coleção • Club Penguin",
};


interface Pins {
    id: number,
    name: string,
    price: number,
    image: string,
    src: string
    soldout: string
}

const products: Array<Pins> = [
    { id: 1, name: "Aunt Arctic", price: 50.00, image: "/assets/pins-png/1.png", src: '/broches/club-penguin/aunt-arctic', soldout: "" },
    { id: 2, name: "Rockhopper", price: 50.00, image: "/assets/pins-png/2.png", src: "/broches/club-penguin/rockhopper", soldout: "Esgotado" },
    { id: 3, name: "Pinguinando", price: 50.00, image: "/assets/pins-png/3.png", src: '/broches/club-penguin/going-places', soldout: "" },
    { id: 4, name: "Rookie", price: 50.00, image: "/assets/pins-png/4.png", src: '/broches/club-penguin/rookie', soldout: "" },
    { id: 5, name: "Gary", price: 50.00, image: "/assets/pins-png/5.png", src: '/broches/club-penguin/gary', soldout: "" },
    { id: 6, name: "Cadence", price: 50.00, image: "/assets/pins-png/6.png", src: '/broches/club-penguin/cadence', soldout: "" },
    { id: 7, name: "Nadador", price: 50.00, image: "/assets/pins-png/7.png", src: '/broches/club-penguin/go-swimming', soldout: "" },
    { id: 8, name: "Sensei", price: 50.00, image: "/assets/pins-png/8.png", src: '/broches/club-penguin/sensei', soldout: "" },
    { id: 9, name: "Herbert", price: 50.00, image: "/assets/pins-png/9.png", src: '/broches/club-penguin/hebert', soldout: "" },
    { id: 10, name: "Astro40", price: 50.00, image: "/assets/pins-png/10.png", src: '/broches/club-penguin/astro-40', soldout: "" },
]


export default function ProductGrid() {
    return (
        <div className="w-full h-full pt-52 max-md:pt-20">
            <div className="flex items-center justify-center py-2 mb-[50px] mt-[30px] mx-10">
                <h1 className="font-semibold tracking-wider xl:text-3xl text-lime-300 max-md:text-2xl">
                    Club Penguin
                </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[44px] 2xl:gap-[44px] xl:px-[80px] 2xl:px-[120px] pb-5 max-md:px-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-slate-50 bg-opacity-5 max-md:bg-slate-50 max-md:bg-opacity-15 border border-zinc-500
                    max-md:px-3 max-md:py-5 py-4 px-5 mx-3 max-md:mx-0 max-md:mb-1 mb-2 rounded-lg hover:scale-105 
                    transition duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 transform
                    "
                    >
                        {product.soldout.length > 0 ? (
                            <div className="text-left max-md:-mt-2 max-md:mb-3">
                                <span className="uppercase max-md:py-1 text-xs border-red-500 text-red-400 border px-2 py-1 rounded-xl">
                                    esgotado
                                </span>
                            </div>
                        ) : (
                            null
                        )}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="max-md:h-24 xl:h-44 mx-auto object-cover mb-4 rounded"
                        />
                        <h2 className="text-lg font-bold text-slate-100 mb-2 max-md:text-base tracking-wide 
                        border-t border-slate-200/40 pt-1">
                            {product.name}
                        </h2>
                        {product.soldout.length > 0 ? (
                            null
                        ) : (
                            <p className="text-green-600 font-semibold">R$ {product.price.toFixed(2).replace(/[.]/, ',')}</p>
                        )}
                        <Link href={product.src}>
                            <button className="max-md:py-1 mt-4 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors duration-300">
                                Comprar
                            </button>
                        </Link>
                    </div>
                ))}
            </div>


        </div>
    )
}

