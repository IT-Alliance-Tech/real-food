"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar, FaUserGraduate } from "react-icons/fa";

export default function WhoLearnsWithUsSection() {
    const sectionRef = useRef(null);

    const [count, setCount] = useState(0);
    const [dietitians, setDietitians] = useState(0);
    const [therapists, setTherapists] = useState(0);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");

    const MAX_COUNT = 2053;
    const MAX_DIETITIANS = 60;
    const MAX_THERAPISTS = 40;

    /* ---------- Scroll-based Counter ---------- */
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // how much section is visible (0 → 1)
            const visible =
                1 -
                Math.min(
                    Math.max(rect.top / windowHeight, 0),
                    1
                );

            const progress = Math.min(Math.max(visible, 0), 1);

            setCount(Math.floor(progress * MAX_COUNT));
            setDietitians(Math.floor(progress * MAX_DIETITIANS));
            setTherapists(Math.floor(progress * MAX_THERAPISTS));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F6F4F3]"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2
                        className="text-[34px] md:text-[48px] font-extrabold"
                        style={{ color: "#10295F" }}
                    >
                        Who learns with us
                    </h2>
                    <p className="mt-3 text-[#181117]/80 max-w-xl mx-auto">
                        Professionals from diverse wellness backgrounds trust our learning ecosystem
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-14 items-start">

                    {/* LEFT — COUNTERS */}
                    <div>
                        {/* Participants */}
                        <div className="flex items-center gap-5 mb-10">
                            <div className="flex items-center justify-center">
                                <FaUserGraduate className="text-5xl text-[#2D6933]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold text-[#2D6933]">
                                    {count.toLocaleString()}+
                                </p>
                                <p className="text-sm text-gray-600">
                                    participants trained
                                </p>
                            </div>
                        </div>

                        {/* Dietitians */}
                        <div className="mb-6 p-6 rounded-2xl bg-white shadow-sm border">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-[#2D6933]">
                                    Dietitians & Nutrition Professionals
                                </span>
                                <span className="text-xl font-bold text-[#2D6933]">
                                    {dietitians}%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full"
                                    style={{
                                        width: `${dietitians}%`,
                                        backgroundColor: "#2D6933",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Therapists */}
                        <div className="p-6 rounded-2xl bg-white shadow-sm border">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-[#10295F]">
                                    Yoga, Ayurveda & Food Professionals
                                </span>
                                <span className="text-xl font-bold text-[#10295F]">
                                    {therapists}%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full"
                                    style={{
                                        width: `${therapists}%`,
                                        backgroundColor: "#10295F",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — RATING CARD */}
                    <div className="bg-white rounded-3xl p-8 shadow-md border">
                        <h3
                            className="text-2xl font-bold mb-6"
                            style={{ color: "#10295F" }}
                        >
                            Rate this page
                        </h3>

                        {/* Visual Indicator */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className="text-2xl"
                                        style={{
                                            color: star <= rating ? "#F9A620" : "rgba(16, 41, 95, 0.15)",
                                        }}
                                    />
                                ))}
                                <span className="text-sm text-[#181117]/80">
                                    {rating ? `${rating} / 5` : "Not rated"}
                                </span>
                            </div>

                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full transition-all duration-300"
                                    style={{
                                        width: rating ? `${(rating / 5) * 100}%` : "0%",
                                        backgroundColor: "#F9A620",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Click Stars */}
                        <div className="flex gap-3 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className="text-4xl cursor-pointer transition-transform hover:scale-125"
                                    style={{
                                        color: star <= (hover || rating) ? "#F9A620" : "rgba(16, 41, 95, 0.15)",
                                    }}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => setRating(star)}
                                />
                            ))}
                        </div>

                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Share your learning experience…"
                            rows={4}
                            className="w-full p-4 rounded-xl border mb-5 resize-none focus:outline-none text-[#181117]"
                            style={{ borderColor: "#2D6933" }}
                        />

                        <button
                            className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] cursor-pointer"
                            style={{ backgroundColor: "#2D6933" }}
                        >
                            Submit Review
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
