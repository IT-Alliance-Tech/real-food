"use client";

import { useEffect, useRef, useState } from "react";
import { FaLeaf, FaSeedling } from "react-icons/fa";

export default function HeroSection() {
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
      { threshold: 0.35 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] bg-white flex items-center overflow-hidden py-12 md:py-20"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-20 bg-orb-1" />
        <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full blur-3xl opacity-15 bg-orb-2" />

        <FaLeaf
          className="absolute top-32 left-[8%] text-5xl opacity-5 float-1"
          style={{ color: "#2D6933" }}
        />
        <FaSeedling
          className="absolute top-[60%] right-[12%] text-4xl opacity-5 float-2"
          style={{ color: "#2D6933" }}
        />
        <FaLeaf
          className="absolute bottom-40 left-[15%] text-3xl opacity-5 float-3"
          style={{ color: "#2D6933" }}
        />
      </div>

      <div
        key={animateKey}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        {/* Premium Badge */}
        <div className="badge-fade mb-10">
          <div
            className="inline-flex items-center px-8 py-3 rounded-full shadow-lg backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,105,51,0.12), rgba(158,209,158,0.18))",
              border: "1px solid rgba(45,105,51,0.35)",
            }}
          >
            <span
              className="text-xl md:text-5xl font-semibold tracking-wide"
              style={{ color: "#2D6933" }}
            >
              Ayurveda Diabetics Program @ TDU
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[44px] md:text-[60px] lg:text-[65px] leading-tight font-extrabold text-[#181117] max-w-4xl mx-auto mb-4">
          <span className="word">Food</span> <span className="word">is</span>{" "}
          <span className="word">more</span> <span className="word">than</span>
          <br />
          <span className="word">just</span>{" "}
          <span className="word highlight-word">calories.</span>
        </h1>

        {/* Accent line */}
        <div className="flex justify-center mt-6 accent-line">
          <div
            className="h-1 w-20 rounded-full"
            style={{ backgroundColor: "#2D6933" }}
          />
        </div>

        {/* Description */}
        <div className="mt-12 flex flex-col items-center gap-6 fade-line">
          <div className="icon-bounce">
            <FaLeaf className="text-5xl" style={{ color: "#2D6933" }} />
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#181117] leading-relaxed font-medium">
            Better health begins with personalising diets.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 fade-line delay-3">
          <a
            href="https://www.tdu.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
            style={{ backgroundColor: "#2D6933" }}
          >
            <span className="relative z-10">Explore Our Courses</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
          </a>
        </div>

        {/* Animations */}
        <style>{`
          .bg-orb-1 {
            background: radial-gradient(circle, rgba(45,105,51,0.3) 0%, rgba(45,105,51,0) 70%);
            animation: float 8s ease-in-out infinite;
          }
          .bg-orb-2 {
            background: radial-gradient(circle, rgba(158,209,158,0.3) 0%, rgba(158,209,158,0) 70%);
            animation: float 10s ease-in-out infinite reverse;
          }

          .float-1 { animation: floatLeaf 6s ease-in-out infinite; }
          .float-2 { animation: floatLeaf 8s ease-in-out infinite 2s; }
          .float-3 { animation: floatLeaf 7s ease-in-out infinite 4s; }

          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }

          @keyframes floatLeaf {
            0%,100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          .badge-fade {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease-out forwards;
          }

          .word {
            display: inline-block;
            opacity: 0;
            transform: translateY(40px);
            animation: wordUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          }

          .word:nth-child(1) { animation-delay: 0.15s; }
          .word:nth-child(2) { animation-delay: 0.25s; }
          .word:nth-child(3) { animation-delay: 0.35s; }
          .word:nth-child(4) { animation-delay: 0.45s; }
          .word:nth-child(5) { animation-delay: 0.55s; }
          .word:nth-child(6) { animation-delay: 0.65s; }

          .highlight-word {
            background: linear-gradient(120deg, transparent 50%, rgba(45,105,51,0.15) 50%);
            background-size: 220% 100%;
            background-position: 100% 0;
            animation: wordUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards,
                       highlightSlide 1.2s ease-out forwards;
            animation-delay: 0.65s, 1.2s;
            padding: 0 0.2em;
          }

          @keyframes highlightSlide {
            to { background-position: 0 0; }
          }

          .accent-line {
            opacity: 0;
            transform: scaleX(0);
            animation: lineGrow 0.7s ease-out forwards;
            animation-delay: 0.8s;
          }

          .fade-line {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeUp 0.8s ease-out forwards;
            animation-delay: 1s;
          }

          .delay-3 { animation-delay: 1.2s; }

          .icon-bounce {
            animation: fadeUp 0.8s ease-out forwards, iconBounce 2s ease-in-out infinite;
            animation-delay: 1s, 2s;
          }

          @keyframes wordUp {
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes iconBounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          @keyframes lineGrow {
            to { opacity: 1; transform: scaleX(1); }
          }
        `}</style>
      </div>
    </section>
  );
}
