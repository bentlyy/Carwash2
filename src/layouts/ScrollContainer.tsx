"use client";
import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = forwardRef<HTMLDivElement, ScrollContainerProps>(
  ({ children }, ref) => {
    const innerRef = useRef<HTMLDivElement | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

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
        className="
          relative h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory
          text-white bg-gradient-to-b from-[#0b3d91] via-[#1e63c4] to-[#1a1a1a]
          transition-all duration-700 ease-in-out
          [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]
          scrollbar-thin scrollbar-thumb-[#06f4ff]/60 scrollbar-track-[#0b3d91]/20
          hover:scrollbar-thumb-[#40a9ff]/70
        "
      >
        {/* ✨ Fondo con brillo sutil */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(6,244,255,0.15)_0%,transparent_70%)]"></div>

        {/* 🌫️ Overlay superior con glass blur */}
        <div className="fixed top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#0b3d91]/40 to-transparent backdrop-blur-sm z-10 pointer-events-none"></div>

        {children}
      </main>
    );
  }
);

ScrollContainer.displayName = "ScrollContainer";
export default ScrollContainer;
