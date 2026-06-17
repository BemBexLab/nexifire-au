"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/careers" },
  { label: "Our Brands", href: "/brands" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "#") {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      const passedThreshold = currentY > 40;

      if (mobileOpen) {
        setIsHidden(false);
      } else if (scrollingDown && passedThreshold) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] w-full bg-[#F6F6F6] rounded-b-4xl py-[5px] transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 md:px-6 xl:px-10">
        <div className="flex shrink-0 items-center gap-2.5 justify-self-start">
          <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/Group 427320850.png"
            alt="NexiFire Logo"
            width={240}
            height={64}
            sizes="auto"
            className="h-auto w-[130px] shrink-0 sm:w-[190px] xl:w-[200px] xl:h-[70px]"
            priority
          />
          </Link>
        </div>

        {/* ── Desktop Nav Links ─────────────────────────────────────── */}
        <ul className="hidden flex-1 items-center justify-center gap-13 font-jakarta text-lg lg:flex">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            const className = `whitespace-nowrap text-md transition-colors duration-150 ${
              isActive
                ? "text-black font-regular border-b-2 border-[#c0784a] pb-0.5"
                : "text-[#5f5f5f] hover:text-[#1c1c1c] font-normal"
            }`;

            return (
              <li key={link.label}>
                {link.href === "#" ? (
                  <a href={link.href} className={className}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* ── CTA Button ───────────────────────────────────────────── */}
        <div className="hidden min-h-[48px] items-center justify-end font-jakarta lg:flex">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-lg border border-[#c0784a]/70 bg-white/24 px-5 py-[9px] text-md font-medium text-[#c0784a] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl transition-all duration-200 hover:bg-[#c0784a] hover:text-white hover:shadow-[0_10px_24px_rgba(178,64,2,0.24)]"
          >
            Free Consultation
            <CalendarIcon />
          </Link>
        </div>

        {/* ── Mobile Hamburger ─────────────────────────────────────── */}
        <button
          className="flex flex-col gap-[5px] rounded-lg border border-white/45 bg-white/25 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl lg:hidden"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[#555] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#555] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#555] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* ── Mobile Dropdown ───────────────────────────────────────── */}
      {mobileOpen && (
        <div className="mx-3 mt-2 flex flex-col gap-3 rounded-lg border border-white/55 bg-white/72 px-6 py-4 font-jakarta shadow-[0_18px_45px_rgba(31,31,31,0.13),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl backdrop-saturate-150 sm:mx-4 md:mx-6 lg:hidden">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            const className = `text-sm py-1 transition-colors duration-150 ${
              isActive
                ? "text-[#c0784a] font-semibold"
                : "text-[#5a5a5a] hover:text-[#1c1c1c]"
            }`;

            return link.href === "#" ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={className}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={className}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-jakarta mt-2 flex w-fit items-center gap-2 rounded-lg border border-[#c0784a]/70 bg-white/20 px-5 py-2 text-sm font-medium text-[#c0784a] backdrop-blur-xl transition-all duration-200 hover:bg-[#c0784a] hover:text-white"
          >
            Free Consultation
            <CalendarIcon />
          </Link>
        </div>
      )}
    </nav>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
        stroke="#B24002"
        strokeWidth="1.5"
      />
      <path
        d="M7 4V2.5"
        stroke="#B24002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 4V2.5"
        stroke="#B24002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.5 9H21.5"
        stroke="#B24002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
        fill="#B24002"
      />
      <path
        d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
        fill="#B24002"
      />
      <path
        d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
        fill="#B24002"
      />
      <path
        d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
        fill="#B24002"
      />
      <path
        d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
        fill="#B24002"
      />
      <path
        d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
        fill="#B24002"
      />
    </svg>
  );
}
