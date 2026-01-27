"use client";

import { useState, useEffect } from "react";

export default function FloatingWhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleClick = () => {
        const whatsappNumber = "917975651724";
        const url = `https://wa.me/${whatsappNumber}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 group cursor-pointer"
            aria-label="Ask a query on WhatsApp"
        >
            {/* Main button */}
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Glowing background effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />

                {/* Icon */}
                <div className="relative">
                    <svg
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 13h-2v-2h2v2zm0-4h-2V6h2v5z" />
                    </svg>
                    {/* Notification dot */}
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Text */}
                <span className="font-semibold text-base whitespace-nowrap">
                    Ask a Query
                </span>

                {/* Arrow icon */}
                <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'w-5 opacity-100 ml-1' : 'w-0 opacity-0'}`}>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </button>
    );
}