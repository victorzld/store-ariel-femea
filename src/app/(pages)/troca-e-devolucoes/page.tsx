import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ariel Fêmea • Trocas e Devoluções",
};


export default function TrocaEDecolucoes() {
    return (
        <div className="w-full h-full px-60 py-10 flex flex-col items-center justify-center
        max-md:px-6 xl:pt-52 lg:pt-52 md:pt-52 max-md:pt-32"
        >
            <h1 className="text-3xl max-md:text-2xl max-md:border-b max-md:border-slate-400/60">
                Trocas e Devoluções
            </h1>

            <div className="flex flex-col items-start justify-center max-md:pt-10 pt-14 bg-black bg-opacity-90
            px-10 py-10 mt-10 rounded-lg xl:w-[1216px] max-md:px-3 max-md:w-[100%]"
            >
                <h2 className="text-2xl max-md:text-xl text-lime-300">
                    Quando posso trocar meu produto?
                </h2>

                <ul className="pt-5 max-md:pt-1">
                    <li className="pt-5">
                        <div className="flex items-center justify-start gap-2">
                            <p className="mb-1">•</p>
                            <p className="text-xl max-md:text-lg">Direito de arrependimento:</p>
                        </div>

                        <p className="text-justify pt-2 text-base tracking-wide">
                            De acordo com o artigo 49 do Código do Consumidor, o cliente possui até 7 (sete)
                            dias corridos a contar a partir da data do recebimento do produto
                            (o prazo será conferido no site dos Correios ou na transportadora escolhida e
                            contará a partir da data de entrega mesmo que assinado por terceiros) para solicitar
                            a troca ou devolução do seu produto em casos de arrependimento da compra.

                            Para trocas por arrependimento, os custos de frete ida e volta são por conta do cliente.
                        </p>
                    </li>


                    <li className="pt-5">
                        <div className="flex items-center justify-start gap-2">
                            <p className="mb-1">•</p>
                            <p className="text-xl max-md:text-lg">Defeito no produto:</p>
                        </div>

                        <p className="text-justify pt-2 text-base tracking-wide">
                            Em caso de defeito de fabricação, o cliente tem até 7(sete)
                            dias corridos para solicitar a troca nos comunicando através do e-mail e comprovando
                            através de fotos enviadas. Todos os custos oriundos do envio do produto serão arcados por nós.

                            A troca não será realizada caso o motivo seja decorrente de mau uso,
                            armazenamento indevido ou quebra de responsabilidade do cliente.
                        </p>
                    </li>
                </ul>

                <h2 className="text-2xl max-md:text-xl max-md:pt-10 pt-14 text-lime-300">
                    Como devo proceder para realizar a troca do produto?
                </h2>

                <ul className="pt-5 max-md:pt-1">
                    <p className="text-justify pt-2 text-base">
                        Para solicitar a troca ou devolução de seu produto é necessário que seja
                        encaminhado um e-mail para arielfemea@hotmail.com através da nossa página de <Link
                            href={'/contato'}
                            className="text-blue-300 hover:text-blue-400 transition duration-150 hover:underline"
                        >
                            SAC
                        </Link> e
                        seu conteúdo deve conter as seguintes informações:
                    </p>

                    <li className="pt-5">
                        <div className="flex items-center justify-start gap-2">
                            <p className="mb-1">•</p>
                            <p className="text-base max-md:text-base">Data da compra;</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <p className="mb-1">•</p>
                            <p className="text-base max-md:text-base">Nome completo;</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <p className="mb-1">•</p>
                            <p className="text-base max-md:text-base">Telefone (com DDD);</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <p className="mb-1">•</p>
                            <p className="text-base max-md:text-base">Motivo da troca ou devolução.</p>
                        </div>

                        <div className="pt-2">
                            <p>O produto deverá ser encaminhado na embalagem original.</p>
                        </div>
                    </li>
                </ul>

                <h2 className="text-2xl max-md:text-xl max-md:pt-10 pt-14 text-lime-300">
                    Já realizei o envio de volta do produto, e agora?
                </h2>

                <div className="pt-5 max-md:pt-1">
                    <p className="text-justify pt-2 text-base">
                        O produto desejado para troca e/ou a restituição do valor pago só poderá ser
                        liberado após verificação e validação da equipe de Controle de Qualidade.
                    </p>
                    <p className="text-justify pt-2 text-base">
                        Caso seja identificada qualquer divergência ou violação do produto,
                        não será aceita a devolução e o produto será retido até que seja pago
                        o valor do novo frete para reenvio do produto ao cliente.
                    </p>
                    <p className="text-justify pt-2 text-base">
                        A partir do momento que nós recebermos o produto de volta, a Ariel Fêmea tem até
                        7 dias úteis para resolver o problema do cliente.
                    </p>
                </div>
            </div>
        </div>
    )
}