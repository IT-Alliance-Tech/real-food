"use client";

import { useState, useEffect } from "react";
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

// STRICT TDU BRAND COLORS
const COLORS = ["#2D6933", "#F9A620", "#10295F"];

export default function ImpactRecommendationSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        setIsVisible(true);

        let start = 0;
        const end = 85;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setAnimatedPercentage(end);
                clearInterval(timer);
            } else {
                setAnimatedPercentage(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-[#F6F4F3]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div
                    className={`text-center mb-4 transition-all duration-700 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#10295F] mb-2">
                        Impact
                    </h2>
                    <p className="text-base md:text-lg text-[#181117]/70 max-w-2xl mx-auto">
                        Overall likelihood of learners recommending this course
                    </p>
                </div>

                {/* Card */}
                <div
                    className={`bg-white rounded-3xl pt-4 pb-6 px-6 md:pt-6 md:pb-10 md:px-10 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                        }`}
                >

                    {/* Donut Chart */}
                    <div className="relative w-full md:w-1/2 h-[280px] flex items-center justify-center">
                        <div className="absolute w-[220px] h-[220px] rounded-full bg-[#F6F4F3]" />

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
                                    cursor={{ fill: "transparent" }}
                                />

                                <Pie
                                    data={data}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={105}
                                    paddingAngle={3}
                                    activeIndex={activeIndex}
                                    onMouseEnter={(_, index) =>
                                        setActiveIndex(index)
                                    }
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                            stroke="#FFFFFF"
                                            strokeWidth={
                                                activeIndex === index ? 4 : 2
                                            }
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Center Text */}
                        <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none">
                            <span className="text-xs font-semibold text-[#10295F]/70">
                                Likely to recommend
                            </span>
                            <span className="text-4xl md:text-5xl font-extrabold text-[#2D6933]">
                                {animatedPercentage}%
                            </span>
                        </div>
                    </div>

                    {/* Legend + Insight */}
                    <div className="w-full md:w-1/2">
                        <ul className="space-y-4 text-base">
                            {data.map((item, index) => (
                                <li
                                    key={item.name}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4F3]"
                                >
                                    <span
                                        className="w-4 h-4 rounded-full"
                                        style={{
                                            backgroundColor: COLORS[index],
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

                        <div className="mt-6">
                            <div className="inline-block px-6 py-3 rounded-xl bg-[#F9A620]/15 text-[#10295F] font-semibold">
                                <span className="block text-xs uppercase tracking-wide text-[#10295F]/70 mb-1">
                                    Key Insight
                                </span>
                                <span className="text-sm md:text-base">
                                    85%+ learners are likely to recommend this
                                    course
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
