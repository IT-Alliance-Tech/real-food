"use client";

import { useEffect, useRef, useState } from "react";
import { FaExclamationCircle, FaLeaf, FaSeedling } from "react-icons/fa";

export default function ProblemSection() {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const [showLabel, setShowLabel] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const createObserver = (ref, setter, threshold = 0.3) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold }
      );

      if (ref.current) observer.observe(ref.current);
    };

    createObserver(labelRef, setShowLabel, 0.6);
    createObserver(headingRef, setShowHeading, 0.4);
    createObserver(cardsRef, setShowCards, 0.25);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden py-[120px] md:py-[160px]"
      style={{ backgroundColor: "#2D6933" }}
    >
      <div className="relative max-w-6xl mx-auto px-6 md:px-8">

        {/* LABEL */}
        <div
          ref={labelRef}
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-sm
          transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${showLabel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          style={{
            backgroundColor: "rgba(249, 166, 32, 0.15)",
            border: "1px solid rgba(249, 166, 32, 0.3)"
          }}
        >
          <FaExclamationCircle className="text-lg" style={{ color: "#F9A620" }} />
          <p
            className="text-sm md:text-base font-medium tracking-wide"
            style={{ color: "#F9A620", fontFamily: "'Merriweather Sans', sans-serif" }}
          >
            Why Ayurveda Dietetics?
          </p>
        </div>

        {/* HEADING */}
        <div ref={headingRef} className="mt-10 md:mt-12 flex items-start gap-6">
          <FaLeaf
            className={`hidden md:block text-5xl mt-2 transition-all duration-[1000ms]
            ${showHeading ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 -rotate-45"}`}
            style={{ color: "#9ED19E" }}
          />

          <div>
            <h2
              className={`text-[42px] md:text-[72px] lg:text-[80px] leading-[1.05] font-extrabold
              transition-all duration-[1000ms]
              ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
              style={{ color: "#FFFFFF", fontFamily: "'Bitter', serif" }}
            >
              The problem we address.
            </h2>

            <div
              className={`mt-6 h-1.5 rounded-full transition-all duration-[800ms]
              ${showHeading ? "w-32 opacity-100" : "w-0 opacity-0"}`}
              style={{ backgroundColor: "#F9A620" }}
            />
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={cardsRef}
          className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <div
            className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-[900ms]
            ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)"
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#F9A620" }}>
              Modern Nutrition Gap
            </h3>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>
              Modern nutrition focuses on nutrients, overlooking digestion and individuality.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-[900ms] delay-150
            ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{
              backgroundColor: "rgba(158,209,158,0.12)",
              border: "1px solid rgba(158,209,158,0.25)"
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#9ED19E" }}>
              Ayurvedic Wisdom
            </h3>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>
              Ayurveda offers food choices to suit an individual's physiology and habitat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
