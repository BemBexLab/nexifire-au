"use client";

import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const content = document.getElementById("smooth-content");
    const wrapper = document.getElementById("smooth-wrapper");

    if (!content || !wrapper) return;

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    smootherRef.current = smoother;

    const refresh = () => ScrollTrigger.refresh();
    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(content);

    const frame = window.requestAnimationFrame(refresh);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!smootherRef.current) return;

    const frame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
