"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const FIRST_VISIT_KEY = "nexifire-loader-seen";
const LOADER_COMPLETE_EVENT = "nexifire:loader-complete";

type LoaderOverlayProps = {
  label?: string;
};

export function LoaderOverlay({
  label = "Loading NexiFire",
}: LoaderOverlayProps) {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-[#F6F6F6] text-black">
      <div className="relative flex min-h-[260px] w-[min(86vw,440px)] flex-col items-center justify-center overflow-hidden rounded-lg border border-white bg-white/70 px-8 py-10 shadow-[0_24px_70px_rgba(31,31,31,0.14)]">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[28px] border-[#B24002]/15" />
        <div className="absolute -bottom-14 -left-12 h-36 w-36 rounded-full border-[24px] border-black/5" />

        <div className="relative mb-7 grid h-20 w-20 place-items-center">
          <div className="absolute inset-0 rounded-full border border-[#B24002]/20" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-[#B24002] border-r-transparent border-t-transparent" />
          <div
            className="h-12 w-12 rounded-[7px]"
            style={{
              backgroundImage: 'url("/Vector.png")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </div>

        <p className="font-jakarta text-sm font-semibold uppercase tracking-[0.36em] text-[#B24002]">
          NexiFire
        </p>
        <p className="mt-3 text-center font-jakarta text-[28px] font-medium leading-tight text-[#222222] sm:text-[34px]">
          Build. Scale. Grow.
        </p>
        <p className="mt-3 text-center font-jakarta text-sm text-[#707070]">
          {label}
        </p>

        <div className="mt-8 h-[5px] w-full overflow-hidden rounded-full bg-[#E3E3E3]">
          <div className="h-full w-1/2 animate-[loaderSlide_1s_ease-in-out_infinite] rounded-full bg-[#B24002]" />
        </div>
      </div>
    </div>
  );
}

const SiteLoadingScreen = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("Preparing the ecosystem");
  const showTimer = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);
  const maxTimer = useRef<number | null>(null);
  const previousPathname = useRef(pathname);
  const pendingNavigation = useRef(false);

  const clearTimers = () => {
    [showTimer, hideTimer, maxTimer].forEach((timer) => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
        timer.current = null;
      }
    });
  };

  const completeLoading = () => {
    clearTimers();
    pendingNavigation.current = false;
    setVisible(false);
    document.documentElement.dataset.nexifireLoaderComplete = "true";
    window.dispatchEvent(new Event(LOADER_COMPLETE_EVENT));
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (visible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    const hasSeenLoader = window.sessionStorage.getItem(FIRST_VISIT_KEY);

    if (!hasSeenLoader) {
      window.sessionStorage.setItem(FIRST_VISIT_KEY, "true");
      setLabel("Preparing the ecosystem");
      setVisible(true);
      hideTimer.current = window.setTimeout(completeLoading, 1450);
    } else {
      window.requestAnimationFrame(completeLoading);
    }

    return clearTimers;
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      const target = link.getAttribute("target");
      if (!href || target === "_blank" || href.startsWith("#")) return;

      const url = new URL(href, window.location.href);
      const isSameOrigin = url.origin === window.location.origin;
      const isSamePath = url.pathname === window.location.pathname;
      if (!isSameOrigin || isSamePath) return;

      clearTimers();
      pendingNavigation.current = true;
      setLabel("Loading the next page");
      showTimer.current = window.setTimeout(() => setVisible(true), 180);
      maxTimer.current = window.setTimeout(() => {
        pendingNavigation.current = false;
        completeLoading();
      }, 2600);
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () =>
      document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (showTimer.current !== null) {
      window.clearTimeout(showTimer.current);
      showTimer.current = null;
    }

    if (pendingNavigation.current) {
      pendingNavigation.current = false;
      if (visible) {
        if (maxTimer.current !== null) {
          window.clearTimeout(maxTimer.current);
          maxTimer.current = null;
        }
        hideTimer.current = window.setTimeout(completeLoading, 420);
      } else {
        completeLoading();
      }
    }
  }, [pathname, visible]);

  if (!visible) return null;

  return <LoaderOverlay label={label} />;
};

export default SiteLoadingScreen;
