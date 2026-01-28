"use client";

import { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaBookOpen, FaUserMd, FaLaptop, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export default function CoursesSection() {
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

  const courses = [
    {
      icon: <FaBookOpen />,
      title: "Introduction to Ayurveda Dietetics",
      description: "A foundational course introducing Ayurvedic principles of food, digestion, and personalised nutrition.",
      url: "https://www.tdu.edu.in/courses/introduction-to-ayurveda-dietetics",
      color: "#10295F",
      delay: "0.3s"
    },
    {
      icon: <FaGraduationCap />,
      title: "Advanced Ayurveda Dietetics",
      description: "Deepens understanding of therapeutic diets, clinical application, and integrative approaches.",
      url: "https://www.tdu.edu.in/courses/advanced-ayurveda-dietetics",
      color: "#2D6933",
      delay: "0.5s"
    },
    {
      icon: <FaUserMd />,
      title: "Internship in Ayurveda Dietetics",
      description: "Hands-on training with real-world exposure under expert guidance in Ayurveda dietetics.",
      url: "https://www.tdu.edu.in/courses/internship-in-ayurveda-dietetics",
      color: "#10295F",
      delay: "0.7s"
    },
    {
      icon: <FaLaptop />,
      title: "Applied Nutrition Science",
      description: "An online program bridging modern nutrition science with applied, evidence-based practice.",
      url: "https://www.tdu.edu.in/courses/applied-nutrition-science-online",
      color: "#2D6933",
      delay: "0.9s"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundColor: "#F6F4F3"
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[5%] w-72 h-72 rounded-full opacity-[0.04] blur-3xl"
          style={{ backgroundColor: "#2D6933" }}
        />
        <div
          className="absolute bottom-32 right-[8%] w-96 h-96 rounded-full opacity-[0.04] blur-3xl"
          style={{ backgroundColor: "#10295F" }}
        />
      </div>

      <div key={animateKey} className="relative max-w-7xl mx-auto px-6">

        {/* Label */}
        <div className="section-fade-up flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(45, 105, 51, 0.08)",
              border: "1px solid rgba(45, 105, 51, 0.15)"
            }}
          >
            <FaGraduationCap style={{ color: "#2D6933" }} />
            <span
              className="text-sm md:text-base font-medium tracking-wide"
              style={{
                color: "#2D6933",
              }}
            >
              Our Offerings
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="section-fade-up text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-6"
          style={{ color: "#10295F" }}
        >
          Courses
        </h2>

        {/* Accent line */}
        <div className="section-fade-up delay-1 flex justify-center mb-8">
          <div
            className="h-1.5 w-24 rounded-full"
            style={{ backgroundColor: "#2D6933" }}
          />
        </div>

        {/* Subtext */}
        <p
          className="section-fade-up delay-1 text-center max-w-3xl mx-auto text-lg md:text-xl mb-20"
          style={{
            color: "rgba(16,41,95,0.7)",
          }}
        >
          All courses and learning materials are hosted on the official TDU platform for a seamless learning experience.
        </p>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="course-card group cursor-pointer"
              style={{ animationDelay: course.delay }}
            >
              {/* Card Header with Icon */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    color: course.color
                  }}
                >
                  <span className="text-4xl">{course.icon}</span>
                </div>

                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider"
                  style={{
                    backgroundColor: `${course.color}10`,
                    color: course.color
                  }}
                >
                  <span>Hosted on TDU</span>
                  <FaExternalLinkAlt className="text-[10px] opacity-60" />
                </div>
              </div>

              {/* Course Title */}
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                style={{
                  color: "#10295F",
                }}
              >
                {course.title}
              </h3>

              {/* Description */}
              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{
                  color: "rgba(16,41,95,0.7)",
                }}
              >
                {course.description}
              </p>

              {/* Bottom Section */}
              <div className="flex items-center justify-between pt-4 border-t-2" style={{ borderColor: `${course.color}15` }}>
                <span
                  className="text-sm font-semibold tracking-wide uppercase flex items-center gap-2"
                  style={{ color: course.color }}
                >
                  View Course
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-2" />
                </span>

                {/* Decorative accent */}
                <div
                  className="w-12 h-1 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: course.color }}
                />
              </div>

              {/* Hover overlay effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${course.color}03 0%, ${course.color}08 100%)`
                }}
              />
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="section-fade-up delay-4 text-center mt-16">
          <p
            className="text-base md:text-lg mb-6"
            style={{
              color: "rgba(16,41,95,0.6)",
            }}
          >
            Ready to begin your journey in Ayurveda Dietetics?
          </p>
          <a
            href="https://www.tdu.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
            style={{ backgroundColor: "#2D6933" }}
          >
            <span className="relative z-10">
              Explore All Programs
            </span>

            {/* optional icon */}
            <FaExternalLinkAlt className="relative z-10 text-sm" />

            {/* hover shine */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
          </a>

        </div>

      </div>

      <style>{`
        .section-fade-up {
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 1.1s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .course-card {
          position: relative;
          background: #ffffff;
          padding: 32px;
          border-radius: 20px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          border: 2px solid rgba(16, 41, 95, 0.1);
          /* Enhanced shadow for better differentiation */
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.08),
            0 8px 24px rgba(16, 41, 95, 0.12),
            0 16px 48px rgba(16, 41, 95, 0.06);
          overflow: hidden;
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .course-card:hover {
          transform: translateY(-12px);
          /* More pronounced shadow on hover */
          box-shadow: 
            0 12px 24px rgba(0, 0, 0, 0.12),
            0 20px 40px rgba(16, 41, 95, 0.18),
            0 32px 64px rgba(16, 41, 95, 0.1);
          border-color: rgba(16, 41, 95, 0.2);
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #10295F 0%, #2D6933 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .course-card:hover::before {
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          .course-card {
            padding: 24px;
            /* Adjust shadow for mobile */
            box-shadow: 
              0 4px 10px rgba(0, 0, 0, 0.08),
              0 6px 20px rgba(16, 41, 95, 0.1);
          }
        }
      `}</style>
    </section>
  );
}