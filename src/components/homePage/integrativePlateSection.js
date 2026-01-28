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
        .fromTo(
          questionRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1 },
        )
        .to(questionRef.current, { opacity: 1, duration: 1.2 })
        .to(questionRef.current, { opacity: 0, y: -80, duration: 1 })
        .to(sectionRef.current, { backgroundColor: "#F6F4F3", duration: 0.6 })
        .fromTo(
          yesRef.current,
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 1 },
        )
        .to(yesRef.current, { opacity: 1, duration: 1.4 })
        .to(yesRef.current, { opacity: 0, scale: 1.2, duration: 1 })
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 120 },
          { opacity: 1, y: 0, duration: 1 },
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F6F4F3 0%, #FDFBFA 50%, #F6F4F3 100%)",
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
      <div
        ref={yesRef}
        className="absolute inset-0 flex justify-center text-center pt-[26vh]"
      >
        <h1
          className="text-[120px] md:text-[200px] font-black tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #2D6933 0%, #3d8f47 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 20px rgba(45, 105, 51, 0.3))",
          }}
        >
          Yes!
        </h1>
      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="relative opacity-0">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-center text-[40px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.1] text-[#10295F] mb-4">
            The Integrative Plate
          </h2>

          <p className="text-center max-w-2xl mx-auto text-lg md:text-xl mb-12 text-[#10295F]/60 font-medium">
            Same plate. Two ways of understanding food.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
                rice: "Light Carbs",
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
                fiber: "Sweet, cooling to potency",
                dal: "Sweet, Astringent, light to digest",
                rice: "Sweet, Heavy to digest",
                chapathi: "Sweet, Heavy to digest",
                curd: "Sweet, Sour, Astringent, light to digest",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PLATE CARD ---------- */
function PlateCard({
  title,
  titleColor,
  accentColor,
  gradientFrom,
  gradientTo,
  tooltips,
  borderColor,
}) {
  const activeColor = borderColor || accentColor;
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        borderColor: `${activeColor}40`,
        boxShadow: `0 15px 40px -15px ${activeColor}25`,
        duration: 1.5,
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
      className="rounded-[40px] bg-white relative group/card transition-all duration-500 border-2 max-w-[500px] w-full mx-auto overflow-hidden"
      style={{
        borderColor: `${activeColor}20`,
        boxShadow: `0 20px 60px -15px ${activeColor}30`,
      }}
    >
      {/* Subtle background texture/gradient */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Title Section */}
      <div className="flex justify-center w-full pt-8 pb-4 relative z-10">
        <h3
          className="text-3xl md:text-4xl font-black tracking-tight text-center"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h3>
      </div>

      <div className="relative h-[440px] w-full flex items-center justify-center">
        {/* THE PLATE - Styled Background */}
        <div className="absolute w-[380px] h-[380px] rounded-full flex items-center justify-center z-0">
          {/* Outer Rim */}
          <div
            className="absolute inset-0 rounded-full border-[12px] opacity-10"
            style={{ borderColor: accentColor }}
          />
          {/* Inner Plate Surface */}
          <div
            className="absolute inset-[12px] rounded-full bg-white shadow-inner"
            style={{
              boxShadow: `inset 0 0 40px ${accentColor}10`,
              border: `1px solid ${accentColor}15`,
            }}
          />
          {/* Subtle Dotted Guide */}
          <div
            className="absolute inset-[40px] rounded-full border border-dashed opacity-20"
            style={{ borderColor: accentColor }}
          />
        </div>

        {/* FOOD ITEMS ARRANGED ON PLATE */}
        <div className="relative w-full h-full z-10">
          <HoverImage
            src={Fiber}
            alt="Fiber"
            tooltip={tooltips.fiber}
            accentColor={accentColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            className="absolute top-[5%] left-[15%] w-[180px] md:w-[300px]"
          />

          <HoverImage
            src={Dal}
            alt="Dal"
            tooltip={tooltips.dal}
            accentColor={accentColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            className="absolute top-[35%] left-[0%] w-[160px] md:w-[250px]"
          />

          <HoverImage
            src={Rice}
            alt="Rice"
            tooltip={tooltips.rice}
            accentColor={accentColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            className="absolute top-[60%] left-[20%] z-20 w-[180px] md:w-[250px]"
          />

          <HoverImage
            src={Chapathi}
            alt="Chapathi"
            tooltip={tooltips.chapathi}
            accentColor={accentColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            className="absolute top-[25%] right-[0%] w-[160px] md:w-[250px]"
          />

          <HoverImage
            src={Curd}
            alt="Curd"
            tooltip={tooltips.curd}
            accentColor={accentColor}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            className="absolute bottom-[20%] right-[10%] w-[140px] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- HOVER IMAGE ---------- */
function HoverImage({
  src,
  alt,
  className,
  tooltip,
  accentColor,
  gradientFrom,
  gradientTo,
}) {
  return (
    <div
      className={`group/item absolute ${className} cursor-pointer z-10 hover:z-[60] transition-transform duration-500`}
    >
      {/* Softer glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-0 
                   group-hover/item:opacity-30 transition-all duration-700 -z-10"
        style={{
          background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
          transform: "scale(1.2)",
        }}
      />

      {/* Image */}
      <div
        className="relative transition-all duration-700 ease-out
                   group-hover/item:scale-110 group-hover/item:-translate-y-3
                   filter group-hover/item:brightness-105 group-hover/item:drop-shadow-2xl"
      >
        <Image src={src} alt={alt} className="relative z-10 w-full h-auto" />
      </div>

      {/* Tooltip */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[90%] mb-4
                   -translate-x-1/2
                   opacity-0 scale-90 translate-y-4
                   group-hover/item:opacity-100
                   group-hover/item:scale-100
                   group-hover/item:translate-y-0
                   transition-all duration-500 ease-out
                   z-50"
      >
        <div className="relative">
          {/* Arrow */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2
                       w-4 h-4 rotate-45"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }}
          />

          {/* Tooltip box */}
          <div
            className="relative text-white
                       text-[14px] md:text-[15px] leading-snug font-bold
                       px-6 py-3 rounded-2xl
                       backdrop-blur-lg border border-white/20
                       min-w-[180px] max-w-[260px]"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
              boxShadow: `0 10px 30px ${accentColor}40`,
            }}
          >
            <div className="whitespace-normal text-center relative z-10">
              {tooltip}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
