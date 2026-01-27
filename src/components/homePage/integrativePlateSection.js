"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

/* ---------- SVG IMPORTS ---------- */
import Rice from "../../../public/plates/rice.svg";
import Chapathi from "../../../public/plates/chapathi.svg";
import Dal from "../../../public/plates/dal.svg";
import Fiber from "../../../public/plates/fiber.svg";
import Curd from "../../../public/plates/curd.svg";

gsap.registerPlugin(ScrollTrigger);

export default function IntegrativePlateScrollSection() {
  const sectionRef = useRef(null);
  const questionRef = useRef(null);
  const yesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=340%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(sectionRef.current, { backgroundColor: "#000000", duration: 0.6 })
        .fromTo(questionRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1 })
        .to(questionRef.current, { opacity: 1, duration: 1.2 })
        .to(questionRef.current, { opacity: 0, y: -80, duration: 1 })
        .to(sectionRef.current, { backgroundColor: "#F6F4F3", duration: 0.6 })
        .fromTo(yesRef.current, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1 })
        .to(yesRef.current, { opacity: 1, duration: 1.4 })
        .to(yesRef.current, { opacity: 0, scale: 1.2, duration: 1 })
        .fromTo(contentRef.current, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F6F4F3 0%, #FDFBFA 50%, #F6F4F3 100%)"
      }}
    >
      {/* QUESTION */}
      <div
        ref={questionRef}
        className="absolute inset-0 flex justify-center text-center pt-[40vh] bg-black"
      >
        <h2 className="text-[48px] md:text-[72px] font-black tracking-tight text-white drop-shadow-2xl">
          Can they be combined?
        </h2>
      </div>



      {/* YES */}
      <div ref={yesRef} className="absolute inset-0 flex justify-center text-center pt-[26vh]">
        <h1
          className="text-[120px] md:text-[200px] font-black tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #2D6933 0%, #3d8f47 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 20px rgba(45, 105, 51, 0.3))"
          }}
        >
          Yes!
        </h1>
      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="relative opacity-0">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-center text-[48px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.05] text-[#10295F] mb-6">
            The Integrative Plate
          </h2>

          <p className="text-center max-w-3xl mx-auto text-xl md:text-2xl mb-24 text-[#10295F]/60 font-medium">
            Same plate. Two ways of understanding food.
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <PlateCard
              title="Nutrient View"
              titleColor="#10295F"
              accentColor="#10295F"
              borderColor="#3B82F6"
              gradientFrom="#10295F"
              gradientTo="#1a3d7f"
              tooltips={{
                fiber: "Fiber",
                dal: "Protein",
                rice: "Carbohydrates",
                chapathi: "Complex Carbs",
                curd: "Dairy – Calcium",
              }}
            />

            <PlateCard
              title="Ayurvedic View"
              titleColor="#2D6933"
              accentColor="#2D6933"
              borderColor="#22C55E"
              gradientFrom="#2D6933"
              gradientTo="#3d8f47"
              tooltips={{
                fiber: "Madhura (Sweet), Sheeta (Cooling)",
                dal: "Madhura, Kashaya, Laghu",
                rice: "Madhura, Guru",
                chapathi: "Madhura (Sweet), Guru (Heavy)",
                curd: "Amla (Sour), Laghu (Light)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PLATE CARD ---------- */
function PlateCard({ title, titleColor, accentColor, gradientFrom, gradientTo, tooltips, borderColor }) {
  const activeColor = borderColor || accentColor;
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        borderColor: `${activeColor}50`, // Fade border to lower opacity
        boxShadow: `0 10px 30px -10px ${activeColor}30`, // Reduce shadow intensity
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, cardRef);

    return () => ctx.revert();
  }, [activeColor]);

  return (
    <div
      ref={cardRef}
      className="rounded-[32px] bg-white relative group/card transition-all duration-500 border-4 max-w-[460px] w-full mx-auto"
      style={{
        borderColor: activeColor,
        boxShadow: `0 25px 50px -12px ${activeColor}66` // Stronger shadow: more opacity, larger blur
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[28px]"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}06 0%, transparent 65%)`,
        }}
      />

      {/* Border glow effect */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${accentColor}15`,
        }}
      />

      {/* Title with gradient */}
      <div className="flex justify-center w-full pt-8 pb-2 relative z-10">
        <h3
          className="text-3xl font-black tracking-tight text-center"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          {title}
        </h3>
      </div>

      <div className="relative h-[480px] w-full overflow-visible">
        {/* Circular Dotted Connector */}
        <div
          className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[50%] rounded-[100%] border-[2.5px] border-dotted pointer-events-none opacity-50"
          style={{ borderColor: accentColor }}
        />

        <HoverImage
          src={Fiber}
          alt="Fiber"
          tooltip={tooltips.fiber}
          accentColor={accentColor}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[280px]"
        />

        <HoverImage
          src={Dal}
          alt="Dal"
          tooltip={tooltips.dal}
          accentColor={accentColor}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          className="absolute top-[33%] -left-[13%] w-[260px]"
        />

        <HoverImage
          src={Rice}
          alt="Rice"
          tooltip={tooltips.rice}
          accentColor={accentColor}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          className="absolute top-[55%] left-1/2 -translate-x-1/2 z-10 w-[260px]"
        />

        <HoverImage
          src={Chapathi}
          alt="Chapathi"
          tooltip={tooltips.chapathi}
          accentColor={accentColor}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          className="absolute top-[35%] -right-[10%] w-[230px]"
        />

        <HoverImage
          src={Curd}
          alt="Curd"
          tooltip={tooltips.curd}
          accentColor={accentColor}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          className="absolute bottom-[1%] right-[0%] w-[210px]"
        />
      </div>
    </div>
  );
}

/* ---------- HOVER IMAGE ---------- */
function HoverImage({ src, alt, className, tooltip, accentColor, gradientFrom, gradientTo }) {
  return (
    <div className={`group/item absolute ${className} cursor-pointer z-10 hover:z-[60]`}>
      {/* Softer glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-0 
                   group-hover/item:opacity-25 transition-all duration-700 -z-10"
        style={{
          background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)`,
          transform: "scale(0.8)"
        }}
      />

      {/* Image */}
      <div
        className="relative transition-all duration-700 ease-out
                   group-hover/item:scale-110 group-hover/item:-translate-y-2
                   filter group-hover/item:brightness-105 group-hover/item:drop-shadow-xl"
      >
        <Image src={src} alt={alt} className="relative z-10" />
      </div>

      {/* Tooltip */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-full mb-5
                   -translate-x-1/2
                   opacity-0 scale-95 translate-y-3
                   group-hover/item:opacity-100
                   group-hover/item:scale-100
                   group-hover/item:translate-y-0
                   transition-all duration-500 ease-out
                   z-50"
      >
        <div className="relative">
          {/* Arrow */}
          <div
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2
                       w-5 h-5 rotate-45"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
            }}
          />

          {/* Tooltip box (calmer) */}
          <div
            className="relative text-white
                       text-[15px] leading-[1.65] font-semibold
                       px-7 py-4 rounded-2xl
                       backdrop-blur-md border border-white/25
                       w-[280px] min-h-[60px]"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
              boxShadow: `0 14px 40px ${accentColor}45, 0 0 0 1px ${accentColor}15`,
            }}
          >
            <div className="whitespace-normal text-center relative z-10">
              {tooltip}
            </div>

            {/* Subtle inner glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)"
              }}
            />

            {/* Shine */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r
                           from-transparent via-white/18 to-transparent
                           -translate-x-full group-hover/item:translate-x-full
                           transition-transform duration-1200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
