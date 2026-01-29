"use client";

import { useEffect, useRef, useState } from "react";
import { FaLeaf, FaSeedling } from "react-icons/fa";
import { Bitter, Merriweather_Sans } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bitter",
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-merriweather-sans",
});

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
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[90vh] bg-white flex items-center overflow-hidden py-12 md:py-20 ${bitter.variable} ${merriweatherSans.variable}`}
    >
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 bg-orb-1" />
        <div className="absolute bottom-20 left-[5%] w-56 h-56 md:w-80 md:h-80 rounded-full blur-3xl opacity-15 bg-orb-2" />
        <div className="absolute top-[45%] right-[25%] w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-10 bg-orb-3" />

        <FaLeaf
          className="absolute top-32 left-[8%] text-4xl md:text-6xl opacity-6 float-1"
          style={{ color: "#2D6933" }}
        />
        <FaSeedling
          className="absolute top-[60%] right-[12%] text-3xl md:text-5xl opacity-6 float-2"
          style={{ color: "#2D6933" }}
        />
        <FaLeaf
          className="absolute bottom-40 left-[15%] text-2xl md:text-4xl opacity-6 float-3"
          style={{ color: "#2D6933" }}
        />
        <FaLeaf
          className="absolute top-[25%] right-[35%] text-xl md:text-3xl opacity-4 float-4"
          style={{ color: "#9ED19E" }}
        />
      </div>

      <div
        key={animateKey}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Premium Badge with enhanced animation */}
        <div className="badge-fade mb-6 md:mb-10">
          <div
            className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-500 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,105,51,0.12), rgba(158,209,158,0.18))",
              border: "1px solid rgba(45,105,51,0.35)",
            }}
          >
            <span
              className="text-sm sm:text-base md:text-xl lg:text-5xl font-semibold tracking-wide"
              style={{ color: "#2D6933", fontFamily: "var(--font-merriweather-sans)" }}
            >
              Ayurveda Dietetics Program @ TDU
            </span>
          </div>
        </div>

        {/* Enhanced heading with staggered word animation */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[60px] leading-tight font-bold text-[#181117] max-w-4xl mx-auto mb-4 md:mb-6 px-2" style={{ fontFamily: "var(--font-bitter)" }}>
          <span className="word" style={{ animationDelay: "0.1s" }}>Food</span>{" "}
          <span className="word" style={{ animationDelay: "0.15s" }}>is</span>{" "}
          <span className="word" style={{ animationDelay: "0.2s" }}>more</span>{" "}
          <span className="word" style={{ animationDelay: "0.25s" }}>than</span>{" "}
          <span className="word highlight-word" style={{ animationDelay: "0.3s" }}>calories.</span>
          <br />
          <span className="word" style={{ animationDelay: "0.4s" }}>It</span>{" "}
          <span className="word" style={{ animationDelay: "0.45s" }}>is</span>{" "}
          <span className="word" style={{ animationDelay: "0.5s" }}>personalised</span>{" "}
          <span className="word" style={{ animationDelay: "0.55s" }}>dietetics.</span>
        </h1>

        {/* Enhanced leaf separator with larger icon and pulse effect */}
        <div className="separator-wrapper">
          <span className="separator-line separator-line-left" />
          <div className="separator-leaf-container">
            <FaLeaf className="separator-icon" />
          </div>
          <span className="separator-line separator-line-right" />
        </div>

        {/* Enhanced description */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-6 fade-line">
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#181117] leading-relaxed font-medium px-4" style={{ fontFamily: "var(--font-merriweather-sans)" }}>
            Better health begins with personalising diets.
          </p>
        </div>

        {/* Enhanced CTA with shimmer effect */}
        <div className="mt-10 md:mt-14 fade-line delay-3">
          <a
            href="https://www.tdu.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden cta-button"
            style={{ backgroundColor: "#2D6933", fontFamily: "var(--font-merriweather-sans)" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 shimmer"></span>
            <span className="relative z-10">Explore Our Courses</span>
          </a>
        </div>

        {/* Enhanced styles */}
        <style>{`
          .bg-orb-1 {
            background: radial-gradient(circle, rgba(45,105,51,0.3) 0%, rgba(45,105,51,0) 70%);
            animation: float 8s ease-in-out infinite;
          }
          .bg-orb-2 {
            background: radial-gradient(circle, rgba(158,209,158,0.3) 0%, rgba(158,209,158,0) 70%);
            animation: float 10s ease-in-out infinite reverse;
          }
          .bg-orb-3 {
            background: radial-gradient(circle, rgba(45,105,51,0.2) 0%, rgba(45,105,51,0) 70%);
            animation: float 12s ease-in-out infinite 3s;
          }

          .float-1 { animation: floatLeaf 6s ease-in-out infinite; }
          .float-2 { animation: floatLeaf 8s ease-in-out infinite 2s; }
          .float-3 { animation: floatLeaf 7s ease-in-out infinite 4s; }
          .float-4 { animation: floatLeaf 9s ease-in-out infinite 1s; }

          @keyframes float {
            0%,100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
          }

          @keyframes floatLeaf {
            0%,100% { transform: translateY(0) rotate(0); }
            25% { transform: translateY(-10px) rotate(3deg); }
            50% { transform: translateY(-20px) rotate(0); }
            75% { transform: translateY(-10px) rotate(-3deg); }
          }

          .badge-fade {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            animation: fadeUpScale 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          @keyframes fadeUpScale {
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }

          .word {
            display: inline-block;
            opacity: 0;
            transform: translateY(40px);
            animation: wordUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          }

          .highlight-word {
            background: linear-gradient(120deg, transparent 50%, rgba(45,105,51,0.15) 50%);
            background-size: 220% 100%;
            background-position: 100% 0;
            animation: wordUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards,
                       highlightSlide 1.2s ease-out forwards;
            animation-delay: 0.3s, 1.2s;
            padding: 0 0.2em;
          }

          .separator-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 10px;
            opacity: 0;
            animation: fadeUp 0.8s ease-out forwards;
            animation-delay: 1s;
          }

          @media (min-width: 768px) {
            .separator-wrapper {
              gap: 20px;
            }
          }

          .separator-line {
            height: 6px;
            opacity: 0;
            transform: scaleX(0);
            animation: expandLine 0.8s ease-out forwards;
          }

          @media (min-width: 768px) {
            .separator-line {
              height: 10px;
            }
          }

          .separator-line-left {
            width: 80px;
            background: linear-gradient(to left, rgba(45,105,51,0.5), transparent);
            transform-origin: right;
            animation-delay: 1.1s;
          }

          @media (min-width: 640px) {
            .separator-line-left {
              width: 120px;
            }
          }

          @media (min-width: 768px) {
            .separator-line-left {
              width: 180px;
            }
          }

          .separator-line-right {
            width: 80px;
            background: linear-gradient(to right, rgba(45,105,51,0.5), transparent);
            transform-origin: left;
            animation-delay: 1.1s;
          }

          @media (min-width: 640px) {
            .separator-line-right {
              width: 120px;
            }
          }

          @media (min-width: 768px) {
            .separator-line-right {
              width: 180px;
            }
          }

          @keyframes expandLine {
            to { 
              opacity: 1;
              transform: scaleX(1); 
            }
          }

          .separator-leaf-container {
            position: relative;
            opacity: 0;
            transform: scale(0) rotate(-45deg);
            animation: leafPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            animation-delay: 1.3s;
          }

          .separator-icon {
            font-size: 28px;
            color: #2D6933;
            filter: drop-shadow(0 2px 4px rgba(45,105,51,0.2));
            animation: leafPulse 3s ease-in-out infinite;
            animation-delay: 2s;
          }

          @media (min-width: 640px) {
            .separator-icon {
              font-size: 36px;
            }
          }

          @media (min-width: 768px) {
            .separator-icon {
              font-size: 49px;
            }
          }

          @keyframes leafPop {
            to { 
              opacity: 1; 
              transform: scale(1) rotate(0deg); 
            }
          }

          @keyframes leafPulse {
            0%, 100% { 
              transform: scale(1); 
              filter: drop-shadow(0 2px 4px rgba(45,105,51,0.2));
            }
            50% { 
              transform: scale(1.15); 
              filter: drop-shadow(0 4px 8px rgba(45,105,51,0.3));
            }
          }

          .fade-line {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease-out forwards;
            animation-delay: 1.6s;
          }

          .delay-3 {
            animation-delay: 1.8s;
          }

          @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes wordUp {
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes highlightSlide {
            to { background-position: 0 0; }
          }

          .cta-button {
            position: relative;
            transform: translateY(0);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .cta-button:hover {
            transform: translateY(-3px);
          }

          .cta-button:active {
            transform: translateY(-1px);
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
      </div>
    </section>
  );
}