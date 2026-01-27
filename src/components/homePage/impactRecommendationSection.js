"use client";

import { useState, useEffect, useRef } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { name: "Very likely", value: 69 },
    { name: "Likely", value: 21 },
    { name: "Possible", value: 10 },
];

const COLORS = ["#2D6933", "#F9A620", "#10295F"];

export default function ImpactRecommendationSection() {
    const sectionRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showChart, setShowChart] = useState(false);
    const [pulseActive, setPulseActive] = useState(false);

    /* ---------- INTERSECTION OBSERVER ---------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Delay chart appearance
                    setTimeout(() => setShowChart(true), 300);

                    let start = 0;
                    const end = 85;
                    const duration = 1800;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setAnimatedPercentage(end);
                            clearInterval(timer);
                            setPulseActive(true);
                        } else {
                            setAnimatedPercentage(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* ---------- SCROLL PARALLAX ---------- */
    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const progress = Math.min(
                Math.max(1 - rect.top / window.innerHeight, 0),
                1
            );
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ---------- AUTO HOVER ANIMATION ---------- */
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                if (prev === null) return 0;
                if (prev >= data.length - 1) return null;
                return prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="pt-8 pb-14 md:pt-12 md:pb-20 bg-[#F6F4F3] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div
                    className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    style={{
                        transform: `translateY(${isVisible ? 0 : 24}px) scale(${0.95 + scrollProgress * 0.05})`,
                    }}
                >
                    <h2 className="text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] text-[#10295F] mb-6">
                        Impact
                    </h2>
                    <p className="text-lg md:text-xl text-[#181117]/70 max-w-3xl mx-auto">
                        Overall likelihood of learners recommending this course
                    </p>
                </div>

                {/* Card */}
                <div
                    className={`bg-white rounded-3xl pt-8 pb-10 px-8 md:pt-10 md:pb-12 md:px-14 flex flex-col md:flex-row items-center gap-10 transition-all duration-700 shadow-lg hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    style={{
                        transform: `perspective(1000px) rotateX(${(1 - scrollProgress) * 5}deg) translateY(${(1 - scrollProgress) * 10}px)`,
                    }}
                >
                    {/* Donut Chart */}
                    <div
                        className={`relative w-full md:w-1/2 h-[320px] flex items-center justify-center transition-all duration-1000 ${showChart ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 -rotate-90"
                            }`}
                    >
                        {/* Animated Background Rings */}
                        <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#2D6933]/10 to-[#F9A620]/10 animate-pulse" />
                        <div className="absolute w-[250px] h-[250px] rounded-full bg-[#F6F4F3]" />

                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Tooltip
                                    formatter={(value, name) => [`${value}%`, name]}
                                    contentStyle={{
                                        backgroundColor: "#FFFFFF",
                                        border: "1px solid #10295F",
                                        borderRadius: "10px",
                                        fontWeight: 600,
                                    }}
                                    wrapperStyle={{ color: "#10295F" }}
                                    cursor={{ fill: "transparent" }}
                                />

                                <Pie
                                    data={data}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={activeIndex !== null ? 125 : 120}
                                    paddingAngle={3}
                                    isAnimationActive={showChart}
                                    animationDuration={1400}
                                    animationBegin={0}
                                    animationEasing="ease-out"
                                    activeIndex={activeIndex}
                                    onMouseEnter={(_, index) => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                            stroke="#FFFFFF"
                                            strokeWidth={activeIndex === index ? 5 : 2}
                                            style={{
                                                filter: activeIndex === index ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Center Text with Pulse */}
                        <div
                            className={`absolute flex flex-col items-center justify-center text-center pointer-events-none transition-all duration-500 ${pulseActive ? 'animate-pulse' : ''
                                }`}
                        >
                            <span className="text-sm font-semibold text-[#10295F]/70 mb-1">
                                Likely to recommend
                            </span>
                            <span
                                className="text-5xl md:text-6xl font-extrabold text-[#2D6933] transition-all duration-300"
                                style={{
                                    transform: activeIndex === 0 ? 'scale(1.1)' : 'scale(1)',
                                }}
                            >
                                {animatedPercentage}%
                            </span>
                        </div>

                        {/* Floating Particles */}
                        {isVisible && (
                            <>
                                <div className="absolute top-4 right-8 w-2 h-2 bg-[#2D6933] rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                                <div className="absolute bottom-8 left-4 w-2 h-2 bg-[#F9A620] rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
                                <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-[#10295F] rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                            </>
                        )}
                    </div>

                    {/* Legend + Insight */}
                    <div className="w-full md:w-1/2">
                        <ul className="space-y-4 text-lg">
                            {data.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={`flex items-center gap-4 p-4 rounded-xl bg-[#F6F4F3] transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-md ${isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-x-6"
                                        } ${activeIndex === index ? 'ring-2 ring-offset-2 scale-105 shadow-lg' : ''
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                        ringColor: COLORS[index],
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    <span
                                        className={`w-5 h-5 rounded-full transition-all duration-300 ${activeIndex === index ? 'scale-125 shadow-lg' : ''
                                            }`}
                                        style={{
                                            backgroundColor: COLORS[index],
                                            boxShadow: activeIndex === index ? `0 0 12px ${COLORS[index]}` : 'none',
                                        }}
                                    />
                                    <span className="font-semibold text-[#10295F]">
                                        {item.name}{" "}
                                        <span className="text-[#181117]/60">
                                            ({item.value}%)
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div
                            className={`mt-6 transition-all duration-700 ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "400ms" }}
                        >
                            <div className="inline-block px-7 py-4 rounded-xl bg-gradient-to-r from-[#F9A620]/15 to-[#2D6933]/10 text-[#10295F] font-semibold hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                                <span className="block text-sm uppercase tracking-wide text-[#10295F]/70 mb-1">
                                    Key Insight
                                </span>
                                <span className="text-base md:text-lg">
                                    85%+ learners are likely to recommend this course
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}