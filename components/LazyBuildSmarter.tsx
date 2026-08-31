"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { BuildSmarterProps } from "./BuildSmarter";

const BuildSmarter = dynamic(() => import("./BuildSmarter"), {
  ssr: false,
});

export default function LazyBuildSmarter(props: BuildSmarterProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (typeof IntersectionObserver === "undefined") {
      const fallbackTimer = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {shouldLoad ? (
        <BuildSmarter {...props} />
      ) : (
        <div
          className="mx-5 min-h-[640px] rounded-[8px] bg-[#171717] sm:mx-8 sm:min-h-[600px] md:mx-6 md:min-h-[680px] lg:min-h-[700px]"
          aria-hidden="true"
        />
      )}
    </div>
  );
}