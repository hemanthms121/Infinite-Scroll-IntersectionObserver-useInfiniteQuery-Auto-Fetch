import { useEffect } from "react";

/**
 * Observe an element and call onIntersect whenever it enters the viewport.
 *
 * @param {React.RefObject<Element>} ref - Ref attached to the element to observe.
 * @param {() => void} onIntersect - Callback invoked when the element intersects.
 */
export function useIntersection(ref, onIntersect) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, onIntersect]);
}
