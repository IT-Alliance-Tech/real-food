"use client";

import { useEffect, useRef, useState } from "react";

export default function IntegrativePlateSection() {
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
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#F6F4F3" }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-40 right-[8%] w-80 h-80 rounded-full opacity-[0.07] blur-3xl"
          style={{ backgroundColor: "#10295F" }}
        />
        <div
          className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full opacity-[0.07] blur-3xl"
          style={{ backgroundColor: "#2D6933" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[100px]"
          style={{ backgroundColor: "#10295F" }}
        />
      </div>

      <div key={animateKey} className="relative max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="hero-reveal flex justify-center mb-6">
          <div
            className="inline-flex items-center px-5 py-2.5 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(16, 41, 95, 0.08)",
              border: "1px solid rgba(16, 41, 95, 0.15)",
              color: "#10295F"
            }}
          >
            Dual Perspective Approach
          </div>
        </div>

        {/* Heading */}
        <h2
          className="hero-reveal text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-6"
          style={{ color: "#10295F" }}
        >
          The Integrative Plate
        </h2>

        {/* Accent line */}
        <div className="hero-reveal delay-1 flex justify-center mb-8">
          <div
            className="h-1.5 w-24 rounded-full"
            style={{ backgroundColor: "#10295F" }}
          />
        </div>

        {/* Subheading */}
        <p
          className="hero-reveal delay-1 text-center max-w-3xl mx-auto text-lg md:text-xl mb-16 md:mb-20"
          style={{ color: "rgba(16,41,95,0.7)" }}
        >
          Same plate. Two ways of understanding food.
        </p>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">

          {/* Nutrient View */}
          <div className="hero-reveal-left group">
            <div
              className="rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(16, 41, 95, 0.1)"
              }}
            >
              <div
                className="p-6"
                style={{ backgroundColor: "rgba(16, 41, 95, 0.05)" }}
              >
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#10295F" }}
                >
                  Nutrient View
                </h3>
              </div>

              <div
                className="relative h-72 flex items-center justify-center"
                style={{ backgroundColor: "#F6F4F3" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgba(16, 41, 95, 0.4)" }}
                >
                  Image Placeholder – Macros & Micronutrients
                </span>
              </div>

              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#10295F" }} />
            </div>
          </div>

          {/* Ayurvedic View */}
          <div className="hero-reveal-right group">
            <div
              className="rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(45, 105, 51, 0.15)"
              }}
            >
              <div
                className="p-6"
                style={{ backgroundColor: "rgba(45, 105, 51, 0.05)" }}
              >
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#2D6933" }}
                >
                  Ayurvedic View
                </h3>
              </div>

              <div
                className="relative h-72 flex items-center justify-center"
                style={{ backgroundColor: "#F6F4F3" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgba(45, 105, 51, 0.4)" }}
                >
                  Image Placeholder – Doshas & Properties
                </span>
              </div>

              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#2D6933" }} />
            </div>
          </div>

        </div>

        {/* Explainer */}
        <div className="hero-reveal delay-2 max-w-4xl mx-auto mb-12">
          <div
            className="p-8 md:p-10 rounded-3xl text-center backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(16, 41, 95, 0.05)",
              border: "1px solid rgba(16, 41, 95, 0.1)"
            }}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed font-medium"
              style={{ color: "#10295F" }}
            >
              Ayurveda Dietetics trains health professionals to interpret the same
              meal through multiple scientific lenses.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-reveal delay-3 text-center">
          <a
            href="https://www.tdu.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
            style={{ backgroundColor: "#2D6933" }}
          >
            <span className="relative z-10">
              Explore the Curriculum →
            </span>
          </a>
        </div>

      </div>

      <style>{`
        .hero-reveal {
          opacity: 0;
          animation: fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-reveal-left {
          opacity: 0;
          animation: slideLeft 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.3s;
        }
        .hero-reveal-right {
          opacity: 0;
          animation: slideRight 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.7s; }
        .delay-3 { animation-delay: 0.9s; }

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
      `}</style>
    </section>
  );
}
