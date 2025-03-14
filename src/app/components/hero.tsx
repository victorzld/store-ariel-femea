import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full py-5 xl:pt-56 max-md:pt-28 lg:pt-52 max-md:-mb-5 md:pt-52">
            <Image
                src={'/assets/hero/capa-logo-gif-mobile.gif'}
                alt=""
                width={1000}
                height={1000}
                className="xl:hidden mx-auto xl:py-10 2xl:w-[50%] xl:w-[35%] max-md:w-[100%] xl:-my-[54px]
                max-md:-my-0 lg:hidden md:hidden"
                unoptimized
            />
            <Image
                src={'/assets/hero/capa-logo-gif.gif'}
                alt=""
                width={1000}
                height={1000}
                className="max-md:hidden mx-auto xl:py-10 2xl:w-[65%] xl:w-[65%] max-md:w-[95%] xl:-my-[54px]
                max-md:-my-0"
                unoptimized
            />
        </div>
    )
}