import type { MutableRefObject } from "react";
import { useEffect } from "react";
import { denormalize, normalize } from "utils/normalization";

const defaultSettings = {
  enabled: true,
  tiltX: 5,
  tiltY: 5,
  perspective: 300,
};

const useTilt = (
  ref: MutableRefObject<HTMLElement | undefined | null>,
  options: Partial<typeof defaultSettings> = {}
) => {
  useEffect(() => {
    const settings = { ...defaultSettings, ...options };
    const element = ref.current;
    if (element && settings.enabled) {
      const enter = () => {
        element.style.transition = "";
      };
      const reset = () => {
        element.style.transform = "";
        element.style.transition = "all .5s ease-out";
      };
      const tilt = (e: MouseEvent) => {
        const boundingRect = element.getBoundingClientRect() as DOMRect;
        const posX = normalize(e.x - boundingRect.left, 0, boundingRect?.width);
        const posY = normalize(e.y - boundingRect.top, 0, boundingRect?.height);
        const tiltX = denormalize(posX, -settings.tiltX, settings.tiltX);
        const tiltY = denormalize(posY, -settings.tiltY, settings.tiltY);
        element.style.transform = `perspective(${settings.perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      };
      element.addEventListener("mousemove", tilt);
      element.addEventListener("mouseleave", reset);
      element.addEventListener("mouseenter", enter);
      return () => {
        element.removeEventListener("mousemove", tilt);
        element.removeEventListener("mouseleave", reset);
        element.removeEventListener("mouseenter", enter);
      };
    }
  }, [ref, options]);
};

export default useTilt;
