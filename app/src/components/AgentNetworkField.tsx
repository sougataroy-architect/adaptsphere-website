"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; z: number; phase: number };

export function AgentNetworkField({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = host?.querySelector("canvas");
    const context = canvas?.getContext("2d", { alpha: true });
    if (!host || !canvas || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const points: Point[] = Array.from({ length: 42 }, (_, index) => {
      const seed = index + 1;
      return {
        x: Math.sin(seed * 127.1) * 0.88,
        y: Math.sin(seed * 311.7) * 0.8,
        z: Math.sin(seed * 74.7),
        phase: seed * 0.71,
      };
    });
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(bounds.width, 1);
      height = Math.max(bounds.height, 1);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.7);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(performance.now());
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion.matches) return;
      const bounds = host.getBoundingClientRect();
      pointer.active = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
      if (pointer.active) {
        pointer.x = ((event.clientX - bounds.left) / width - 0.5) * 2;
        pointer.y = ((event.clientY - bounds.top) / height - 0.5) * 2;
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      if (width === 0 || height === 0) return;

      const pointerX = pointer.active ? pointer.x : 0;
      const pointerY = pointer.active ? pointer.y : 0;
      const rotateY = Math.sin(time * 0.00012) * 0.035 + pointerX * 0.12;
      const rotateX = Math.cos(time * 0.0001) * 0.025 - pointerY * 0.09;
      const projected = points.map((point) => {
        const drift = reduceMotion.matches ? 0 : Math.sin(time * 0.00022 + point.phase) * 0.018;
        const x = point.x * Math.cos(rotateY) - point.z * Math.sin(rotateY);
        const z = point.x * Math.sin(rotateY) + point.z * Math.cos(rotateY);
        const y = point.y * Math.cos(rotateX) - z * Math.sin(rotateX) + drift;
        const depth = point.y * Math.sin(rotateX) + z * Math.cos(rotateX);
        const perspective = 1.18 / (1.85 + depth * 0.28);
        return {
          x: width * 0.5 + x * width * 0.72 * perspective,
          y: height * 0.5 + y * height * 0.72 * perspective,
          depth,
          radius: Math.max(1.2, (1.8 + (depth + 1) * 1.4) * perspective),
        };
      });

      for (let i = 0; i < projected.length; i += 1) {
        for (let j = i + 1; j < projected.length; j += 1) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance > Math.min(width, height) * 0.3) continue;
          const opacity = (1 - distance / (Math.min(width, height) * 0.3)) * (0.13 + (a.depth + b.depth + 2) * 0.035);
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(66, 111, 89, ${opacity})`;
          context.lineWidth = 0.7 + Math.max(a.depth, b.depth) * 0.2;
          context.stroke();
        }
      }

      projected.forEach((point, index) => {
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = index % 7 === 0 ? "rgba(99, 107, 47, 0.78)" : "rgba(55, 112, 88, 0.62)";
        context.fill();
      });
    };

    const animate = (time: number) => {
      if (!visible || document.hidden) return;
      draw(time);
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      if (reduceMotion.matches) {
        draw(performance.now());
        return;
      }
      frame = window.requestAnimationFrame(animate);
    };

    const onVisibilityChange = () => {
      if (document.hidden) window.cancelAnimationFrame(frame);
      else if (visible) start();
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else window.cancelAnimationFrame(frame);
    });
    visibilityObserver.observe(host);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    reduceMotion.addEventListener("change", start);
    resize();
    start();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reduceMotion.removeEventListener("change", start);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={hostRef} className={`agent-network-field ${className}`} aria-hidden="true"><canvas /></div>;
}
