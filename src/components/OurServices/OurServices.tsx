"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    image: "/home-page/services/service1.png",
    title: "PROJECTS",
    subtitle: "Residential & Commercial\nElectrical Projects",
  },
  {
    image: "/home-page/services/service2.png",
    title: "SERVICE & SMALL PROJECTS",
    subtitle: "Maintenance & Repairs\nSmall Scale Installations",
  },
  {
    image: "/home-page/services/service3.png",
    title: "TELECOM",
    subtitle: "Wireless And Fibre Optics\n& Copper Fiber Optics",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative w-full py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/home-page/how we are/who-we-are-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Left Background Image */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[35%] h-[90%] hidden lg:block transition-all duration-[1200ms] ease-out delay-200 ${
          isVisible ? "opacity-50 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <Image
          src="/home-page/services/leftbg.png"
          alt="Projects background"
          fill
          className="object-cover object-right"
        />
      </div>

      {/* Right Background Image */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[90%] hidden lg:block transition-all duration-[1200ms] ease-out delay-200 ${
          isVisible ? "opacity-80 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <Image
          src="/home-page/services/right bg.png"
          alt="Telecom background"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`font-italianno text-[40px] font-normal text-[#FDC052] mb-4 transition-all duration-[1000ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Services
          </h2>
          <p
            className={`font-inter text-[16px] font-normal text-white max-w-2xl mx-auto transition-all duration-[1000ms] ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Extensive Electrical Services For Home And Commercial
            Uses, Ensuring Safety, Efficiency And Reliability
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`relative w-[268px] h-[258px] rounded-2xl overflow-hidden border-2 border-gray-700 mb-4 transition-all duration-[1200ms] ease-out ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleToggle(index)}
                  className={`flex items-center justify-center gap-2 font-inter text-[18px] font-normal text-[#FDC052] hover:text-[#e5ac47] transition-all duration-[1000ms] ease-out cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  {service.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-inter text-[14px] font-normal text-[#FDC052] whitespace-pre-line">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
