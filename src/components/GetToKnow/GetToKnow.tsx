"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function GetToKnow() {
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
      className="relative w-full bg-center bg-no-repeat overflow-visible"
      style={{
        backgroundImage: "url('/home-page/get-to-know/getbg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Decorative Yellow Lines - Left side of image, overflow top and bottom */}
      <div
        className={`absolute left-[58%] top-[-50px] bottom-[180px] w-[70px] bg-[#fdc0529e] z-20 origin-top transition-all duration-[1200ms] ease-out delay-200 ${
          isVisible ? "scale-y-100" : "scale-y-0"
        }`}
      ></div>
      <div
        className={`absolute left-[64%] top-[120px] bottom-[-90px] w-[90px] bg-[#fdc0529e] z-20 origin-bottom transition-all duration-[1200ms] ease-out delay-400 ${
          isVisible ? "scale-y-100" : "scale-y-0"
        }`}
      ></div>
      <div
        className={`absolute left-[73%] top-[-140px] bottom-[90px] w-[50px] bg-[#fdc0529e] z-20 origin-top transition-all duration-[1200ms] ease-out delay-[600ms] ${
          isVisible ? "scale-y-100" : "scale-y-0"
        }`}
      ></div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="w-full lg:w-[55%] py-12 px-8 lg:px-16 flex flex-col justify-center">
          {/* Title */}
          <h2
            className={`font-italianno text-[40px] font-normal text-[#FDC052] mb-2 transition-all duration-[1000ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get To Know Us
          </h2>

          {/* Subtitle */}
          <p
            className={`font-inter text-[18px] font-semibold text-white mb-4 transition-all duration-[1000ms] ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Save Money With Specials Discount Offer
          </p>

          {/* Description */}
          <p
            className={`font-inter text-[14px] font-normal text-white/80 leading-relaxed mb-8 max-w-lg transition-all duration-[1000ms] ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get Benefit Of Our Specific Electrical Service Discounts And Save Money!
            Take Advantage Of Great Deals That Make Keeping A Comfortable
            Home Simple And Affordable!
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-wrap items-center gap-8 transition-all duration-[1000ms] ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Get Appointment Button */}
            <div className="relative">
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-12 bg-[#FDC052] origin-left transition-all duration-[800ms] ease-out delay-500 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
              <p className="font-inter text-[18px] font-medium text-white relative z-10 pl-2">
                Get Appointment
              </p>
            </div>

            {/* Make A Call */}
            <div className="flex items-center ml-[33px]">
              <div className="relative">
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-12 bg-[#FDC052] origin-left transition-all duration-[800ms] ease-out delay-[600ms] ${
                    isVisible ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
                <p className="font-inter text-[12px] font-normal text-white relative z-10 pl-1">
                  Make A Call
                </p>
                <p className="font-inter text-[18px] font-semibold text-white relative z-10 pl-1">
                  +1 (778) 834-3592
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className={`w-full lg:w-[45%] relative origin-right transition-all duration-[1200ms] ease-out delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <Image
            src="/home-page/get-to-know/right.png"
            alt="Electrician at work"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
