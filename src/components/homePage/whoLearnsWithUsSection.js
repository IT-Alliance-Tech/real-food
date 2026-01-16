"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserMd, FaHeartbeat, FaSpa, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

export default function WhoLearnsWithUsSection() {
    const sectionRef = useRef(null);
    const [animateKey, setAnimateKey] = useState(0);

    useEffect(() => {
        setAnimateKey((k) => k + 1);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateKey((k) => k + 1);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const personas = [
        {
            icon: <FaUserMd />,
            title: "Doctors & Clinicians",
            description: "Integrate ancient dietary wisdom with modern clinical practice for better patient outcomes.",
            color: "#2D6933"
        },
        {
            icon: <FaHeartbeat />,
            title: "Nutritionists & Dietitians",
            description: "Expand your toolkit beyond calories and macros to include digestion and constitution.",
            color: "#10295F"
        },
        {
            icon: <FaSpa />,
            title: "Ayurveda Practitioners",
            description: "Bridge the gap between traditional texts and contemporary nutritional science.",
            color: "#F9A620"
        },
        {
            icon: <FaChalkboardTeacher />,
            title: "Yoga Therapists",
            description: "Offer holistic lifestyle and dietary guidance to complement physical practices.",
            color: "#2D6933"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-white"
        >
            <div key={animateKey} className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24 section-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{ backgroundColor: "rgba(16, 41, 95, 0.05)" }}>
                        <FaUsers className="text-[#10295F]" />
                        <span className="text-sm font-semibold uppercase tracking-wider text-[#10295F]">Community</span>
                    </div>

                    <h2
                        className="text-[42px] md:text-[64px] font-extrabold leading-[1.1] mb-6"
                        style={{ fontFamily: "'Bitter', serif", color: "#10295F" }}
                    >
                        Who Learns With Us?
                    </h2>
                    <div className="w-24 h-1.5 mx-auto rounded-full bg-[#F9A620] mb-8" />

                    <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600 font-medium"
                        style={{ fontFamily: "'Merriweather Sans', sans-serif" }}>
                        Our courses are designed for forward-thinking health professionals ready to embrace an integrative approach.
                    </p>
                </div>

                {/* Persona Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {personas.map((persona, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out flex flex-col items-center text-center stagger-slide-up"
                            style={{ animationDelay: `${0.2 + (index * 0.15)}s` }}
                        >
                            <div
                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                                style={{
                                    backgroundColor: `${persona.color}15`,
                                    color: persona.color
                                }}
                            >
                                {persona.icon}
                            </div>

                            <h3
                                className="text-xl font-bold mb-4"
                                style={{ fontFamily: "'Bitter', serif", color: "#10295F" }}
                            >
                                {persona.title}
                            </h3>

                            <p
                                className="text-gray-600 leading-relaxed text-sm md:text-base font-medium"
                                style={{ fontFamily: "'Merriweather Sans', sans-serif" }}
                            >
                                {persona.description}
                            </p>

                            <div
                                className="absolute bottom-0 left-0 w-full h-1.5 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center"
                                style={{ backgroundColor: persona.color }}
                            />
                        </div>
                    ))}
                </div>

            </div>

            <style>{`
        .section-fade-up {
            opacity: 0;
            animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .stagger-slide-up {
            opacity: 0;
            animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
