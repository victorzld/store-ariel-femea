/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r  from-purple-800 to-purple-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 xl:text-sm">
          <div>
            <h3 className="text-xl font-bold mb-4">Mais Informações</h3>
            <ul>
              <li>
                <Link
                  href="/troca-e-devolucoes"
                  className="hover:text-lime-300"
                >
                  Troca e devoluções
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-lime-300">
                  SAC
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="flex flex-col gap-0.5">
              <p className="flex items-center gap-2">
                <img src="" alt="Email Logo" className="w-[20px] h-[20px]" />
                email
              </p>
              <p className="flex items-center gap-2">
                <img src="" alt="Telegram Logo" className="w-[20px] h-[20px]" />
                telegram
              </p>
              <p className="flex items-center gap-2">
                <img src="" alt="Telegram Logo" className="w-[20px] h-[20px]" />
                instagram
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p className="text-base xl:text-sm">
              Na <strong>Ariel Fêmea Artesanatos</strong>, cada peça única e
              divertida é feita à mão com todo o cuidado e carinho para você e
              sua casa!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Meios de Pagamento</h3>

            <Image
              src={"/assets/meios-pagamento/pix.png"}
              width={90}
              height={90}
              alt="Pix Image"
            />
          </div>
        </div>
        <div className="mt-16 text-center flex flex-col items-center justify-center gap-2">
          <p className="xl:text-sm">
            &copy; 2025 Ariel Fêmea. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
