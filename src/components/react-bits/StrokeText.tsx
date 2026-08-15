"use client";

export function StrokeText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`stroke-text ${className}`}>{children}</span>;
}

