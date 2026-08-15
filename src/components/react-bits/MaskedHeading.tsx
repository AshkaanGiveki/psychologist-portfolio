"use client";

export function MaskedHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`masked-heading ${className}`}><span>{children}</span></span>;
}

