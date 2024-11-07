/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@/styles/slide/custom-properties.css"

import { Autoplay, Pagination } from 'swiper/modules';
import { GithubLogo, Globe } from '@phosphor-icons/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Projects as IProjects } from '@/utils/types/projects';
import Image from 'next/image';
import Link from 'next/link';

export function Projects({ data }: { data: IProjects[] }) {
    return (
        <section id="projects" className="my-[239px] flex flex-col items-center justify-center gap-[38px] md:gap-[115px]">
            <h3 className="text-4xl font-semibold self-start font-lufga md:text-5xl" id="services">
                Principais <span className="text-purple-principal">projetos</span>
            </h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Pagination, Autoplay]}
                className="max-w-[300px] mobile_l:max-w-[400px] mobile_xl:max-w-[500px] md:max-w-[680px] lg:max-w-[1200px] h-[250px] lg:h-[346px] w-full"
                autoplay={{
                    delay: 1000,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    }
                }}
            >
                {data !== undefined && data.map(({ id, createdAt, deployUrl, description, githubUrl, photo, tagsTechnologies, title, updatedAt }) => (
                    <SwiperSlide className="" key={id}>
                        <div className="relative group w-full h-full">
                            <Image src={photo.url} width={400} height={300} alt={title} className="w-full h-full rounded-lg object-fill group-hover:blur-sm" quality="100" />
                            <div className="absolute top-[50%] -translate-y-[50%] items-center justify-center w-full gap-4 hidden group-hover:flex">
                                <Link target="_blank" className="flex items-center justify-center font-semibold font-lufga gap-4 text-white py-4 px-8 rounded-xl shadow-lg bg-black" href={githubUrl}>
                                    <GithubLogo size={32} color="#FFFFFF" />
                                    <span>Github</span>
                                </Link>
                                <Link target="_blank" className="flex items-center justify-center font-semibold font-lufga gap-4 text-white py-4 px-8 rounded-xl shadow-lg bg-slate-800" href={deployUrl}>
                                    <Globe size={32} color="#FFFFFF" />
                                    <span>Deploy</span>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}