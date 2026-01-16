"use client";

import { useEffect, useRef, useState } from "react";
import { FaFlask, FaLeaf, FaUtensils, FaImage } from "react-icons/fa";

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
      style={{
        backgroundColor: "#F6F4F3"
      }}
    >
      {/* Enhanced decorative background elements */}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[100px]"
          style={{ backgroundColor: "#10295F" }}
        />
      </div>

      <div key={animateKey} className="relative max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="hero-reveal flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(16, 41, 95, 0.08)",
              border: "1px solid rgba(16, 41, 95, 0.15)"
            }}
          >
            <FaUtensils style={{ color: "#10295F" }} />
            <span
              className="text-sm md:text-base font-medium tracking-wide"
              style={{
                color: "#10295F",
              }}
            >
              Dual Perspective Approach
            </span>
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
          style={{
            color: "rgba(16,41,95,0.7)",
          }}
        >
          Same plate. Two ways of understanding food.
        </p>

        {/* Two Views */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">

          {/* Nutrient View Card */}
          <div className="hero-reveal-left group">
            <div
              className="rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(16, 41, 95, 0.1)"
              }}
            >
              {/* Header */}
              <div className="p-6 flex items-center gap-4" style={{ backgroundColor: "rgba(16, 41, 95, 0.05)" }}>
                <div
                  className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  <FaFlask className="text-4xl" style={{ color: "#10295F" }} />
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#10295F" }}
                >
                  Nutrient View
                </h3>
              </div>

              {/* Image Placeholder */}
              <div
                className="relative h-72 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundColor: "#F6F4F3"
                }}
              >
                {/* Replace src with your actual image */}
                <img
                  src="/api/placeholder/600/400"
                  alt="Nutrient analysis of food"
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  onError={(e) => e.target.style.opacity = "0"}
                  onLoad={(e) => e.target.style.opacity = "1"}
                  style={{ transition: "opacity 0.3s" }}
                />

                {/* Fallback content */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-20 h-20 rounded-full" style={{ backgroundColor: "#10295F" }} />
                  <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full" style={{ backgroundColor: "#10295F" }} />
                </div>
                <div className="text-center z-10">
                  <FaImage className="text-6xl mx-auto mb-4 opacity-20" style={{ color: "#10295F" }} />
                  <span
                    className="text-sm font-medium block mb-1"
                    style={{
                      color: "rgba(16, 41, 95, 0.5)",
                    }}
                  >
                    Image Placeholder
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      color: "rgba(16, 41, 95, 0.3)",
                    }}
                  >
                    Macros & Micronutrients
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#10295F" }} />
            </div>
          </div>

          {/* Ayurvedic View Card */}
          <div className="hero-reveal-right group">
            <div
              className="rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(45, 105, 51, 0.15)"
              }}
            >
              {/* Header */}
              <div className="p-6 flex items-center gap-4" style={{ backgroundColor: "rgba(45, 105, 51, 0.05)" }}>
                <div
                  className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                >
                  <FaLeaf className="text-4xl" style={{ color: "#2D6933" }} />
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#2D6933" }}
                >
                  Ayurvedic View
                </h3>
              </div>

              {/* Image Placeholder */}
              <div
                className="relative h-72 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundColor: "#F6F4F3"
                }}
              >
                {/* Replace src with your actual image */}
                <img
                  src="/api/placeholder/600/400"
                  alt="Ayurvedic food properties"
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  onError={(e) => e.target.style.opacity = "0"}
                  onLoad={(e) => e.target.style.opacity = "1"}
                  style={{ transition: "opacity 0.3s" }}
                />

                {/* Fallback content */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-6 w-24 h-24 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                  <div className="absolute bottom-6 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: "#2D6933" }} />
                </div>
                <div className="text-center z-10">
                  <FaImage className="text-6xl mx-auto mb-4 opacity-20" style={{ color: "#2D6933" }} />
                  <span
                    className="text-sm font-medium block mb-1"
                    style={{
                      color: "rgba(45, 105, 51, 0.5)",
                    }}
                  >
                    Image Placeholder
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      color: "rgba(45, 105, 51, 0.3)",
                    }}
                  >
                    Doshas & Properties
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-2 w-full transition-all duration-500 group-hover:h-3" style={{ backgroundColor: "#2D6933" }} />
            </div>
          </div>

        </div>

        {/* Explainer Box */}
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
            href="#"
            className="group relative inline-block px-10 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
            style={{
              backgroundColor: "#2D6933",
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore the Curriculum
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)"
              }}
            />
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