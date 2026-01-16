"use client";

import { useEffect, useRef, useState } from "react";
import { FaFlask, FaLeaf, FaArrowsAltH } from "react-icons/fa";

export default function ComparisonSection() {
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
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "#F6F4F3" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "#10295F" }}
        />
        <div
          className="absolute bottom-32 right-[15%] w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: "#2D6933" }}
        />
      </div>

      <div key={animateKey} className="relative max-w-7xl mx-auto px-6 w-full">

        {/* Label */}
        <div className="section-fade-up flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{
              backgroundColor: "rgba(16, 41, 95, 0.08)",
              border: "1px solid rgba(16, 41, 95, 0.15)"
            }}
          >
            <FaArrowsAltH style={{ color: "#10295F" }} />
            <span
              className="text-sm md:text-base font-medium"
              style={{
                color: "#10295F",
              }}
            >
              Two Perspectives
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          className="section-fade-up text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-8"
          style={{
            color: "#10295F",
          }}
        >
          Can they be combined?
        </h2>

        {/* Subheading */}
        <p
          className="section-fade-up text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 md:mb-20"
          style={{
            color: "rgba(16, 41, 95, 0.7)",
          }}
        >
          Bridging ancient wisdom with modern science for holistic nutrition
        </p>

        {/* VS Divider - Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="vs-pulse w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl"
            style={{
              backgroundColor: "#F9A620",
              color: "#FFFFFF",
            }}
          >
            VS
          </div>
        </div>

        {/* Two Views */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* Nutrient View */}
          <div className="slide-left group">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              >
                <FaFlask className="text-4xl" style={{ color: "#10295F" }} />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: "#10295F",
                }}
              >
                Nutrient View
              </h3>
            </div>

            {/* Card */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(16, 41, 95, 0.1)"
              }}
            >
              {/* Image Placeholder */}
              <div
                className="w-full h-80 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: "#F6F4F3" }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full" style={{ backgroundColor: "#10295F" }} />
                  <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full" style={{ backgroundColor: "#10295F" }} />
                </div>
                <span
                  className="text-lg font-medium z-10"
                  style={{
                    color: "rgba(16, 41, 95, 0.4)",
                  }}
                >
                  Scientific Analysis
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10295F" }} />
                    <span style={{ color: "rgba(16, 41, 95, 0.8)" }}>
                      Focuses on macros and micronutrients
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10295F" }} />
                    <span style={{ color: "rgba(16, 41, 95, 0.8)" }}>
                      Evidence-based approach
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#10295F" }} />
                    <span style={{ color: "rgba(16, 41, 95, 0.8)" }}>
                      Standardized recommendations
                    </span>
                  </li>
                </ul>
              </div>

              {/* Accent bar */}
              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#10295F" }} />
            </div>
          </div>

          {/* Ayurvedic View */}
          <div className="slide-right group">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
              >
                <FaLeaf className="text-4xl" style={{ color: "#2D6933" }} />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: "#2D6933",
                }}
              >
                Ayurvedic View
              </h3>
            </div>

            {/* Card */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(45, 105, 51, 0.15)"
              }}
            >
              {/* Image Placeholder */}
              <div
                className="w-full h-80 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: "#F6F4F3" }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 right-4 w-20 h-20 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                  <div className="absolute bottom-4 left-8 w-16 h-16 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                </div>
                <span
                  className="text-lg font-medium z-10"
                  style={{
                    color: "rgba(45, 105, 51, 0.4)",
                  }}
                >
                  Holistic Wisdom
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#2D6933" }} />
                    <span style={{ color: "rgba(45, 105, 51, 0.8)" }}>
                      Considers individual constitution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#2D6933" }} />
                    <span style={{ color: "rgba(45, 105, 51, 0.8)" }}>
                      Traditional time-tested approach
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#2D6933" }} />
                    <span style={{ color: "rgba(45, 105, 51, 0.8)" }}>
                      Personalized to body type
                    </span>
                  </li>
                </ul>
              </div>

              {/* Accent bar */}
              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#2D6933" }} />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .section-fade-up {
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .slide-left {
          opacity: 0;
          animation: slideLeft 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.3s;
        }

        .slide-right {
          opacity: 0;
          animation: slideRight 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }

        .vs-pulse {
          animation: fadeUp 1s cubic-bezier(0.22,1,0.36,1) forwards, pulse 2s ease-in-out infinite;
          animation-delay: 0.4s, 1.4s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(249, 166, 32, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(249, 166, 32, 0);
          }
        }
      `}</style>

    </section>
  );
}