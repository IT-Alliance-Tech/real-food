"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar, FaUserGraduate, FaChartLine, FaAward } from "react-icons/fa";

export default function WhoLearnsWithUsSection() {
    const sectionRef = useRef(null);
    const rafRef = useRef(null);
    const hasEntered = useRef(false);

    const [count, setCount] = useState(0);
    const [dietitians, setDietitians] = useState(0);
    const [therapists, setTherapists] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const MAX_COUNT = 2053;
    const MAX_DIETITIANS = 60;
    const MAX_THERAPISTS = 40;

    /* ---------- Intersection Observer (ENTER ONCE) ---------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasEntered.current) {
                    hasEntered.current = true;
                    setIsVisible(true);
                }
            },
            { threshold: 0.35 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* ---------- Smooth Scroll-based Counter + Animations ---------- */
    useEffect(() => {
        if (!isVisible) return;

        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const visible = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
            const progress = Math.min(Math.max(visible, 0), 1);

            setScrollProgress(progress);

            const targetCount = Math.floor(progress * MAX_COUNT);
            const targetDietitians = Math.floor(progress * MAX_DIETITIANS);
            const targetTherapists = Math.floor(progress * MAX_THERAPISTS);

            cancelAnimationFrame(rafRef.current);

            const animate = () => {
                setCount((prev) =>
                    Math.abs(targetCount - prev) < 1
                        ? targetCount
                        : prev + (targetCount - prev) * 0.05
                );

                setDietitians((prev) =>
                    Math.abs(targetDietitians - prev) < 1
                        ? targetDietitians
                        : prev + (targetDietitians - prev) * 0.05
                );

                setTherapists((prev) =>
                    Math.abs(targetTherapists - prev) < 1
                        ? targetTherapists
                        : prev + (targetTherapists - prev) * 0.05
                );

                rafRef.current = requestAnimationFrame(animate);
            };

            animate();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 bg-gradient-to-br from-[#F6F4F3] via-white to-[#F6F4F3] relative overflow-hidden"
        >
            {/* Background blobs with scroll animation */}
            <div
                className="absolute top-20 left-10 w-72 h-72 bg-[#2D6933]/5 rounded-full blur-3xl transition-all duration-700"
                style={{
                    transform: `translate(${scrollProgress * 30}px, ${scrollProgress * -20}px) scale(${1 + scrollProgress * 0.3})`,
                    opacity: 0.3 + scrollProgress * 0.7
                }}
            />
            <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-[#F9A620]/5 rounded-full blur-3xl transition-all duration-700"
                style={{
                    transform: `translate(${scrollProgress * -40}px, ${scrollProgress * 30}px) scale(${1 + scrollProgress * 0.2})`,
                    opacity: 0.3 + scrollProgress * 0.7
                }}
            />

            {/* MAIN WRAPPER – SCROLL ENTRANCE */}
            <div
                className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-[1200ms] ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                    }`}
            >
                {/* Heading with parallax */}
                <div
                    className="text-center mb-16 transition-all duration-500"
                    style={{
                        transform: `translateY(${scrollProgress * -20}px)`,
                        opacity: 1 - scrollProgress * 0.3
                    }}
                >
                    <h2 className="text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] text-[#10295F] mb-6">
                        Who learns with us
                    </h2>
                    <p className="text-lg md:text-xl text-[#181117]/70 max-w-2xl mx-auto">
                        Professionals from diverse wellness backgrounds trust our learning ecosystem
                    </p>
                </div>

                {/* Main Counter Card with 3D tilt effect */}
                <div
                    className={`bg-gradient-to-br from-[#2D6933] to-[#1a4020] rounded-3xl p-10 md:p-14 mb-10 shadow-2xl relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    style={{
                        transform: `perspective(1000px) rotateX(${scrollProgress * -5}deg) translateY(${scrollProgress * 10}px)`,
                        boxShadow: `0 ${20 + scrollProgress * 30}px ${60 + scrollProgress * 40}px rgba(45, 105, 51, ${0.2 + scrollProgress * 0.3})`
                    }}
                >
                    <div
                        className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700"
                        style={{
                            transform: `translate(${50 + scrollProgress * 20}%, ${-50 + scrollProgress * 20}%) scale(${1 + scrollProgress * 0.5})`
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 transition-transform duration-700"
                        style={{
                            transform: `translate(${-50 - scrollProgress * 15}%, ${50 + scrollProgress * 15}%) scale(${1 + scrollProgress * 0.4})`
                        }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transition-all duration-500"
                                style={{
                                    transform: `rotate(${scrollProgress * 360}deg) scale(${1 + scrollProgress * 0.1})`
                                }}
                            >
                                <FaUserGraduate className="text-6xl text-white" />
                            </div>
                            <div>
                                <p className="text-[48px] md:text-[64px] font-extrabold text-white leading-none">
                                    {Math.floor(count).toLocaleString()}+
                                </p>
                                <p className="text-lg text-white/80 mt-2">
                                    Participants trained
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div
                                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center transition-all duration-500 hover:scale-110"
                                style={{
                                    transform: `translateY(${Math.sin(scrollProgress * Math.PI) * 10}px)`
                                }}
                            >
                                <FaChartLine className="text-3xl text-[#F9A620] mx-auto mb-2" />
                                <p className="text-2xl font-bold text-white">98%</p>
                                <p className="text-xs text-white/70">Success Rate</p>
                            </div>
                            <div
                                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center transition-all duration-500 hover:scale-110"
                                style={{
                                    transform: `translateY(${Math.sin((scrollProgress + 0.5) * Math.PI) * 10}px)`
                                }}
                            >
                                <FaAward className="text-3xl text-[#F9A620] mx-auto mb-2" />
                                <p className="text-2xl font-bold text-white">4.8</p>
                                <p className="text-xs text-white/70">Avg Rating</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Bars with staggered slide-in */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Dietitians */}
                    <div
                        className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#2D6933]/10 hover:border-[#2D6933]/30 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-12"
                            }`}
                        style={{
                            transitionDelay: "200ms",
                            transform: `translateX(${(1 - scrollProgress) * -30}px) scale(${0.95 + scrollProgress * 0.05})`,
                            opacity: scrollProgress
                        }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div
                                className="bg-[#2D6933]/10 p-4 rounded-xl transition-transform duration-500"
                                style={{
                                    transform: `rotate(${scrollProgress * 180}deg)`
                                }}
                            >
                                <FaStar className="text-3xl text-[#2D6933]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-xl text-[#2D6933] mb-1">
                                    Dietitians & Nutrition Professionals
                                </h3>
                                <p className="text-sm text-gray-600">Primary audience segment</p>
                            </div>
                            <p className="text-4xl font-extrabold text-[#2D6933]">
                                {Math.floor(dietitians)}%
                            </p>
                        </div>

                        <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full relative transition-all duration-700"
                                style={{ width: `${dietitians}%`, backgroundColor: "#2D6933" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
                                    style={{
                                        transform: `translateX(${scrollProgress * 200 - 100}%)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Therapists */}
                    <div
                        className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-[#10295F]/10 hover:border-[#10295F]/30 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-12"
                            }`}
                        style={{
                            transitionDelay: "400ms",
                            transform: `translateX(${(1 - scrollProgress) * 30}px) scale(${0.95 + scrollProgress * 0.05})`,
                            opacity: scrollProgress
                        }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div
                                className="bg-[#10295F]/10 p-4 rounded-xl transition-transform duration-500"
                                style={{
                                    transform: `rotate(${scrollProgress * -180}deg)`
                                }}
                            >
                                <FaStar className="text-3xl text-[#10295F]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-xl text-[#10295F] mb-1">
                                    Yoga, Ayurveda & Food Professionals
                                </h3>
                                <p className="text-sm text-gray-600">Growing community</p>
                            </div>
                            <p className="text-4xl font-extrabold text-[#10295F]">
                                {Math.floor(therapists)}%
                            </p>
                        </div>

                        <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full relative transition-all duration-700"
                                style={{ width: `${therapists}%`, backgroundColor: "#10295F" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
                                    style={{
                                        transform: `translateX(${scrollProgress * 200 - 100}%)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
        </section>
    );
}