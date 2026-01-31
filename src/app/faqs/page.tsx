"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const faqData = [
  {
    id: 1,
    question: "What types of electrical services do you offer?",
    answer:
      "We Provide A Wide Range Of Electrical Services, Including Installations, Repairs, Maintenance, LED Conversions, Panel Upgrades, Ceiling Fan Installations, And More For Both Residential And Commercial Properties.",
  },
  {
    id: 2,
    question: "Do you offer emergency electrical services?",
    answer:
      "Yes, we offer 24/7 emergency electrical services. Our team is always ready to respond to urgent electrical issues to ensure your safety and minimize any inconvenience.",
  },
  {
    id: 3,
    question: "What areas do you serve?",
    answer:
      "We serve the South Delta region and surrounding areas in Canada. Contact us to confirm if we service your specific location.",
  },
];

export default function FAQs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/faq/bgimage.png"
            alt="FAQ background"
            fill
            className="object-cover object-left md:object-center"
            priority
          />
        </div>

        {/* Bulb Image - Mobile Background */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/faq/bulb-image-right-side.png"
            alt="Light bulb Background"
            fill
            className="object-cover object-right opacity-20"
          />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col h-full px-6 md:px-16 lg:px-24 pt-[120px] md:pt-[180px] pb-12 md:pb-16 transition-all duration-[1500ms] ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top Content */}
          <div className="max-w-2xl mb-6 md:mb-8">
            {/* Main Title */}
            <h1 className="font-rowdies text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-normal leading-tight tracking-tight text-white mb-4 md:mb-6">
              FREQUENTLY ASKING
              <br />
              ANY QUESTIONS
            </h1>

            {/* Description */}
            <p className="font-inter text-[14px] sm:text-[16px] md:text-[18px] text-white leading-relaxed max-w-xl mb-6 md:mb-8">
              Do You Have Questions Regarding Our Electrical Services? To Ensure Your Safety And
              Satisfaction, We Are Available To Help With Any Questions You May Have About
              Installations Or Repairs.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8 md:mb-[150px]">
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

          {/* FAQ Accordion */}
          <div
            className={`w-full max-w-xl bg-[#043E93] rounded-lg p-4 md:p-6 transition-all duration-[1500ms] ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {faqData.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-3 md:py-4 flex items-center justify-between text-left"
                >
                  <span className="font-inter text-[14px] md:text-[16px] font-medium text-[#FDC052]">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="text-[#FDC052] text-xl md:text-2xl ml-4">
                    {openFaq === faq.id ? "−" : "+"}
                  </span>
                </button>
                {openFaq === faq.id && (
                  <div className="pb-3 md:pb-4">
                    <p className="font-inter text-[13px] md:text-[14px] text-white/80 leading-relaxed pl-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Bulb Image - Desktop */}
        <div
          className={`absolute top-0 -right-20 bottom-0 hidden lg:block transition-all duration-[1500ms] ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <Image
            src="/faq/bulb-image-right-side.png"
            alt="Light bulb"
            width={700}
            height={900}
            className="object-contain h-full"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
