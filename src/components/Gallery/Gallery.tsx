"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
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
      id="gallery"
      className="relative w-full min-h-[auto] md:min-h-[80vh] bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/home-page/gallery/gallerybg.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Left Side Image - Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/home-page/gallery/leftside image.png"
          alt="Gallery Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-[auto] md:min-h-[80vh]">
        {/* Left Side - Image Collage (Desktop) */}
        <div
          className={`relative hidden lg:block lg:w-[35%] h-auto lg:h-[80vh] origin-left transition-all duration-[1200ms] ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <Image
            src="/home-page/gallery/leftside image.png"
            alt="Gallery Collage"
            width={400}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image - Overlay */}
        <div
          className={`absolute hidden lg:block left-[10%] bottom-0 pointer-events-none z-10 transition-all duration-[1200ms] ease-out delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <Image
            src="/home-page/gallery/sectioncenter image.png"
            alt="Electrician"
            width={500}
            height={580}
            className="h-[80vh] w-auto object-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[45%] lg:ml-auto flex flex-col justify-center items-center text-center px-6 md:px-8 lg:px-12 py-16 md:py-12 relative z-20">
          <h3
            className={`font-italianno text-[32px] md:text-[40px] font-normal text-[#FDC052] mb-4 transition-all duration-[1000ms] ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Gallery
          </h3>

          {/* Center Image - Mobile Only */}
          <div
            className={`lg:hidden mb-6 transition-all duration-[1200ms] ease-out delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <Image
              src="/home-page/gallery/sectioncenter image.png"
              alt="Electrician"
              width={300}
              height={350}
              className="w-auto h-[250px] md:h-[300px] object-contain"
            />
          </div>

          <h2
            className={`font-rowdies text-[22px] md:text-[28px] lg:text-[32px] font-normal text-white mb-6 transition-all duration-[1000ms] ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            YOUR BRIGHTEST CHOICE IN REPAIRS
          </h2>
          <p
            className={`font-inter text-[13px] md:text-[14px] lg:text-[16px] font-normal text-white/80 leading-relaxed max-w-md transition-all duration-[1000ms] ease-out delay-[600ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get Benefit Of Our Specific Electrical Service Discounts And Save Money!
            Take Advantage Of Great Deals That Make Keeping A Comfortable
            Home Simple And Affordable!
          </p>
        </div>
      </div>
    </section>
  );
}
