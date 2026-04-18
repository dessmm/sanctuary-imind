"use client";

import { useEffect, useRef } from "react";

export default function FloatingShapes() {
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.005;

      const shapes = [shape1Ref.current, shape2Ref.current, shape3Ref.current];
      shapes.forEach((shape, index) => {
        if (!shape) return;
        const depth = (index + 1) * 2;
        shape.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={shape1Ref}
        className="floating-shape w-96 h-96 bg-primary rounded-full top-20 -left-20"
      />
      <div
        ref={shape2Ref}
        className="floating-shape w-80 h-80 bg-secondary-container rounded-full top-1/3 -right-20"
        style={{ animationDelay: "-5s" }}
      />
      <div
        ref={shape3Ref}
        className="floating-shape w-[500px] h-[500px] bg-tertiary-fixed rounded-full bottom-20 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "-10s" }}
      />
    </>
  );
}
