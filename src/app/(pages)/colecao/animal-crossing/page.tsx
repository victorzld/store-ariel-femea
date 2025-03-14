import { Metadata } from "next";
import Link from "next/link";
import { Frown } from 'lucide-react'

export const metadata: Metadata = {
    title: "Coleção • Animal Crossing",
};


export default function AnimalCrossingPage() {
    return (
        <div className="h-screen max-md:h-[700px] xl:pt-32 max-md:pt-14 flex flex-col items-center justify-center px-3 max-md:px-2">
            <div className="flex flex-col gap-10">
                <div className="flex gap-2 items-center justify-center">
                    <h1 className="flex items-center gap-2 text-lime-300 text-3xl font-bold max-md:text-lg max-md:text-center max-md:hidden">
                        Desculpa, mas essa página não está pronta
                        <Frown
                            className="text-lime-300 text-3xl font-bold xl:w-[20px] max-md:hidden"
                        />
                    </h1>
                    <div className="flex flex-col items-center justify-center gap-3 xl:hidden">
                        <h1 className="xl:hidden text-lime-300 text-3xl font-bold max-md:text-base max-md:text-center">
                            Desculpa, mas essa página não está pronta
                        </h1>
                        <Frown
                            className="xl:hidden text-lime-300 text-3xl font-bold max-md:w-[30px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1 max-md:gap-2">
                    <h2 className="text-lime-300 text-xl text-center max-md:text-base">Ainda estamos construindo nosso site, e em breve teremos mais novidades pra você!</h2>

                    <p className="text-lime-300 text-lg text-center max-md:text-base">
                        Para não perder nenhum lançamento, nos siga no <Link
                            href="https://www.instagram.com/arielacraft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-500 transition duration-150"
                        >
                            Instagram
                        </Link>
                    </p>
                </div>
            </div >
        </div >
    )
}