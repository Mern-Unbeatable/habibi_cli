import { useEffect, useRef } from "react";
import { animate, inView } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1];

// Reveals every element marked with [data-reveal] inside the scoped section.
// Optional data-delay="0.2" staggers siblings without extra JS per component.
const useReveal = () => {
  const scope = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = scope.current.querySelectorAll("[data-reveal]");

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
    });

    const cleanups = [...elements].map((el) =>
      inView(
        el,
        () => {
          animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.8, delay: Number(el.dataset.delay || 0), ease: EASE },
          ).then(() => {
            // Clear inline styles so Tailwind hover transforms keep working
            el.style.opacity = "";
            el.style.transform = "";
          });
        },
        { margin: "0px 0px -10% 0px" },
      ),
    );

    return () => cleanups.forEach((stop) => stop());
  }, []);

  return scope;
};

export default useReveal;
