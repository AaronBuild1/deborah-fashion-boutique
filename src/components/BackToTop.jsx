import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed bottom-5 right-5 z-[80] w-11 h-11 bg-ink text-paper flex items-center justify-center hover:bg-accent transition-colors duration-500 shadow-lg animate-fadeup"
    >
      <ArrowUp className="w-4 h-4" strokeWidth={1.5} />
    </button>
  );
}
