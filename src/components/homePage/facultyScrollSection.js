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
// Program Team - First 3 members (static display)
const programTeam = [
    { name: "Dr. Megha", position: "Associate Professor, TDU", image: faculty1 },
    { name: "Dr. Madhumitha Krishnan", position: "MD (Ayurveda)Consultant, TDU", image: faculty3 },
    { name: "Dr. Ms. Sonia Velarsan,", position: "RD Program Asst.Ayurveda Dietetics, TDU", image: faculty2 },
];

// Faculty Slider - Remaining members (sliding display)
const facultySlider = [
    { name: "Dr. Girish Kumar", position: "Assistant Professor, TDU", image: faculty4 },
    { name: "Dr. Prasan Shankar", position: "Medical Director at I-AIM-TDU", image: faculty5 },
    { name: "Dr. Sanketh Sharma", position: "Assistant Professor, TDU", image: faculty6 },
    { name: "Dr. Shridevi Gothe", position: "Assistant Professor, TDU", image: faculty7 },
    { name: "Dr. Yashaswini G", position: "Consultant, IAIM Healthcare", image: faculty8 },
    { name: "Dr. Narendra Pendse", position: "MD", image: faculty9 },
    { name: "Dr. Aswini Mohan L", position: "BAMS, MSConsultant, IAIM Healthcare", image: faculty10 },
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
        setActiveIndex((prev) => (prev + 1) % facultySlider.length);
        setTimeout(() => {
            isAnimating.current = false;
        }, 700);
    };

    const goToPrev = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setActiveIndex((prev) => (prev - 1 + facultySlider.length) % facultySlider.length);
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
                
                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px) rotate(-2deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) rotate(0deg);
                    }
                }
                
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px) rotate(2deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) rotate(0deg);
                    }
                }
                
                @keyframes slideInFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(60px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 0 25px 50px -12px rgba(255, 215, 0, 0);
                    }
                    50% {
                        box-shadow: 0 25px 50px -12px rgba(255, 215, 0, 0.15);
                    }
                }
                
                @keyframes gentleGlowPulse {
                    0%, 100% {
                        box-shadow: 
                            0 0 20px rgba(255, 215, 0, 0.08),
                            0 0 40px rgba(255, 215, 0, 0.04),
                            0 20px 40px rgba(0, 0, 0, 0.3);
                    }
                    50% {
                        box-shadow: 
                            0 0 30px rgba(255, 215, 0, 0.15),
                            0 0 60px rgba(255, 215, 0, 0.08),
                            0 25px 50px rgba(0, 0, 0, 0.4);
                    }
                }
                
                @keyframes breathingScale {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.02);
                    }
                }
                
                @keyframes subtleOpacityBreath {
                    0%, 100% {
                        opacity: 0.95;
                    }
                    50% {
                        opacity: 1;
                    }
                }
                
                @keyframes softBorderGlow {
                    0%, 100% {
                        border-color: rgba(255, 215, 0, 0.15);
                    }
                    50% {
                        border-color: rgba(255, 215, 0, 0.3);
                    }
                }
                
                @keyframes shimmerCorner {
                    0%, 100% {
                        opacity: 0.4;
                        transform: scale(0.9);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.1);
                    }
                }
                
                @keyframes rotateBadge {
                    0%, 100% {
                        transform: rotate(-2deg);
                    }
                    50% {
                        transform: rotate(2deg);
                    }
                }
                
                .program-card:nth-child(1) {
                    animation: slideInFromLeft 0.9s ease-out forwards;
                    opacity: 0;
                }
                
                .program-card:nth-child(2) {
                    animation: slideInFromBottom 0.9s ease-out forwards;
                    animation-delay: 0.15s;
                    opacity: 0;
                }
                
                .program-card:nth-child(3) {
                    animation: slideInFromRight 0.9s ease-out forwards;
                    animation-delay: 0.3s;
                    opacity: 0;
                }
                
                .program-card {
                    transition: all 0.4s ease;
                    animation: breathingScale 5s ease-in-out infinite;
                    cursor: pointer;
                }
                
                .program-card:nth-child(1) {
                    animation: slideInFromLeft 0.9s ease-out forwards, breathingScale 5s ease-in-out infinite 1s;
                }
                
                .program-card:nth-child(2) {
                    animation: slideInFromBottom 0.9s ease-out forwards, breathingScale 5s ease-in-out infinite 1.5s;
                    animation-delay: 0.15s, 0s;
                }
                
                .program-card:nth-child(3) {
                    animation: slideInFromRight 0.9s ease-out forwards, breathingScale 5s ease-in-out infinite 2s;
                    animation-delay: 0.3s, 0s;
                }
                
                .program-card:hover {
                    transform: scale(1.05);
                    filter: brightness(1.1);
                }
                
                .program-card-image {
                    position: relative;
                    transition: all 0.6s ease;
                    border: 2px solid rgba(255, 215, 0, 0.15);
                    border-radius: 1rem;
                    animation: 
                        gentleGlowPulse 4s ease-in-out infinite,
                        softBorderGlow 5s ease-in-out infinite;
                }
                
                .program-card:nth-child(1) .program-card-image {
                    animation-delay: 0s, 0s;
                }
                
                .program-card:nth-child(2) .program-card-image {
                    animation-delay: 1.3s, 1.6s;
                }
                
                .program-card:nth-child(3) .program-card-image {
                    animation-delay: 2.6s, 3.2s;
                }
                
                .program-card:hover .program-card-image {
                    border-color: rgba(255, 215, 0, 0.4);
                    box-shadow: 
                        0 0 40px rgba(255, 215, 0, 0.2),
                        0 20px 60px rgba(0, 0, 0, 0.5);
                }
                
                .program-card-image-inner {
                    animation: subtleOpacityBreath 6s ease-in-out infinite;
                }
                
                .program-card:nth-child(1) .program-card-image-inner {
                    animation-delay: 0s;
                }
                
                .program-card:nth-child(2) .program-card-image-inner {
                    animation-delay: 2s;
                }
                
                .program-card:nth-child(3) .program-card-image-inner {
                    animation-delay: 4s;
                }
                
                .program-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(20, 11, 8, 0.9) 0%,
                        transparent 50%
                    );
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: 2;
                    border-radius: 1rem;
                }
                
                .program-card:hover .program-card-overlay {
                    opacity: 1;
                }
                
                .program-badge {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(255, 215, 0, 0.2);
                    backdrop-filter: blur(8px);
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #ffd700;
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: all 0.4s ease;
                    z-index: 3;
                    border: 1px solid rgba(255, 215, 0, 0.3);
                }
                
                .program-card:hover .program-badge {
                    opacity: 1;
                    transform: translateY(0);
                    animation: rotateBadge 2s ease-in-out infinite;
                }
                
                .corner-accent {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: rgba(255, 215, 0, 0.6);
                    border-radius: 50%;
                    z-index: 4;
                    animation: shimmerCorner 3s ease-in-out infinite;
                }
                
                .corner-accent-tl {
                    top: 12px;
                    left: 12px;
                    animation-delay: 0s;
                }
                
                .corner-accent-tr {
                    top: 12px;
                    right: 12px;
                    animation-delay: 0.75s;
                }
                
                .corner-accent-bl {
                    bottom: 12px;
                    left: 12px;
                    animation-delay: 1.5s;
                }
                
                .corner-accent-br {
                    bottom: 12px;
                    right: 12px;
                    animation-delay: 2.25s;
                }

                .faculty-card-clickable {
                    cursor: pointer;
                }
            `}</style>
            <section className="relative bg-[#140b08] text-white py-20 md:py-28">
                <div className="flex flex-col items-center justify-center px-4">

                    {/* Heading */}
                    <h2 className="text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-16 md:mb-24">
                        Faculty & Course Instructors
                    </h2>

                    {/* -------------------- PROGRAM TEAM (STATIC) -------------------- */}
                    <div className="w-full max-w-6xl mb-20 md:mb-28">
                        <h3 className="text-center text-3xl md:text-4xl font-bold mb-12">
                            Program Team
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                            {programTeam.map((member, index) => (
                                <div key={index} className="flex flex-col items-center program-card">
                                    {/* Image */}
                                    <div className="program-card-image relative h-[350px] sm:h-[380px] w-full max-w-[420px] overflow-hidden rounded-2xl shadow-2xl">
                                        <div className="program-card-image-inner w-full h-full">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top"
                                                priority
                                            />
                                        </div>
                                        {/* Corner accent dots that shimmer gently */}
                                        <div className="corner-accent corner-accent-tl" />
                                        <div className="corner-accent corner-accent-tr" />
                                        <div className="corner-accent corner-accent-bl" />
                                        <div className="corner-accent corner-accent-br" />

                                        {/* Badge that appears on hover */}
                                        <div className="program-badge">
                                            Core Team
                                        </div>
                                        {/* Overlay that appears on hover */}
                                        <div className="program-card-overlay" />
                                    </div>
                                    {/* Text */}
                                    <div className="mt-6 text-center w-full">
                                        <h4 className="text-2xl sm:text-3xl font-semibold text-white line-clamp-2">
                                            {member.name}
                                        </h4>
                                        <p className="mt-2 text-base sm:text-lg text-white/70 line-clamp-3">
                                            {member.position}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* -------------------- FACULTY SLIDER -------------------- */}
                    <div className="w-full max-w-6xl mb-16 md:mb-20">
                        <h3 className="text-center text-3xl md:text-4xl font-bold mb-12">
                            Course Instructors
                        </h3>

                        {/* Card Stack Container with Navigation */}
                        <div className="relative w-full">

                            {/* Previous Button */}
                            <button
                                onClick={goToPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 cursor-pointer"
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
                                {facultySlider.map((card, index) => {
                                    const total = facultySlider.length;

                                    let offset = index - activeIndex;
                                    if (offset > total / 2) offset -= total;
                                    if (offset < -total / 2) offset += total;

                                    if (Math.abs(offset) > 1) return null;

                                    const isActive = offset === 0;

                                    return (
                                        <div
                                            key={index}
                                            className="absolute left-1/2 top-1/2 transition-all duration-700 ease-out faculty-card-clickable"
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
                                            onClick={() => {
                                                if (!isActive) {
                                                    if (offset > 0) goToNext();
                                                    else goToPrev();
                                                }
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
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 cursor-pointer"
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
                    </div>

                    {/* Description */}
                    <div className="max-w-2xl px-4">
                        <p className="text-center text-[15px] sm:text-base leading-relaxed text-white/80 font-[var(--font-merri)]">
                            All courses are taught by experienced academicians, clinicians,
                            and subject-matter experts across Ayurveda, Nutrition & Dietetics,
                            and Integrative Health Science.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}