"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const welcomeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWelcomeVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const whyChooseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyChooseVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (welcomeRef.current) {
      welcomeObserver.observe(welcomeRef.current);
    }
    if (whyChooseRef.current) {
      whyChooseObserver.observe(whyChooseRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        welcomeObserver.unobserve(welcomeRef.current);
      }
      if (whyChooseRef.current) {
        whyChooseObserver.unobserve(whyChooseRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home-page/about-us/herosectionbg.png"
            alt="About us background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Background Overlay Image */}
        <div
          className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/home-page/about-us/herosection-overlayimage.png"
            alt="Overlay"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 py-8 transition-all duration-[1500ms] ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className="font-rowdies text-[60px] font-normal leading-none tracking-tight text-white">
              GET TO KNOW US
            </h1>

            {/* Tagline */}
            <div className="mt-4">
              <p className="font-inter text-[18px] text-white/90 tracking-[0.31em]">
                We Are Certified Company
              </p>
              <p className="font-italianno text-[88px] text-white leading-none -mt-2 ml-[280px]">
                Since 1997
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <Link
                href="#"
                aria-label="TikTok"
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDC052] transition-all duration-[1000ms] ease-out delay-[1200ms] hover:scale-110 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-6 w-6"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDC052] transition-all duration-[1000ms] ease-out delay-[1400ms] hover:scale-110 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-6 w-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Why Choose Us - Combined Section with Background */}
      <section
        className="relative bg-no-repeat bg-cover -mt-[200px] pt-[200px]"
        style={{
          backgroundImage: "url('/home-page/about-us/Group 55.png')",
          backgroundPosition: "right top",
        }}
      >
        {/* Left Side - Content */}
        <div className="w-full lg:w-[55%]">
          {/* Welcome Section */}
          <div ref={welcomeRef} className="py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-xl">
              {/* Title */}
              <h2
                className={`font-inter text-[17px] font-normal text-white transition-all duration-[1000ms] ease-out ${
                  isWelcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                WELCOME TO{" "}
                <span className="text-[#FDC052] font-normal">SOUTH DELTA</span>
              </h2>
              <h3
                className={`font-inter text-[24px] font-normal text-[#FDC052] mb-4 transition-all duration-[1000ms] ease-out delay-100 ${
                  isWelcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                ELECTRICAL COMPANY <span className="text-white">IN CANADA</span>
              </h3>

              {/* Description */}
              <p
                className={`font-inter text-[14px] font-normal text-white leading-relaxed mb-6 transition-all duration-[1000ms] ease-out delay-200 ${
                  isWelcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Welcome To South Delta Electrical Company, Your Dependable Electrical
                Professionals In Canada. With A Focus On Quality And Safety, We Offer
                A Wide Range Of Electrical Services To Residential, Commercial, And
                Industrial Customers.
              </p>

              <p
                className={`font-inter text-[14px] font-normal text-white leading-relaxed transition-all duration-[1000ms] ease-out delay-300 ${
                  isWelcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our Team Of Skilled Professionals Is Dedicated To Providing Dependable
                Solutions That Are Suited To Your Needs. We Ensure Efficient And
                Cost-Effective Solutions For All Installations, Repairs, And
                Maintenance. South Delta Electrical Company Offers Great Service And
                Peace Of Mind—Your Satisfaction Is Our First Priority.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div ref={whyChooseRef} className="py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-xl">
              {/* Title */}
              <h2
                className={`font-italianno text-[40px] font-normal text-[#0a1628] mb-6 transition-all duration-[1000ms] ease-out ${
                  isWhyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Why Should You Choose Us ?
              </h2>

              {/* Description */}
              <p
                className={`font-inter text-[14px] font-normal text-[#0a1628]/80 leading-relaxed mb-4 transition-all duration-[1000ms] ease-out delay-100 ${
                  isWhyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Choose Us For Our Expert Electrician Who Deliver Reliable, High-Quality
                Service That Meets Your Specifications. We Put Security First And Use
                Modern Technology To Deliver Electrical Services.
              </p>

              <p
                className={`font-inter text-[14px] font-normal text-[#0a1628]/80 leading-relaxed mb-8 transition-all duration-[1000ms] ease-out delay-200 ${
                  isWhyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our Accessible Pricing Reduces Surprises, And Our Dedication To
                Customer Satisfaction Ensures That You Will Always Be Satisfied With
                The Results. Trust Us With Any Of Your Electrical Services
              </p>

              {/* Feature Points */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-[1000ms] ease-out delay-300 ${
                  isWhyChooseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#0a1628] font-bold">&gt;</span>
                  <p className="font-inter text-[13px] font-medium text-[#0a1628]">
                    Make Smart Financial Decisions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0a1628] font-bold">&gt;</span>
                  <p className="font-inter text-[13px] font-medium text-[#0a1628]">
                    Years Of Expertise In Electrical Work
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0a1628] font-bold">&gt;</span>
                  <p className="font-inter text-[13px] font-medium text-[#0a1628]">
                    Fully License, Insurance And Bonds
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0a1628] font-bold">&gt;</span>
                  <p className="font-inter text-[13px] font-medium text-[#0a1628]">
                    Happy Customers, Happy Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
