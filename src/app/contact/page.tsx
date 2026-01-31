"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:min-h-[500px] overflow-hidden pt-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contactii.png"
            alt="Contact background"
            fill
            className="object-cover object-left md:object-center"
            priority
          />
        </div>

        {/* Phone Image - Mobile Background */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/phone.png"
            alt="Phone Background"
            fill
            className="object-cover object-right opacity-20"
          />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col lg:flex-row justify-between items-start h-full px-6 md:px-16 lg:px-24 py-16 md:py-32 transition-all duration-[1500ms] ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Main Title */}
            <h1 className="font-rowdies text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-normal leading-none tracking-tight text-white mb-6 md:mb-8">
              LET'S CONNECT
            </h1>

            {/* Contact Info */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FDC052"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="tel:+17788343592"
                  className="font-inter text-[14px] sm:text-[16px] md:text-[18px] text-white hover:text-[#FDC052] transition-colors"
                >
                  +17-788343592
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FDC052"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <Link
                  href="mailto:Southdeltaelec@Gmail.Com"
                  className="font-inter text-[14px] sm:text-[16px] md:text-[18px] text-white underline hover:text-[#FDC052] transition-colors"
                >
                  Southdeltaelec@Gmail.Com
                </Link>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FDC052"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-inter text-[14px] sm:text-[16px] md:text-[18px] text-white">Canada</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="TikTok"
                className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-[#FDC052] transition-all duration-[1000ms] ease-out delay-[800ms] hover:scale-110 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-[#FDC052] transition-all duration-[1000ms] ease-out delay-[1000ms] hover:scale-110 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Get Appointment Button */}
          <div className="mt-8 lg:mt-0 lg:self-end">
            <Link
              href="#"
              className={`inline-block px-6 py-3 bg-[#FDC052] text-black font-inter text-[14px] font-medium border-none hover:bg-[#e5ac47] transition-all duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              Get Appointment
            </Link>
          </div>
        </div>

        {/* Phone Image - Desktop */}
        <div
          className={`absolute top-0 right-0 hidden lg:block transition-all duration-[1500ms] ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <Image
            src="/phone.png"
            alt="Phone"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10411973.71416498!2d-119.4179324292506!3d54.7259739570498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2s!4v1706000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Canada Map"
          className="w-full h-full"
        />
      </section>

      <Footer />
    </>
  );
}
