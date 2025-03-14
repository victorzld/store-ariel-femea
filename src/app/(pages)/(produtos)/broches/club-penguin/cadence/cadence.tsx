'use client'

import Image from "next/image";

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Swiper as SwiperComponent } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import DescricaoProduto from "@/app/components/common/produtos/descricao-produto";
import { DivUmBroche } from "@/app/components/common/produtos/div1-broche";
import { DivDoisBroche } from "@/app/components/common/produtos/div2-broche";
import { DivTresBroche } from "@/app/components/common/produtos/div3-broche";
import { DivQuatroBroche } from "@/app/components/common/produtos/div4-broche";
import { DivCincoBroche } from "@/app/components/common/produtos/div5-broche";
import { DivSeisBroche } from "@/app/components/common/produtos/div6-broche";
import { DivSeteBroche } from "@/app/components/common/produtos/div7-broche";
import { DivOitoBroche } from "@/app/components/common/produtos/div8-broche";
import { H1UmBroche } from "@/app/components/common/produtos/h1-broche";
import { ParagrafoUmBroche } from "@/app/components/common/produtos/p1-broche";
import BuyButtonOff from "@/app/layouts/buy-button-off/buy-button-off";

register()

const data = [
    { id: '1', image: '/assets/pins-frente/6.jpg' },
    { id: '2', image: '/assets/pins-verso/cadenceatras.jpg' },
    { id: '3', image: '/assets/pins/6.jpg' }
]


function SliderImage() {
    return (
        <div>
            <SwiperComponent
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.image}
                            className='rounded-md h-full w-full object-cover '
                            alt=""
                            width={400}
                            height={400}
                        />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div >
    )
}



export default function PinSix() {
    return (
        <DivUmBroche >
            <DivDoisBroche>
                <DivTresBroche>
                    <DivQuatroBroche>
                        <DivCincoBroche>
                            <SliderImage />
                        </DivCincoBroche>
                        <DivSeisBroche>
                            <div>
                                <h3 className="uppercase pb-2 text-lg text-red-400">
                                    esgotado
                                </h3>
                            </div>
                            <DivSeteBroche>Club Penguin - Coleção</DivSeteBroche>
                            <H1UmBroche>
                                Cadence
                            </H1UmBroche>
                            {/* <div className="mt-2 flex items-center">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                                            ))}
                                        </div>
                                        <span className="ml-2 text-sm text-gray-600">5.0 (42 reviews)</span>
                                    </div> */}
                            <ParagrafoUmBroche>R$ 50,00</ParagrafoUmBroche>
                            {/* <ParagrafoDoisBroche>
                                <strong>
                                    Frete fixo: R$ 20,00 – Para região sudeste!
                                </strong>
                            </ParagrafoDoisBroche>
                            <ParagrafoDoisBroche>
                                <p>Para demais regiões do país, a consultar.</p>
                            </ParagrafoDoisBroche> */}
                            <DivOitoBroche>
                                <DescricaoProduto />
                            </DivOitoBroche>
                            <BuyButtonOff />
                        </DivSeisBroche>
                    </DivQuatroBroche>
                </DivTresBroche>
            </DivDoisBroche>
        </DivUmBroche>
    )
}

