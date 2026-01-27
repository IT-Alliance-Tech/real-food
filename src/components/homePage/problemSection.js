"use client";

import { useEffect, useRef, useState } from "react";
import { FaExclamationCircle, FaLeaf } from "react-icons/fa";

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateKey((prev) => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#2D6933" }}
    >
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div
        key={animateKey}
        className="relative max-w-6xl mx-auto px-6 text-white z-10"
      >
        {/* Header */}
        <div className="text-center mb-16 section-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/15 backdrop-blur-md border border-white/10 pill-pulse">
            <FaExclamationCircle className="text-[#F9A620]" />
            <span className="text-sm font-semibold tracking-wider">
              Why Ayurveda Dietetics?
            </span>
          </div>

          <h2 className="text-[36px] md:text-[52px] font-extrabold mb-6">
            The Problem We Address
          </h2>

          <div className="w-24 h-1.5 mx-auto rounded-full bg-[#F9A620] width-pulse" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left */}
          <div className="section-slide-left">
            <div className="card-animate bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 glow h-full flex flex-col">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Modern Nutrition</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Focuses heavily on nutrients, often{" "}
                <span className="text-[#F9A620] font-bold">
                  overlooking digestion
                </span>{" "}
                and individuality.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="section-slide-right" style={{ animationDelay: "0.15s" }}>
            <div className="card-animate bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 glow h-full flex flex-col">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <FaLeaf className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Traditional Ayurveda
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Personalized and holistic, but sometimes{" "}
                <span className="text-[#F9A620] font-bold">
                  misses modern nutrients
                </span>{" "}
                and science.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className="mt-16 text-center max-w-3xl mx-auto section-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-xl md:text-2xl italic text-white/80">
            "We need a bridge that brings the best of both worlds."
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Entry Animations - FASTER & STRONGER */
        .section-fade-up {
          opacity: 0;
          animation: fadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .section-slide-left {
          opacity: 0;
          animation: slideLeft 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .section-slide-right {
          opacity: 0;
          animation: slideRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Continuous Card Animation - FASTER & MORE DRAMATIC */
        .card-animate {
          animation: floatZoom 3.5s ease-in-out infinite;
        }

        @keyframes floatZoom {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-16px) scale(1.06);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* Glow - STRONGER & FASTER */
        .glow {
          animation: glowPulse 2.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0% { box-shadow: 0 0 0 rgba(249,166,32,0); }
          50% { box-shadow: 0 0 40px rgba(249,166,32,0.5); }
          100% { box-shadow: 0 0 0 rgba(249,166,32,0); }
        }

        /* Header Effects - FASTER & MORE PRONOUNCED */
        .pill-pulse {
          animation: pillPulse 2s ease-in-out infinite;
        }

        @keyframes pillPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        .width-pulse {
          animation: widthPulse 2s ease-in-out infinite;
        }

        @keyframes widthPulse {
          0% { width: 6rem; }
          50% { width: 9rem; }
          100% { width: 6rem; }
        }
      `}</style>
    </section>
  );
}