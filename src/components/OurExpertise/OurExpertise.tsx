"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    icon: "/home-page/Our-expertise/Expert-Team-Member.png",
    number: 360,
    suffix: "+",
    label: "EXPERT TEAM MEMBER",
  },
  {
    icon: "/home-page/Our-expertise/Project.png",
    number: 800,
    suffix: "+",
    label: "PROJECT COMPLETED",
  },
  {
    icon: "/home-page/Our-expertise/HappyCustomer.png",
    number: 760,
    suffix: "+",
    label: "HAPPY CUSTOMER",
  },
  {
    icon: "/home-page/Our-expertise/Years-of-experience.png",
    number: 16,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

export default function OurExpertise() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const counts = stats.map((stat) => useCountUp(stat.number, 2000, isVisible));

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[auto] md:min-h-[70vh] py-16 bg-center bg-no-repeat overflow-visible md:overflow-hidden"
      style={{ backgroundImage: "url('/home-page/Our-expertise/backgroundexpertise.png')", backgroundSize: "100% 100%" }}
    >
      <div className="mx-auto max-w-7xl px-8 md:px-16 h-full flex flex-col justify-start md:justify-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`font-italianno text-[40px] font-normal text-[#FDC052] transition-all duration-[1000ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Expertise
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex flex-col items-center text-center px-8 md:px-12 transition-all duration-[1000ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Icon */}
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Number */}
                <p className="font-inter text-[32px] font-bold text-[#FDC052] mb-2">
                  {counts[index]}{stat.suffix}
                </p>
                {/* Label */}
                <p className="font-inter text-[14px] font-normal text-white uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
              {/* Divider */}
              {index < stats.length - 1 && (
                <div
                  className={`hidden md:block w-[1px] h-24 bg-white/30 transition-all duration-[1000ms] ease-out ${
                    isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
