"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function WhoWeAre() {
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
    <section ref={sectionRef} className="relative w-full bg-[#0a1628] py-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/home-page/how we are/who-we-are-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <div
              className={`relative transition-all duration-[1200ms] ease-out origin-left ${
                isVisible
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0"
              }`}
            >
              <Image
                src="/home-page/how we are/whowe-mage.png"
                alt="Electricians at work"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center">
            {/* Title */}
            <h2
              className={`font-italianno text-[40px] font-normal text-[#FDC052] mb-6 transition-all duration-[1000ms] ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Who We Are
            </h2>

            {/* Description */}
            <p
              className={`font-inter text-[16px] font-normal text-white leading-relaxed mb-8 transition-all duration-[1000ms] ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Welcome To South Delta Electrical Company, A Canada-Based Business With 8 Years
              Of Experience. We Provide Expert Residential And Commercial Services, Including
              Installation, LED Conversions, Ceiling Fan Installations, And More. Trust Us For All
              Your Electrical Needs!
            </p>

            {/* Button */}
            <Link
              href="#"
              className={`inline-block bg-[#FDC052] px-8 py-3 font-inter text-[16px] font-normal text-black rounded hover:bg-[#e5ac47] transition-all duration-[1000ms] ease-out delay-[600ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
