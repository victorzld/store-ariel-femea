import { ShoppingCart } from "lucide-react";

export default function BuyButton() {
  return (
    <div>
      <a href="" target="_blank" rel="noopener noreferrer">
        <div className="mt-6 xl:flex xl:items-center">
          <button
            className="flex xl:w-[40%] xl:items-center xl:justify-between bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800
                                 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out transform
                                    hover:scale-105 2xl:justify-center 2xl:gap-3 max-md:w-[70%] max-md:mx-auto max-md:justify-between"
          >
            <ShoppingCart className="xl:ml-3 max-md:ml-3 h-5 w-5" />
            <p className="xl:mr-3 max-md:mr-3">Compre agora</p>
          </button>
        </div>
      </a>
    </div>
  );
}
