"use client";

import { useEffect, useRef, useState } from "react";

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
      {/* Decorative background */}
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
            className="inline-flex items-center px-5 py-2.5 rounded-full"
            style={{
              backgroundColor: "rgba(16, 41, 95, 0.08)",
              border: "1px solid rgba(16, 41, 95, 0.15)"
            }}
          >
            <span
              className="text-sm md:text-base font-medium"
              style={{ color: "#10295F" }}
            >
              Two Perspectives
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="section-fade-up text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-8"
          style={{ color: "#10295F" }}
        >
          Can they be combined?
        </h2>

        {/* Subheading */}
        <p
          className="section-fade-up text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 md:mb-20"
          style={{ color: "rgba(16, 41, 95, 0.7)" }}
        >
          Bridging ancient wisdom with modern science for holistic nutrition
        </p>

        {/* VS Circle */}
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* Nutrient View */}
          <div className="slide-left group">
            <div className="mb-6 text-center md:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#10295F" }}
              >
                Nutrient View
              </h3>
            </div>

            <div
              className="rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(16, 41, 95, 0.1)"
              }}
            >
              <div
                className="w-full h-80 flex items-center justify-center relative"
                style={{ backgroundColor: "#F6F4F3" }}
              >
                <span
                  className="text-lg font-medium"
                  style={{ color: "rgba(16, 41, 95, 0.4)" }}
                >
                  Scientific Analysis
                </span>
              </div>

              <div className="p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: "#10295F" }} />
                    <span style={{ color: "rgba(16, 41, 95, 0.8)" }}>
                      Focuses on macros and micronutrients
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: "#10295F" }} />
                    <span style={{ color: "rgba(16, 41, 95, 0.8)" }}>
                      Evidence-based approach
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: "#10295F" }} />
                    <span style={{ color: "rgba(16, 41, 95, 0.8)" }}>
                      Standardized recommendations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#10295F" }} />
            </div>
          </div>

          {/* Ayurvedic View */}
          <div className="slide-right group">
            <div className="mb-6 text-center md:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#2D6933" }}
              >
                Ayurvedic View
              </h3>
            </div>

            <div
              className="rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(45, 105, 51, 0.15)"
              }}
            >
              <div
                className="w-full h-80 flex items-center justify-center relative"
                style={{ backgroundColor: "#F6F4F3" }}
              >
                <span
                  className="text-lg font-medium"
                  style={{ color: "rgba(45, 105, 51, 0.4)" }}
                >
                  Holistic Wisdom
                </span>
              </div>

              <div className="p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                    <span style={{ color: "rgba(45, 105, 51, 0.8)" }}>
                      Considers individual constitution
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                    <span style={{ color: "rgba(45, 105, 51, 0.8)" }}>
                      Traditional time-tested approach
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                    <span style={{ color: "rgba(45, 105, 51, 0.8)" }}>
                      Personalized to body type
                    </span>
                  </li>
                </ul>
              </div>

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
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
