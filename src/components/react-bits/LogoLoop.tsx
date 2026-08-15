"use client";

import { Atom, Brain, ChartLine, Pulse } from "@phosphor-icons/react";

const icons = [Brain, Pulse, Atom, ChartLine];

export function LogoLoop({ items, label }: { items: readonly string[]; label: string }) {
  const repeated = [...items, ...items];
  return (
    <div className="logo-loop" aria-label={label}>
      <div className="logo-loop-track">
        {repeated.map((item, index) => {
          const Icon = icons[index % icons.length];
          return <span className="logo-loop-item" key={`${item}-${index}`} aria-hidden={index >= items.length}><Icon size={20} weight="thin" />{item}</span>;
        })}
      </div>
    </div>
  );
}

