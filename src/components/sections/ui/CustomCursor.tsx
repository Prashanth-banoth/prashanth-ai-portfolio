
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("a, button")
      ) {
        cursor.style.transform =
          "translate(-50%, -50%) scale(1.5)";
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("a, button")
      ) {
        cursor.style.transform =
          "translate(-50%, -50%) scale(1)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/60 bg-blue-400/10 shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-transform duration-150 ease-out md:block"
    />
  );
}
