"use client";
import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";

interface ScrollContainerProps {
  children: React.ReactNode;
}

// ✅ forwardRef permite que el padre tenga acceso al <main>
const ScrollContainer = forwardRef<HTMLDivElement, ScrollContainerProps>(
  ({ children }, ref) => {
    const innerRef = useRef<HTMLDivElement | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    // 🔁 Expone el ref interno al padre
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;

      let timeout: NodeJS.Timeout | null = null;

      const handleScroll = () => {
        if (isScrolling) return;
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
          const sections = Array.from(el.querySelectorAll("section"));
          const pos = el.scrollTop;
          const target = sections.reduce((prev, curr) =>
            Math.abs(curr.offsetTop - pos) < Math.abs(prev.offsetTop - pos)
              ? curr
              : prev
          );
          setIsScrolling(true);
          el.scrollTo({ top: target.offsetTop, behavior: "smooth" });
          setTimeout(() => setIsScrolling(false), 800);
        }, 120);
      };

      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }, [isScrolling]);

    return (
      <main
        ref={innerRef}
        className="relative snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth bg-white text-gray-900"
      >
        {children}
      </main>
    );
  }
);

ScrollContainer.displayName = "ScrollContainer";
export default ScrollContainer;
