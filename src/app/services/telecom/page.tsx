"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const wirelessServices = [
  {
    id: 1,
    title: "E-COMM",
    description:
      "We Provide Electrical Solutions For Emergency Communication Systems, Supporting Public Safety And Response Operations. We Ensure These Critical Systems Are Reliable, Efficient, And Ready For Any Situation.",
  },
  {
    id: 2,
    title: "IN-BUILDS",
    description:
      "Comprehensive in-building wireless solutions to ensure seamless connectivity throughout your facility, eliminating dead zones and improving communication.",
  },
  {
    id: 3,
    title: "ROOFTOPS",
    description:
      "Professional rooftop antenna and equipment installation services for optimal signal coverage and network performance.",
  },
  {
    id: 4,
    title: "SMALL CELLS",
    description:
      "Small cell installation and maintenance services to enhance network capacity and coverage in high-density areas.",
  },
  {
    id: 5,
    title: "TOWER INSTALLATIONS",
    description:
      "Complete tower installation services including structural analysis, equipment mounting, and electrical systems integration.",
  },
  {
    id: 6,
    title: "WIRELESS INFRASTRUCTURE",
    description:
      "End-to-end wireless infrastructure solutions including design, installation, and maintenance of wireless communication systems.",
  },
];

const fibreServices = [
  {
    id: 7,
    title: "FIBER OPTICS",
    description:
      "Expert fiber optic cable installation, splicing, and testing services for high-speed data transmission networks.",
  },
  {
    id: 8,
    title: "INSIDE WIRING",
    description:
      "Professional inside wiring services for telecommunications, ensuring clean installations and optimal performance.",
  },
  {
    id: 9,
    title: "OUTSIDE PLANT",
    description:
      "Outside plant construction and maintenance including aerial and underground cable installations.",
  },
  {
    id: 10,
    title: "STRUCTURE CABLING",
    description:
      "Structured cabling solutions for voice, data, and video systems designed for flexibility and future scalability.",
  },
  {
    id: 11,
    title: "VOICE AND DATA CABLING",
    description:
      "Complete voice and data cabling services including Cat5e, Cat6, and Cat6a installations for reliable network connectivity.",
  },
];

export default function Telecom() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openService, setOpenService] = useState<number | null>(1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-inner/background-image .png"
            alt="Telecom Services background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 transition-all duration-[1500ms] ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className="font-rowdies text-[48px] md:text-[60px] font-normal leading-tight tracking-tight text-white mb-4">
              TELECOM SERVICES
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-[18px] text-white leading-relaxed tracking-[0.31em] mb-8">
              Connecting Communities With<br />
              Robust, Scalable Telecom<br />
              Infrastructure.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link
                href="#"
                aria-label="TikTok"
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDC052] transition-all duration-[1000ms] ease-out delay-[800ms] hover:scale-110 ${
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
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDC052] transition-all duration-[1000ms] ease-out delay-[1000ms] hover:scale-110 ${
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

        {/* Right Side Image */}
        <div
          className={`absolute top-0 right-0 bottom-0 hidden lg:block transition-all duration-[1500ms] ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <Image
            src="/service-inner/right-side-image.png"
            alt="LED Strip"
            width={600}
            height={500}
            className="object-contain h-full"
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        className="relative w-full min-h-[100vh] flex flex-col justify-center items-center py-16"
        style={{
          backgroundImage: "url('/service-inner/WELCIMEbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[85%] lg:w-[70%] mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-1">
            {/* Left Column - Wireless */}
            <div>
              <h2 className="font-rowdies text-[28px] font-normal text-white mb-6">
                WIRELESS
              </h2>
              {wirelessServices.map((service) => (
                <div key={service.id} className="mb-1">
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full py-2 flex items-center text-left group"
                  >
                    <span className="font-inter text-[14px] font-medium text-[#FDC052] tracking-wide hover:text-[#e5ac47] transition-colors flex items-center gap-2">
                      {service.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 transition-transform ${openService === service.id ? "rotate-90" : ""}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button>
                  {openService === service.id && (
                    <div className="bg-[#043E93]/[0.71] rounded-lg p-4 mb-2">
                      <p className="font-inter text-[13px] text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Fibre Optics & Copper */}
            <div>
              <h2 className="font-rowdies text-[28px] font-normal text-white mb-6">
                FIBRE OPTICS & COPPER
              </h2>
              {fibreServices.map((service) => (
                <div key={service.id} className="mb-1">
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full py-2 flex items-center text-left group"
                  >
                    <span className="font-inter text-[14px] font-medium text-[#FDC052] tracking-wide hover:text-[#e5ac47] transition-colors flex items-center gap-2">
                      {service.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 transition-transform ${openService === service.id ? "rotate-90" : ""}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button>
                  {openService === service.id && (
                    <div className="bg-[#043E93]/[0.71] rounded-lg p-4 mb-2">
                      <p className="font-inter text-[13px] text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
