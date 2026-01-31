"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const servicesData = [
  {
    id: 1,
    title: "COMMERCIAL",
    description:
      "Our skilled team supports the planning, execution, and upgrading of commercial projects while maintaining exceptional quality and service standards.\n\nAs a trusted electrical contractor in Vancouver, we combine proven techniques with forward-thinking solutions to deliver reliable results.",
  },
  {
    id: 2,
    title: "DATA CENTER AND UPS SYSTEMS",
    description:
      "Data centres play a critical role in today’s industry, and our dedicated project managers bring specialized expertise to these complex environments. This work demands careful coordination and precise execution, and our team is highly experienced with the processes and infrastructure these projects require.\n\nWe’ve long been a leading choice in Vancouver for data centre design and installations. Due to the sensitive nature of our clients and the information involved, we’re limited in what we can disclose—what happens in the data centre stays in the data centre.",
  },
  {
    id: 3,
    title: "DESIGN ASSIST",
    description:
      "We deliver the experience and reliability you can count on, backed by strong partnerships with engineers and manufacturers across the Greater Vancouver Area.\n\nOur expertise in design and installation enables us to project timelines accurately, maintain clear communication, and work collaboratively toward shared project goals.",
  },
  {
    id: 4,
    title: "HOSPITAL AND HEALTHCARE",
    description:
      "Healthcare facilities demand a high level of technical expertise, and our project managers prioritize this specialized work. We handle renovations and installations with meticulous attention to infection control protocols, CSA Z32 equipotential grounding, and full compliance with hospital codes and standards.\n\nOur experience includes dental clinics, physiotherapy practices, medical offices, operating rooms, care facilities, retirement homes, medical imaging upgrades (CT, X-ray, MRI), emergency power systems, nurse call systems, and fire alarm installations.",
  },
  {
    id: 5,
    title: "INDUSTRIAL",
    description:
      "We bring extensive industrial experience both as a sub-trade electrical contractor and as a prime contractor, delivering projects ranging from new builds to complex facility upgrades.\n\nOur deep understanding of electrical systems, regulatory compliance, and strict safety standards ensures reliable execution while protecting all workers and visitors on site.",
  },
  {
    id: 6,
    title: "INSTITUTIONAL",
    description:
      "Institutional projects present unique challenges, including upgrades to facilities that may be occupied by long-term residents. Our specialized staff hold the required security clearances to operate in high-risk and highly confidential environments.\n\nWe respect the grounds, the people, and strict safety procedures while ensuring institutional projects are completed efficiently and to the highest standards.",
  },
  {
    id: 7,
    title: "RESIDENTIAL & MULTI-USE HIGH-RISES",
    description:
      "We are recognized as leaders in residential and multi-use high-rise electrical projects throughout the Lower Mainland, backed by one of the most experienced contractor teams in the region.\n\nCommitted to the highest safety standards, we aim to exceed codes and specifications while delivering projects on time and within budget.",
  },
  {
    id: 8,
    title: "SERVICE DISTRIBUTION",
    description:
      "Service distribution is a critical part of your energy foundation, regardless of project size. Our professional team works closely with you to design and implement optimal distribution solutions.\n\nProject scopes may include temporary power, decommissioning, new cabling, bussing, terminations, equipment upgrades, permits, seismic requirements, record drawings, and maintenance manuals—ensuring long-term system reliability.",
  },
  {
    id: 9,
    title: "SMALL-TO-LARGE TENANT IMPROVEMENTS",
    description:
      "We offer a wide range of commercial and residential tenant improvement services, supporting projects of all sizes across Vancouver.\n\nFrom new tenant build-outs to upgrades for existing spaces, our centrally located team ensures efficient execution and successful project outcomes.",
  },
  {
    id: 10,
    title: "SUBSTATIONS",
    description:
      "Substations are essential components of generation, transmission, and distribution systems, requiring specialized expertise and precision.\n\nWith extensive experience across numerous projects, we confidently deliver these complex installations while continuing to set industry standards.",
  },
  {
    id: 11,
    title: "TRANSIT INFRASTRUCTURE AND UPGRADES",
    description:
      "Transit infrastructure demands exceptional reliability, tight timelines, and minimal downtime. Our teams are experienced in coordinating with multiple contractors and stakeholders.\n\nThis specialized work requires adaptability, precision, and highly skilled professionals—qualities our teams consistently deliver.",
  },
];


export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openService, setOpenService] = useState<number | null>(1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id);
  };

  const leftServices = servicesData.filter((_, index) => index % 2 === 0);
  const rightServices = servicesData.filter((_, index) => index % 2 !== 0);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-inner/background-image .png"
            alt="Projects background"
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
            <h1 className="font-rowdies text-[60px] font-normal leading-none tracking-tight text-white mb-4">
              PROJECTS
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-[18px] text-white leading-relaxed tracking-[0.31em] mb-8">
              Powering Projects With Precision,
              <br />
              Safety, And Technical Excellence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-16">
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
          backgroundImage: "url('/service-inner/sectonbg-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[85%] lg:w-[70%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-inter text-[16px] text-white tracking-[0.2em] mb-2">
              SWEAT FREE SUMMER WITH INNOVATIVE
            </p>
            <p className="font-inter text-[16px] tracking-[0.2em]">
              <span className="text-[#FDC052]">CEILING FANS</span>
              <span className="text-white"> INSTALLATIONS</span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-1">
            {/* Left Column */}
            <div>
              {leftServices.map((service) => (
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

            {/* Right Column */}
            <div>
              {rightServices.map((service) => (
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
