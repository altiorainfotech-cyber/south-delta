"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    image: "/home-page/testimonial/client-image.png",
    text: "I Recently Had Ceiling Fans Installed In My Home In Coquitlam By South Delta Electrical, And I'm Very Impressed With Their Work. The Electricians Were Punctual, Professional, And Left Everything Clean. Excellent Service From Start To Finish!",
    rating: 5,
  },
  {
    image: "/home-page/testimonial/client-image.png",
    text: "South Delta Electrical provided exceptional service for our commercial building. Their team was knowledgeable, efficient, and completed the project on time. Highly recommend their services!",
    rating: 5,
  },
  {
    image: "/home-page/testimonial/client-image.png",
    text: "Great experience with South Delta Electrical! They helped us with our home renovation electrical work. Very professional and fair pricing. Will definitely use them again.",
    rating: 5,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Intersection Observer for scroll animation
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

  // Autoplay and loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-top bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/home-page/testimonial/Rectangle 13.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div
          className={`w-full lg:w-[55%] pt-8 pb-4 px-8 lg:px-16 flex flex-col justify-center origin-left transition-all duration-[1200ms] ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          {/* Title */}
          <h2 className="font-italianno text-[40px] font-normal text-[#FDC052] mb-8 ml-[15%]">
            Our Client's Vision
          </h2>

          {/* Slider Content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {/* Client Info */}
                  <div className="flex items-center gap-6 mb-6">
                    {/* Client Image */}
                    <div className="relative w-[100px] h-[100px] rounded-full border-4 border-white overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#FDC052] text-2xl">★</span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-inter text-[14px] font-normal text-white leading-relaxed max-w-lg text-center">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-start gap-2 mt-6 ml-[30%]">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Bulb Image */}
        <div
          className={`w-full lg:w-[45%] origin-bottom-right transition-all duration-[1200ms] ease-out delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <Image
            src="/home-page/testimonial/right-sidebulb.png"
            alt="Light Bulb"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
