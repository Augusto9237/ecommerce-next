'use client'
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";

interface Media {
    images: {
        __typename?: "ProductMedia" | undefined;
        id: string;
        url: string;
        sortOrder?: number | null | undefined;
    }[];
}

export function Carousel({ images }: Media) {

    const [curr, setCurr] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [autoSlideInterval, setAutoSlideInterval] = useState(8000);

    const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, images])

    return (
        <section className="relative max-w-[1080px] min-h-[200px] max-md:max-h-[200px] h-full overflow-hidden rounded-md">

            <div className="flex transition-transform ease-out duration-500 h-full w-full flex-1" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {images.map((slide) => (
                    <img
                        key={slide.id}
                        src={slide.url}
                        alt="Imagem"
                        // width={399}
                        // height={120}
                        className="h-full w-full"
                    />

                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-2">
                <button onClick={prev} className="p-1 rounded-full shadow bg-textColor-50/60 text-background-100 hover:bg-textColor-50">
                    <RiArrowLeftSLine />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-textColor-50/60 text-background-100 hover:bg-textColor-50">
                    <RiArrowRightSLine />
                </button>
            </div>

            <div className="absolute bottom-2 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((item, i) => (
                        <div
                            key={item.id}
                            className={`transition-all w-1 h-1 bg-textColor-50 rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}