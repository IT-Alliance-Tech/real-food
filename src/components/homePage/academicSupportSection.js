"use client";

import { FaUniversity, FaCheckCircle, FaHandshake } from "react-icons/fa";

export default function AcademicSupportSection() {
    return (
        <section className="relative w-full py-20 md:py-28 bg-[#2D6933] overflow-hidden">

            {/* subtle texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 text-white">

                {/* Heading */}
                <div className="text-center mb-20 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10">
                        <FaHandshake />
                        <span className="text-sm font-medium tracking-wide">
                            Partnerships
                        </span>
                    </div>

                    <h2 className="text-[36px] md:text-[50px] font-semibold mb-6">
                        Academic & Professional Support
                    </h2>

                    <div className="w-20 h-[3px] mx-auto rounded-full bg-[#F9A620] mb-8" />

                    <p className="max-w-3xl mx-auto text-lg text-white/85 leading-relaxed">
                        Our work extends beyond individual education to empower institutions,
                        enhance academic programs, and drive professional development in
                        integrative health.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Content */}
                    <div className="animate-slide-left">

                        <h3 className="text-3xl font-semibold mb-6 flex items-center gap-4">
                            <span className="text-[#F9A620] text-4xl">
                                <FaUniversity />
                            </span>
                            Consultancy & Academic Services
                        </h3>

                        <p className="text-white/85 mb-8 leading-relaxed">
                            We partner with healthcare organizations and educational bodies to
                            build robust integrative nutrition frameworks.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Institutional and clinical menu design",
                                "Curriculum and content development",
                                "Academic advisory for nutrition programs",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-4 animate-fade-up"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                >
                                    <FaCheckCircle className="text-[#F9A620] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT — Visual Accent (NO new content) */}
                    <div className="relative animate-slide-right">
                        <div className="absolute inset-0 rounded-[32px] bg-white/10 blur-xl" />
                        <div className="relative h-[280px] rounded-[32px] border border-white/20 flex items-center justify-center">
                            <FaUniversity className="text-[120px] text-white/20" />
                        </div>
                    </div>

                </div>
            </div>

            {/* animations */}
            <style>{`
                .animate-fade-up {
                  opacity: 0;
                  animation: fadeUp 0.8s ease-out forwards;
                }

                .animate-slide-left {
                  opacity: 0;
                  animation: slideLeft 0.9s ease-out forwards;
                }

                .animate-slide-right {
                  opacity: 0;
                  animation: slideRight 0.9s ease-out forwards;
                }

                @keyframes fadeUp {
                  from { opacity: 0; transform: translateY(24px); }
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
