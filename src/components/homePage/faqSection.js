"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        q: "What is Ayurveda Dietetics?",
        a: "Ayurveda Dietetics is an academic discipline that integrates Ayurvedic dietary principles with modern nutrition science to guide both personalised nutrition and population-level dietary planning.",
    },
    {
        q: "Who is this program for?",
        a: (
            <ul className="list-disc pl-6 space-y-1">
                <li>Dietitians and Nutritionists</li>
                <li>Clinicians and AYUSH physicians</li>
                <li>Researchers and public-health professionals</li>
                <li>Yoga therapists</li>
                <li>Chefs and food professionals</li>
                <li>Food industry employees, regulators, and entrepreneurs</li>
            </ul>
        ),
    },
    {
        q: "How is this different from other nutrition courses?",
        a: "This program goes beyond nutrients. It gives authentic Ayurveda knowledge combined with the latest in nutrition science.",
    },
    {
        q: "Are the courses academically recognised?",
        a: "Yes. Credits are aligned with India’s National Education Policy (NEP) and hosted by TDU.",
    },
    {
        q: "What are the learning outcomes?",
        a: "Learners develop the ability to bridge Ayurveda and modern nutrition science, enabling integrative dietary planning for clinical, community, and institutional settings.",
    },
];

export default function FAQSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    /* Scroll reveal */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-16 md:py-24 bg-[#F6F4F3] overflow-hidden"
        >
            {/* floating ambient glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2D6933]/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F9A620]/10 rounded-full blur-3xl animate-float delay-float" />

            <div className="relative max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div
                    className={`text-center mb-20 ${visible ? "animate-fade-up" : "opacity-0"
                        }`}
                >
                    <span className="inline-block mb-4 px-4 py-2 rounded-full bg-[#2D6933]/10 text-[#2D6933] font-semibold text-sm">
                        Need clarity?
                    </span>

                    <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#2D6933] mb-6">
                        Frequently Asked Questions
                    </h2>

                    <div className="w-24 h-1.5 mx-auto rounded-full bg-[#F9A620]" />

                    <p className="mt-6 max-w-2xl mx-auto text-[#181117]/70 text-lg">
                        Everything you need to know about the Ayurveda Dietetics program.
                    </p>
                </div>

                {/* FAQ Cards */}
                <div className="space-y-7">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl border border-[#2D6933]/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${visible ? "animate-slide-up" : "opacity-0"
                                }`}
                            style={{ animationDelay: `${i * 0.12}s` }}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === i ? null : i)
                                }
                                className="relative w-full flex items-center justify-between p-7 text-left cursor-pointer"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-[#2D6933]">
                                    {faq.q}
                                </h3>

                                <FaChevronDown
                                    className={`text-[#2D6933] transition-transform duration-300 ${openIndex === i ? "rotate-180 bounce" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`relative px-7 overflow-hidden transition-all duration-400 ${openIndex === i
                                    ? "max-h-96 pb-7 opacity-100 translate-y-0"
                                    : "max-h-0 opacity-0 -translate-y-2"
                                    }`}
                            >
                                <div className="text-[#181117]/80 leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div
                    className={`mt-28 text-center ${visible ? "animate-fade-up delay-300" : "opacity-0"
                        }`}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2D6933] mb-6">
                        Begin Your Journey in Integrative Nutrition
                    </h3>

                    <a
                        href="https://www.tdu.edu.in/education-programs#learnforlife"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block px-8 py-4 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
                        style={{ backgroundColor: "#2D6933" }}
                    >
                        <span className="relative z-10">
                            Explore All Courses →
                        </span>

                        {/* Hover shine */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                            }}
                        />
                    </a>

                </div>
            </div>

            {/* Animations */}
            <style>{`
        .animate-fade-up {
          animation: fadeUp 0.9s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.9s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .delay-float {
          animation-delay: 6s;
        }

        .bounce {
          animation: bounce 0.4s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }

        @keyframes bounce {
          0% { transform: rotate(180deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(180deg) scale(1); }
        }
      `}</style>
        </section>
    );
}
