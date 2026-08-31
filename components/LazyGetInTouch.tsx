"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GetInTouchSection = dynamic(() => import("./GetInTouch"), {
  ssr: false,
});

export default function LazyGetInTouch() {
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
        <GetInTouchSection />
      ) : (
        <div className="min-h-[720px]" aria-hidden="true" />
      )}
    </div>
  );
}