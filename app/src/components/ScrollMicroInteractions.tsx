"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = [
  ".architecture-board",
  ".page-hero-visual",
  ".service-card",
  ".insight-card",
  ".problem-grid > article",
  ".process-grid > li",
  ".platform-grid > article",
  ".technology-grid > div",
  ".modernization",
  ".contact-panel",
  ".contact-guidance",
  ".control-questions > p",
].join(",");

export function ScrollMicroInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(targets));
    if (elements.length === 0) return;

    const groups = new Map<Element, number>();
    elements.forEach((element) => {
      const parent = element.parentElement ?? element;
      const position = groups.get(parent) ?? 0;
      groups.set(parent, position + 1);
      element.dataset.scrollReveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(position, 3) * 70}ms`);
    });

    document.documentElement.dataset.scrollMotion = "ready";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -36px 0px" });

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        delete element.dataset.scrollReveal;
        element.classList.remove("is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
