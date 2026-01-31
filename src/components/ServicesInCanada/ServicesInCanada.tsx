"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ServicesInCanada() {
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
        threshold: 0.2,
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-left bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/services/servicesbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left Side - Map */}
        <div
          className={`w-full lg:w-[55%] px-4 md:px-0 transition-all duration-[1200ms] ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <Image
            src="/services/map.png"
            alt="Canada Map"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center text-center px-6 md:px-8 lg:px-16 py-8 md:py-12">
          <h2
            className={`font-italianno text-[32px] md:text-[36px] lg:text-[40px] font-normal text-[#FDC052] mb-4 transition-all duration-[1000ms] ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Services In Canada
          </h2>
          <p
            className={`font-inter text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-white leading-relaxed max-w-sm md:max-w-md transition-all duration-[1000ms] ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Your Brightest Choice In Repairs Your Brightest
            <span className="hidden md:inline"><br /></span>
            <span className="md:hidden"> </span>
            Choice In Repairs
          </p>
        </div>
      </div>
    </section>
  );
}
