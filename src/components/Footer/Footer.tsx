"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/footer/footerbg.png"
          alt="Footer background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Form (30%) */}
          <div
            className={`w-full lg:w-[30%] transition-all duration-[1000ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-italianno text-[40px] font-normal text-[#FDC052] mb-8">
              Request A Free Quote
            </h2>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-500 pb-3 text-white placeholder-gray-400 font-inter text-[16px] font-normal focus:outline-none focus:border-[#FDC052]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-gray-500 pb-3 text-white placeholder-gray-400 font-inter text-[16px] font-normal focus:outline-none focus:border-[#FDC052]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-gray-500 pb-3 text-white placeholder-gray-400 font-inter text-[16px] font-normal focus:outline-none focus:border-[#FDC052]"
                />
              </div>
              <div>
                <select className="w-full bg-transparent border-b border-gray-500 pb-3 text-gray-400 font-inter text-[16px] font-normal focus:outline-none focus:border-[#FDC052] cursor-pointer">
                  <option value="" className="bg-gray-800">Service Type</option>
                  <option value="commercial" className="bg-gray-800">Commercial Services</option>
                  <option value="residential" className="bg-gray-800">Residential Services</option>
                  <option value="installation" className="bg-gray-800">Installation</option>
                  <option value="led" className="bg-gray-800">LED Conversion</option>
                  <option value="ceiling-fans" className="bg-gray-800">Ceiling Fans</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 bg-[#FDC052] px-8 py-3 font-inter text-[16px] font-normal text-black hover:bg-[#e5ac47] transition-colors"
              >
                Submit Appointment
              </button>
            </form>
          </div>

          {/* Right Side - Links (70%) */}
          <div className="w-full lg:w-[70%]">
            {/* Logo */}
            <div
              className={`mb-8 transition-all duration-[1000ms] ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Image
                src="/logo-south.png"
                alt="South Delta Logo"
                width={150}
                height={150}
                className="w-auto h-24"
              />
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Our Links */}
              <div
                className={`transition-all duration-[1000ms] ease-out delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="font-inter text-[25px] font-normal text-white mb-4">
                  OUR LINKS
                </h3>
                <ul className="space-y-2">
                  {["Home", "About Us", "Services", "Gallery", "Contact Us", "FAQs"].map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="font-inter text-[16px] font-normal text-gray-300 hover:text-[#FDC052] transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div
                className={`transition-all duration-[1000ms] ease-out delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="font-inter text-[25px] font-normal text-white mb-4">
                  OUR SERVICES
                </h3>
                <ul className="space-y-2">
                  {[
                    "Commercial Services",
                    "Residential Services",
                    "Installation",
                    "LED Conversion",
                    "Ceiling Fans",
                    "Switches",
                    "Retrofit Services",
                  ].map((service) => (
                    <li key={service}>
                      <Link
                        href="#"
                        className="font-inter text-[16px] font-normal text-gray-300 hover:text-[#FDC052] transition-colors"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div
                className={`transition-all duration-[1000ms] ease-out delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="font-inter text-[25px] font-normal text-white mb-4">
                  CONTACT US
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDC052]"></span>
                    <span className="font-inter text-[16px] font-normal text-gray-300">
                      Canada
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDC052]"></span>
                    <Link
                      href="tel:+17788343592"
                      className="font-inter text-[16px] font-normal text-gray-300 hover:text-[#FDC052] transition-colors underline"
                    >
                      +1 (778) 834-3592
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDC052]"></span>
                    <Link
                      href="tel:+16046573316"
                      className="font-inter text-[16px] font-normal text-gray-300 hover:text-[#FDC052] transition-colors underline"
                    >
                      +1 (604) 657-3316
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDC052]"></span>
                    <Link
                      href="mailto:Southdeltaelec@Gmail.Com"
                      className="font-inter text-[16px] font-normal text-gray-300 hover:text-[#FDC052] transition-colors underline"
                    >
                      Southdeltaelec@Gmail.Com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 transition-all duration-[1000ms] ease-out delay-[600ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-inter text-[12px] md:text-[13px] font-normal text-white text-center w-full">
            Copyright 2026. All Rights Reserved || Design & Development By Altiorainfotech
          </p>
        </div>
      </div>
    </footer>
  );
}
