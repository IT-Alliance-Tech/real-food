"use client";

import { useState, useEffect, useRef } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { year: "2020", before: 3.2, after: 7.4, n: 191 },
    { year: "2021", before: 3.5, after: 7.1, n: 129 },
    { year: "2022", before: 3.8, after: 7.6, n: 96 },
    { year: "2023", before: 4.1, after: 7.8, n: 212 },
    { year: "2024", before: 4.3, after: 8.0, n: 183 },
];

export default function KnowledgeLevelSection() {
    const sectionRef = useRef(null);
    const counterTimer = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [animatedNumber, setAnimatedNumber] = useState(0);
    const [chartKey, setChartKey] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showFirstLine, setShowFirstLine] = useState(false);
    const [showSecondLine, setShowSecondLine] = useState(false);

    /* ---------- INTERSECTION OBSERVER ---------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setChartKey((prev) => prev + 1);
                    setAnimatedNumber(0);
                    setShowFirstLine(false);
                    setShowSecondLine(false);

                    let start = 0;
                    const end = 76;
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    counterTimer.current = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setAnimatedNumber(end);
                            clearInterval(counterTimer.current);
                        } else {
                            setAnimatedNumber(Math.floor(start));
                        }
                    }, 16);
                } else {
                    clearInterval(counterTimer.current);
                    setShowFirstLine(false);
                    setShowSecondLine(false);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* ---------- SCROLL-BASED LINE REVEAL ---------- */
    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const progress = Math.min(
                Math.max(1 - rect.top / window.innerHeight, 0),
                1
            );

            setScrollProgress(progress);

            if (progress > 0.25) setShowFirstLine(true);
            if (progress > 0.55) setShowSecondLine(true);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="pt-6 pb-12 md:pt-8 md:pb-16 bg-[#F6F4F3]"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div
                    className={`text-center mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#10295F] mb-2">
                        Knowledge Level Improvement
                    </h2>
                    <p className="text-base md:text-lg text-[#181117]/70 max-w-2xl mx-auto">
                        Track the remarkable growth in participant knowledge levels before
                        and after completing our program
                    </p>
                </div>

                {/* Chart Card */}
                <div
                    className={`bg-white rounded-3xl pt-4 pb-6 px-6 md:pt-6 md:pb-8 md:px-10 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        transform: `translateY(${20 - scrollProgress * 20}px)`,
                    }}
                >
                    {/* Legend */}
                    <div className="flex justify-center gap-8 mb-6 flex-wrap">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-1 bg-[#F9A620] rounded-full" />
                            <span className="text-sm font-semibold text-[#10295F]">
                                Before Course
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-1 bg-[#2D6933] rounded-full" />
                            <span className="text-sm font-semibold text-[#10295F]">
                                After Course
                            </span>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="w-full h-[340px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart key={chartKey} data={data}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    opacity={0.2}
                                    stroke="#10295F"
                                />
                                <XAxis
                                    dataKey="year"
                                    tick={{ fill: "#10295F", fontWeight: 600 }}
                                    axisLine={{ stroke: "#10295F", strokeWidth: 2 }}
                                />
                                <YAxis
                                    domain={[0, 10]}
                                    tick={{ fill: "#10295F", fontWeight: 600 }}
                                    axisLine={{ stroke: "#10295F", strokeWidth: 2 }}
                                    label={{
                                        value: "Knowledge Level",
                                        angle: -90,
                                        position: "insideLeft",
                                        fill: "#10295F",
                                        fontWeight: 600,
                                    }}
                                />

                                {/* ✅ TOOLTIP FIXED FOR LIGHT + DARK MODE */}
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#FFFFFF",
                                        border: "1px solid #10295F",
                                        borderRadius: "12px",
                                        padding: "12px",
                                    }}
                                    wrapperStyle={{ color: "#10295F" }}
                                    formatter={(value, name) =>
                                        name === "before"
                                            ? [value, "Before Course"]
                                            : [value, "After Course"]
                                    }
                                    labelFormatter={(label) => {
                                        const item = data.find((d) => d.year === label);
                                        return `Year: ${label} | Participants: ${item?.n}`;
                                    }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="before"
                                    stroke="#F9A620"
                                    strokeWidth={4}
                                    isAnimationActive={showFirstLine}
                                    animationDuration={1200}
                                    animationEasing="ease-out"
                                />

                                <Line
                                    type="monotone"
                                    dataKey="after"
                                    stroke="#2D6933"
                                    strokeWidth={4}
                                    isAnimationActive={showSecondLine}
                                    animationDuration={1400}
                                    animationEasing="ease-out"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Counter */}
                <div
                    className={`text-center mt-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-block px-8 py-5 rounded-2xl bg-[#FFF6E5] text-[#B46900]">
                        <span className="block text-sm font-semibold mb-1 opacity-70">
                            Average Impact
                        </span>
                        <span className="text-5xl md:text-6xl font-extrabold">
                            {animatedNumber}%
                        </span>
                        <span className="block mt-1 text-base font-semibold">
                            increase in knowledge
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
