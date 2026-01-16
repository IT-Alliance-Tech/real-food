"use client";

import {
    FaUniversity,
    FaChalkboardTeacher,
    FaCheckCircle,
    FaHandshake,
} from "react-icons/fa";

export default function AcademicSupportSection() {
    return (
        <section className="relative w-full py-20 md:py-28 bg-[#2D6933] overflow-hidden">

            {/* subtle green texture */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                    backgroundSize: "26px 26px",
                }}
            />

            {/* soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />

            <div className="relative max-w-6xl mx-auto px-6 text-white">

                {/* Heading */}
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/15">
                        <FaHandshake />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                            Partnerships
                        </span>
                    </div>

                    <h2 className="text-[34px] md:text-[48px] font-extrabold mb-6">
                        Academic & Professional Support
                    </h2>

                    <div className="w-24 h-1.5 mx-auto rounded-full bg-[#F9A620] mb-8" />

                    <p className="max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
                        Our work extends beyond individual education to empower institutions,
                        enhance academic programs, and drive professional development in
                        integrative health.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Consultancy */}
                    <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:border-[#F9A620]/60 animate-slide-up">

                        {/* hover glow */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                            style={{ boxShadow: "0 0 0 1px rgba(249,166,32,.5), 0 30px 60px rgba(0,0,0,.25)" }}
                        />

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <FaUniversity />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Consultancy & Academic Services
                                </h3>
                            </div>

                            <p className="text-white/85 mb-6">
                                We partner with healthcare organizations and educational bodies to
                                build robust integrative nutrition frameworks.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Institutional and clinical menu design",
                                    "Curriculum and content development",
                                    "Academic advisory for nutrition programs",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <FaCheckCircle className="text-[#FFD166] mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Faculty */}
                    <div
                        className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:border-[#F9A620]/60 animate-slide-up"
                        style={{ animationDelay: "0.15s" }}
                    >
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                            style={{ boxShadow: "0 0 0 1px rgba(249,166,32,.5), 0 30px 60px rgba(0,0,0,.25)" }}
                        />

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                                    <FaChalkboardTeacher />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Faculty & Course Instructors
                                </h3>
                            </div>

                            <p className="text-white/85 mb-6">
                                Learn directly from seasoned academicians and clinicians who are
                                pioneers in their respective fields.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Ayurveda Dietetics & Medicine",
                                    "Modern Clinical Nutrition",
                                    "Integrative Health Sciences",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <FaCheckCircle className="text-[#FFD166] mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* animations */}
            <style>{`
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
        }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 1s ease-out forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
