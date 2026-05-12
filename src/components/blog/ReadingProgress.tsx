import { useEffect, useState } from "react";

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyan to-primary transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
