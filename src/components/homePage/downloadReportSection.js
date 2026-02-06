"use client";

import { useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";

export default function DownloadReportSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-16 md:py-20 bg-[#F6F4F3] overflow-hidden"
        >
            {/* Subtle decorative background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #2D6933 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                {/* Heading */}
                <div
                    className={`mb-8 ${visible ? "animate-fade-up" : "opacity-0"}`}
                >
                    <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#2D6933]/10 font-semibold text-xs tracking-wider text-[#2D6933]">
                        Resource
                    </span>

                    <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] text-[#181117] mb-4">
                        Ayurvedic Dietetics Report
                    </h2>

                    <div className="w-16 h-1 mx-auto rounded-full bg-[#F9A620]" />

                    <p className="mt-4 max-w-xl mx-auto text-[#181117]/75 text-base md:text-lg">
                        Download the comprehensive report on Ayurveda Dietetics to explore the integration of traditional wisdom with modern nutrition science.
                    </p>
                </div>

                {/* Download Button */}
                <div
                    className={`${visible ? "animate-slide-up" : "opacity-0"}`}
                >
                    <a
                        href="/Ayurveda Dietetics_Report (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm md:text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
                        style={{ backgroundColor: "#2D6933" }}
                    >
                        <FaFileDownload className="relative z-10 text-lg" />
                        <span className="relative z-10">Download Report</span>

                        {/* Hover shimmer effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 shimmer" />

                        {/* Hover gradient overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)",
                            }}
                        />
                    </a>
                </div>
            </div>

            {/* Animations */}
            <style>{`
                .animate-fade-up {
                    animation: fadeUp 0.8s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slideUp 0.8s ease-out forwards;
                    animation-delay: 0.2s;
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .shimmer {
                    transform: translateX(-100%);
                }
                .group:hover .shimmer {
                    animation: shimmerSlide 1.5s ease-in-out infinite;
                }
                @keyframes shimmerSlide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </section>
    );
}
