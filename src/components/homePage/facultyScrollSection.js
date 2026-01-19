"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const dummyImage = "/dummyimg.png";

const cards = [
    { title: "Ayurveda Faculty", image: dummyImage },
    { title: "Clinical Practitioners", image: dummyImage },
    { title: "Nutrition & Dietetics", image: dummyImage },
    { title: "Integrative Health Sciences", image: dummyImage },
    { title: "Academic Excellence", image: dummyImage },
    { title: "Industry Experts", image: dummyImage },
    { title: "Research Mentors", image: dummyImage },
    { title: "Wellness Coaches", image: dummyImage },
    { title: "Holistic Therapists", image: dummyImage },
    { title: "Global Faculty Network", image: dummyImage },
];

export default function FacultyScrollSection() {
    const isAnimating = useRef(false);
    const [activeIndex, setActiveIndex] = useState(2);

    // 🔁 Continuous infinite loop
    useEffect(() => {
        const interval = setInterval(() => {
            if (isAnimating.current) return;

            isAnimating.current = true;
            setActiveIndex((prev) => (prev + 1) % cards.length);

            setTimeout(() => {
                isAnimating.current = false;
            }, 700);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[320vh] bg-[#140b08] text-white pt-16 md:pt-20">
            <div className="sticky top-0 flex h-screen flex-col items-center justify-center px-4">

                {/* Section Heading — Bitter */}
                <h2 className="mb-12 text-center text-4xl md:text-5xl font-semibold tracking-tight font-[var(--font-bitter)]">
                    Faculty & Course Instructors
                </h2>

                {/* Card Stack */}
                <div className="relative h-[320px] w-[320px] sm:w-[440px]">
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
                                className="absolute left-1/2 top-1/2 transition-all duration-700 ease-in-out"
                                style={{
                                    zIndex: isActive ? 30 : 10,
                                    opacity: isActive ? 1 : 0.6,
                                    transform: `
                                      translate(-50%, -50%)
                                      translateX(${offset * 160}px)
                                      scale(${isActive ? 1.05 : 0.9})
                                    `,
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover object-center"
                                        priority={isActive}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Animated Title — Bitter */}
                <div className="mt-8 h-[64px] flex items-center justify-center overflow-hidden">
                    <h3
                        key={activeIndex}
                        className="text-3xl md:text-4xl font-medium tracking-tight font-[var(--font-bitter)] text-white/90 animate-title"
                    >
                        {cards[activeIndex].title}
                    </h3>
                </div>

                {/* Description — Merriweather Sans */}
                <p className="mt-12 max-w-xl text-center text-[15px] leading-relaxed text-white/80 font-[var(--font-merri)]">
                    All courses are taught by experienced academicians, clinicians, and
                    subject-matter experts across Ayurveda, Nutrition & Dietetics, and
                    Integrative Health Sciences.
                </p>

                {/* Title animation */}
                <style>{`
                    .animate-title {
                        animation: titleIn 0.7s ease forwards;
                    }
                    @keyframes titleIn {
                        from {
                            opacity: 0;
                            transform: translateY(18px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>

            </div>
        </section>
    );
}
