"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    hasDropdown: true,
    subLinks: [
      { href: "/services/projects", label: "Projects" },
      { href: "/services/service-small-projects", label: "Service & Small Projects" },
      { href: "/services/telecom", label: "Telecom" },
    ],
  },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-south.png"
              alt="South Delta Logo"
              width={80}
              height={80}
              className="w-auto h-16"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.subLinks &&
                  link.subLinks.some((sub) => pathname === sub.href));

              if (link.hasDropdown && link.subLinks) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span
                      className={`font-inter text-[20px] text-white transition-colors hover:text-[#FDC052] flex items-center gap-1 cursor-pointer ${
                        isActive ? "font-semibold" : "font-normal"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white" />
                        )}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>

                    {/* Dropdown Menu */}
                    {openDropdown === link.href && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-[#0a1628]/70 backdrop-blur-md rounded-lg py-2 min-w-[180px] shadow-lg">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={`block px-4 py-2 font-inter text-[16px] text-white hover:text-[#FDC052] hover:bg-white/5 transition-colors ${
                                pathname === subLink.href ? "text-[#FDC052]" : ""
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-inter text-[20px] text-white transition-colors hover:text-[#FDC052] ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-[#0a1628]/95 backdrop-blur-md rounded-lg mt-4 py-4 px-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.subLinks &&
                  link.subLinks.some((sub) => pathname === sub.href));

              if (link.hasDropdown && link.subLinks) {
                return (
                  <div key={link.href} className="py-2">
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.href ? null : link.href
                        )
                      }
                      className={`w-full flex items-center justify-between font-inter text-[18px] text-white hover:text-[#FDC052] transition-colors ${
                        isActive ? "font-semibold text-[#FDC052]" : "font-normal"
                      }`}
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileDropdown === link.href ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        mobileDropdown === link.href ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block pl-4 py-2 font-inter text-[16px] text-gray-300 hover:text-[#FDC052] transition-colors ${
                            pathname === subLink.href ? "text-[#FDC052]" : ""
                          }`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-inter text-[18px] text-white hover:text-[#FDC052] transition-colors ${
                    isActive ? "font-semibold text-[#FDC052]" : "font-normal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
