"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay({ onFinish }) {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        // Start exit animation after 1.2s (faster transition)
        const exitTimer = setTimeout(() => {
            setHide(true);
        }, 1200);

        // Fully finish and tell parent to unmount after exit transition
        const finishTimer = setTimeout(() => {
            onFinish();
        }, 1000);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className={`intro-overlay ${hide ? "hide" : ""}`}>
            <div className="text-container">
                <h1 className="intro-text">
                    Ayurveda <span>Dietetics</span>
                </h1>
            </div>

            <style>{`
        .intro-overlay {
          position: fixed;
          inset: 0;
          background: #0d0d0d; /* Dark premium background */
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.6s ease-in-out, visibility 0.6s;
        }

        .intro-overlay.hide {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .text-container {
          overflow: hidden; /* Ensures text reveals cleanly */
        }

        .intro-text {
          font-family: var(--font-outfit), sans-serif; /* Use modern font if available, fallback to sans */
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-align: center;
          
          /* Initial State */
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          
          /* Animation */
          animation: textReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .intro-text span {
          color: #2D6933; /* Brand green */
          font-weight: 800;
          margin-left: 0.2em;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          40% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateY(0) scale(1.02); /* Subtle scale up hold */
          }
          100% {
            opacity: 0;
            transform: translateY(-10px) scale(1.05); /* Gentle exit motion */
          }
        }
      `}</style>
        </div>
    );
}
