export function BrainLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 180" fill="none" aria-hidden="true">
      <path d="M109 28c-17-19-48-11-53 13-20-4-34 18-24 35-16 14-6 39 14 41-2 22 27 34 42 18 8 22 39 19 44-3 21 10 42-10 34-30 21-9 21-39 0-48 4-25-26-39-43-23-4-9-8-13-14-3Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M108 29v106M82 38c18 12 17 28 2 42 18 7 22 28 7 44M136 37c-18 10-18 31-3 42-18 9-20 30-6 46M57 44c7 13 20 18 34 14M37 80c15-5 29 1 34 16M148 56c17-1 28 9 32 23M146 96c17-3 30 5 33 19" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

export function BotanicalLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 250" fill="none" aria-hidden="true">
      <path d="M72 238C62 181 86 128 120 32M79 196c-25-4-42-20-50-43 27-2 45 10 52 31M91 153c-20-14-25-35-20-56 22 9 32 28 26 48M104 111c-5-23 5-42 23-56 12 21 6 41-16 55M114 72c1-18 11-31 28-39 5 18-3 32-25 41" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

export function WorkArt({ kind }: { kind: string }) {
  if (kind === "wave") return <svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M6 62h28l8-26 15 55 14-72 18 89 15-70 12 43 11-19h47" stroke="currentColor" strokeWidth="2"/><circle cx="90" cy="62" r="48" stroke="currentColor" opacity=".18"/></svg>;
  if (kind === "profile") return <svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M116 105c-28-8-49-19-53-43-4-23 10-44 34-48 28-5 54 13 56 40 1 15-6 21-14 31l4 20" stroke="currentColor" strokeWidth="1.8"/><circle cx="104" cy="46" r="9" stroke="currentColor"/><circle cx="104" cy="46" r="20" stroke="currentColor" opacity=".55"/><circle cx="104" cy="46" r="31" stroke="currentColor" opacity=".3"/></svg>;
  return <svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><circle cx="90" cy="60" r="13" stroke="currentColor"/><circle cx="90" cy="60" r="27" stroke="currentColor" opacity=".7"/><circle cx="90" cy="60" r="42" stroke="currentColor" opacity=".45"/><circle cx="90" cy="60" r="56" stroke="currentColor" opacity=".2"/></svg>;
}
