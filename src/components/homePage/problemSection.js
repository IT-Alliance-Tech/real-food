"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa";

export default function AcademicSupportSection() {
  const sectionRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateKey((prev) => prev + 1);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #245F3A 0%, #2D6933 50%, #3A7F4B 100%)",
      }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div key={animateKey} className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 section-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mx-auto bg-white/15">
            <FaHandshake className="text-white" />
            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              Partnerships
            </span>
          </div>

          <h2
            className="text-[34px] md:text-[52px] font-extrabold mb-6 text-white"
            style={{ fontFamily: "'Bitter', serif" }}
          >
            Academic & Professional Support
          </h2>

          <div className="w-24 h-1.5 mx-auto rounded-full bg-[#F9A620] mb-8" />

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            Our work extends beyond individual education to empower institutions,
            strengthen academic frameworks, and advance integrative health practice.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Consultancy */}
          <div
            className="group rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 border border-white/15 bg-white/10 backdrop-blur-md section-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-white/20 text-white">
                <FaUniversity />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Bitter', serif" }}
              >
                Consultancy & <br /> Academic Services
              </h3>
            </div>

            <p className="text-white/85 mb-8 leading-relaxed text-lg">
              We collaborate with healthcare organizations and academic
              institutions to design and guide integrative nutrition programs.
            </p>

            <ul className="space-y-4">
              {[
                "Institutional and clinical menu design",
                "Curriculum and content development",
                "Academic advisory for nutrition programs",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <FaCheckCircle className="mt-1 text-[#FFD166]" />
                  <span className="text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Faculty */}
          <div
            className="group rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 border border-white/15 bg-white/10 backdrop-blur-md section-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-white/20 text-white">
                <FaChalkboardTeacher />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Bitter', serif" }}
              >
                Faculty & <br /> Course Instructors
              </h3>
            </div>

            <p className="text-white/85 mb-8 leading-relaxed text-lg">
              Learn directly from experienced academicians and clinicians who
              combine theoretical depth with real-world expertise.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Ayurveda Dietetics & Medicine",
                "Modern Clinical Nutrition",
                "Integrative Health Sciences",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <FaCheckCircle className="mt-1 text-[#FFD166]" />
                  <span className="text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm font-semibold text-white/70 italic">
                * Detailed instructor profiles available on course pages
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>{`
        .section-fade-up {
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .section-slide-up {
          opacity: 0;
          animation: slideUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
