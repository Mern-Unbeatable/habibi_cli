import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return children;
};

export default SmoothScroll;
