const paths = {
  yemek: <><path d="M7 3v7m-3-7v5a3 3 0 0 0 6 0V3M7 11v10M17 3c-3 3-3 8 0 8h3M20 3v18" /></>,
  deniz: <><path d="M2 16c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 21c3-4 5 4 8 0s5 4 8 0 4 0 4 0" /><circle cx="16" cy="6" r="3" fill="currentColor" stroke="none" /><path d="M5 5v3M3.5 6.5h3" /></>,
  gezi: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15" /><path d="m11 10 2 2-2 2" /></>,
  eğlence: <><path d="M9 17V5l11-2v12M9 8l11-2" /><ellipse cx="6" cy="18" rx="3" ry="2.5" fill="currentColor" /><ellipse cx="17" cy="16" rx="3" ry="2.5" fill="currentColor" /><path d="M3 3v4M1 5h4" /></>,
  kahvetatlı: <><path d="M4 9h13v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9ZM17 10h2a3 3 0 0 1 0 6h-2M8 3v3m5-3v3M2 22h18" /></>,
}
export default function CategoryIcon({ category }) {
  return <svg viewBox="0 0 24 24" className="size-8 sm:size-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[category]}</svg>
}
