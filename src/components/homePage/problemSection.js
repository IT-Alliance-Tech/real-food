"use client";

import { useEffect, useRef, useState } from "react";
import { FaExclamationCircle, FaLeaf, FaArrowRight } from "react-icons/fa";

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
      style={{
        backgroundColor: "#2D6933",
      }}
    >
      {/* Subtle Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div key={animateKey} className="relative max-w-6xl mx-auto px-6 text-white z-10">

        {/* Header */}
        <div className="text-center mb-16 section-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/15 backdrop-blur-md border border-white/10">
            <FaExclamationCircle className="text-[#F9A620]" />
            <span className="text-sm font-semibold tracking-wider">
              Why Ayurveda Dietetics?
            </span>
          </div>

          <h2 className="text-[36px] md:text-[52px] font-extrabold leading-[1.1] mb-6">
            The Problem We Address
          </h2>

          <div className="w-24 h-1.5 mx-auto rounded-full bg-[#F9A620]" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Modern Nutrition Gap */}
          <div
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 section-slide-left hover:border-[#F9A620]/50 transition-colors duration-300 cursor-pointer group h-full flex flex-col"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Modern Nutrition
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Focuses heavily on nutrients, often <span className="text-[#F9A620] font-bold">overlooking digestion</span> and the unique individuality of the person.
            </p>
            {/* <div className="mt-auto pt-6 flex items-center gap-2 text-[#F9A620] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <span>The Gap</span> <FaArrowRight />
            </div> */}
          </div>

          {/* Right: Ayurveda Gap */}
          <div
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 section-slide-right hover:border-[#F9A620]/50 transition-colors duration-300 cursor-pointer group h-full flex flex-col"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <FaLeaf className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Traditional Ayurveda
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Offers choices to suit physiology and habitat, but sometimes <span className="text-[#F9A620] font-bold">misses out on nutrients</span> and modern scientific context.
            </p>
            {/* <div className="mt-auto pt-6 flex items-center gap-2 text-[#F9A620] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <span>The Gap</span> <FaArrowRight />
            </div> */}
          </div>

        </div>

        {/* Synthesis Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto section-fade-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/80">
            "We need a bridge that brings the best of both worlds."
          </p>
        </div>

      </div>

      {/* Animations */}
      <style>{`
                .section-fade-up {
                    opacity: 0;
                    animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .section-slide-left {
                    opacity: 0;
                    animation: slideLeft 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .section-slide-right {
                    opacity: 0;
                    animation: slideRight 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
    </section>
  );
}
