"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* -------------------- IMAGE IMPORTS (21) -------------------- */
import faculty1 from "../../../public/staff/staff1.png";
import faculty2 from "../../../public/staff/staff2.png";
import faculty3 from "../../../public/staff/staff3.png";
import faculty4 from "../../../public/staff/staff4.png";
import faculty5 from "../../../public/staff/staff5.png";
import faculty6 from "../../../public/staff/staff6.png";
import faculty7 from "../../../public/staff/staff7.png";
import faculty8 from "../../../public/staff/staff8.png";
import faculty9 from "../../../public/staff/staff9.png";
import faculty10 from "../../../public/staff/staff10.png";
import faculty11 from "../../../public/staff/staff11.png";
import faculty12 from "../../../public/staff/staff12.png";
import faculty13 from "../../../public/staff/staff13.png";
import faculty14 from "../../../public/staff/staff14.png";
import faculty15 from "../../../public/staff/staff15.png";
import faculty16 from "../../../public/staff/staff16.png";
import faculty17 from "../../../public/staff/staff17.png";
// import faculty18 from "../../../public/staff/staff18.png";
import faculty19 from "../../../public/staff/staff19.png";
import faculty20 from "../../../public/staff/staff20.png";
import faculty21 from "../../../public/staff/staff21.png";

/* -------------------- CARD DATA -------------------- */
const cards = [
    { name: "Dr. Megha", position: "Associate Professor, TDU", image: faculty1 },
    { name: "Dr. Ms. Sonia Velarsan,", position: "RD Program Asst.Ayurveda Dietetics, TDU", image: faculty2 },
    { name: "Dr. Madhumitha Krishnan", position: "MD (Ayurveda)Consultant, TDU", image: faculty3 },
    { name: "Dr. Girish Kumar", position: "Assistant Professor, TDU", image: faculty4 },
    { name: "Dr. Prasan Shankar", position: "Medical Director at I-AIM-TDU", image: faculty5 },
    { name: "Dr. Sanketh Sharma", position: "Assistant Professor, TDU", image: faculty6 },
    { name: "Dr. Shridevi Gothe", position: "Assistant Professor, TDU", image: faculty7 },
    { name: "Dr. Yashaswini G", position: "Consultant, IAIM Healthcare", image: faculty8 },
    { name: "Dr. Narendra Pendse", position: "MD", image: faculty9 },
    { name: "Dr. Aswini Mohan L", position: "BAMS,MSConsultant,IAIM Healthcare", image: faculty10 },
    { name: "Dr. Vineeta Deshmukh", position: "Deputy Director, Integrated Cancer Treatment and Research Center, Wagholi, Pune", image: faculty11 },
    { name: "Dr. Subrahmanya Kumar K", position: "Associate Professor, TDU", image: faculty12 },
    { name: "Dr. Anjali Jayantrao Raichur,", position: "Senior Consultant, Kerala Ayurveda Limited", image: faculty13 },
    { name: "Dr. Sankaranarayanan.S, MD (Panchakarma)", position: "Senior Medical Officer, The Arya Vaidya Chikitsalayam & Research Institute", image: faculty14 },
    { name: "Dr. L.Pavithra Saran, MD (Panchakarma),Msc.(Psy.)", position: "Senior Medical Officer, The Arya Vaidya Chikitsalayam & Research Institute", image: faculty15 },
    { name: "Dr. Neethu C Mohan", position: "Senior Ayurveda Consultant, Live Your Best Life - LYBL", image: faculty16 },
    { name: "Dr. Rakesh Kumar N, BAMS, MD (Dravyaguna)", position: "Senior Physician at AyurVAID hospitals at Aster CMI.", image: faculty17 },
    // { name: "Dr. Ananya Bose", position: "Senior Academician", image: faculty18 },
    { name: "Dr. Shivakumar S Harti · MD (Ayu.), PhD Faculty", position: " All India Institute of Ayurveda,New Delhi", image: faculty19 },
    { name: "Dr.  Shashidhara Gopalakrishna, BAMS, MD (Kayachikitsa) Medical superintendent, ", position: "Senior Consultant, Apollo AyurVaid", image: faculty20 },
    { name: "Dr. Prasanna Kulkarni M.D.(Ay), M.S.(Data Science)", position: "Professor, SK Ayurveda Medical College & Research Centre, Bangalore", image: faculty21 },
];

export default function FacultyScrollSection() {
    const isAnimating = useRef(false);
    const [activeIndex, setActiveIndex] = useState(0);

    /* -------------------- NAVIGATION FUNCTIONS -------------------- */
    const goToNext = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setActiveIndex((prev) => (prev + 1) % cards.length);
        setTimeout(() => {
            isAnimating.current = false;
        }, 700);
    };

    const goToPrev = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
        setTimeout(() => {
            isAnimating.current = false;
        }, 700);
    };

    /* -------------------- AUTO SLIDE -------------------- */
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
            <section className="relative bg-[#140b08] text-white py-20 md:py-28">
                <div className="flex flex-col items-center justify-center px-4">

                    {/* Heading */}
                    <h2 className="text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-16 md:mb-24">
                        Faculty & Course Instructors
                    </h2>

                    {/* Card Stack Container with Navigation */}
                    <div className="relative w-full max-w-6xl mb-16 md:mb-20">

                        {/* Previous Button */}
                        <button
                            onClick={goToPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                            aria-label="Previous faculty"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Card Stack - FIXED HEIGHT CONTAINER */}
                        <div className="relative h-[550px] w-[300px] sm:w-[420px] mx-auto">
                            {cards.map((card, index) => {
                                const total = cards.length;

                                let offset = index - activeIndex;
                                if (offset > total / 2) offset -= total;
                                if (offset < -total / 2) offset += total;

                                if (Math.abs(offset) > 1) return null;

                                const isActive = offset === 0;

                                return (
                                    <div
                                        key={index}
                                        className="absolute left-1/2 top-1/2 transition-all duration-700 ease-out"
                                        style={{
                                            zIndex: isActive ? 30 : 10,
                                            opacity: isActive ? 1 : 0.4,
                                            transform: `
                                                translate(-50%, -50%)
                                                translateX(${offset * 200}px)
                                                scale(${isActive ? 1.05 : 0.88})
                                                rotateY(${offset * -8}deg)
                                            `,
                                            width: "100%",
                                            height: "100%",
                                            filter: isActive ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.7)',
                                        }}
                                    >
                                        {/* FIXED HEIGHT CARD WRAPPER */}
                                        <div className="flex flex-col items-center h-full">
                                            {/* FIXED HEIGHT IMAGE - NEVER CHANGES */}
                                            <div className="relative h-[350px] sm:h-[380px] w-full overflow-hidden rounded-2xl shadow-2xl flex-shrink-0 transition-transform duration-700">
                                                <Image
                                                    src={card.image}
                                                    alt={card.name}
                                                    fill
                                                    className="object-cover object-top transition-all duration-700"
                                                    priority={isActive}
                                                    style={{
                                                        transform: isActive ? 'scale(1)' : 'scale(1.1)',
                                                    }}
                                                />
                                                {/* Overlay for inactive cards */}
                                                <div
                                                    className="absolute inset-0 bg-black/30 transition-opacity duration-700"
                                                    style={{
                                                        opacity: isActive ? 0 : 1
                                                    }}
                                                />
                                            </div>

                                            {/* FIXED HEIGHT TEXT AREA - ALWAYS RESERVED */}
                                            <div className="mt-6 text-center w-full h-[120px] flex flex-col items-center justify-start flex-shrink-0">
                                                {isActive && (
                                                    <div className="animate-fade-in-up">
                                                        <h4 className="text-2xl sm:text-3xl font-semibold text-white line-clamp-2">
                                                            {card.name}
                                                        </h4>
                                                        <p className="mt-2 text-base sm:text-lg text-white/70 line-clamp-3">
                                                            {card.position}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={goToNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                            aria-label="Next faculty"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Description */}
                    <div className="max-w-2xl px-4">
                        <p className="text-center text-[15px] sm:text-base leading-relaxed text-white/80 font-[var(--font-merri)]">
                            All courses are taught by experienced academicians, clinicians,
                            and subject-matter experts across Ayurveda, Nutrition & Dietetics,
                            and Integrative Health Sciences.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}