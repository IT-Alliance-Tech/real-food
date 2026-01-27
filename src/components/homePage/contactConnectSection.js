"use client";

import { useEffect, useRef, useState } from "react";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaUserTie,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

export default function ContactConnectSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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
            className="relative w-full py-16 md:py-24 bg-[#2D6933] overflow-hidden"
        >
            {/* subtle texture */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                    backgroundSize: "26px 26px",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 text-white">

                {/* Heading */}
                <div
                    className={`text-center mb-14 ${visible ? "animate-fade-up" : "opacity-0"
                        }`}
                >
                    <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/15 font-semibold text-xs tracking-wider">
                        Get in Touch
                    </span>

                    <h2 className="text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] mb-6">
                        Contact & Connect
                    </h2>

                    <div className="w-20 h-1 mx-auto rounded-full bg-[#F9A620]" />

                    <p className="mt-4 max-w-xl mx-auto text-white/85 text-base">
                        Academic enquiries, course guidance, and collaboration opportunities.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10 items-start">

                    {/* Left */}
                    <div
                        className={`space-y-5 ${visible ? "animate-slide-up" : "opacity-0"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center text-3xl">
                                <FaUserTie />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    Sonia Velarsan
                                </h3>
                                <p className="text-white/80 text-sm">
                                    Program Asst., Registered Dietitian
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-white/90">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-[#F9A620]" />
                                wellness@tdu.edu.in
                            </div>

                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-[#F9A620]" />
                                +91 79756 51724
                            </div>

                            <div className="flex items-center gap-2">
                                <FaWhatsapp className="text-[#F9A620]" />
                                WhatsApp: Anytime
                            </div>

                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-[#F9A620]" />
                                10:00 AM – 6:00 PM (Mon–Fri)
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className={`relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:shadow-xl ${visible ? "animate-slide-up delay-150" : "opacity-0"
                            }`}
                    >
                        <h4 className="text-xl font-bold mb-4">
                            Let’s Connect
                        </h4>

                        <p className="text-white/85 text-sm mb-6">
                            Reach out for personalised academic guidance or collaborations.
                        </p>

                        {/* HERO-STYLE BUTTONS */}
                        <div className="flex flex-wrap gap-4">

                            {/* Email */}
                            <a
                                href="mailto:wellness@tdu.edu.in"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
                                style={{ backgroundColor: "#F9A620" }}
                            >
                                <FaEnvelope className="relative z-10" />
                                <span className="relative z-10">Email</span>

                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)",
                                    }}
                                />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/917975651724"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-[#2D6933] transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
                                style={{ backgroundColor: "#F6F4F3" }}
                            >
                                <FaWhatsapp className="relative z-10" />
                                <span className="relative z-10">WhatsApp</span>

                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)",
                                    }}
                                />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 mt-6 border-t border-white/20 text-sm flex gap-6">
                            <a
                                href="https://instagram.com/TDUPGConnect"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 hover:text-white transition"
                            >
                                <FaInstagram />
                                @TDUPGConnect
                            </a>

                            <a
                                href="https://www.youtube.com/@TDUPGConnect/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 hover:text-white transition"
                            >
                                <FaYoutube />
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
