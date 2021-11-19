import { MutableRefObject, useEffect } from "react";

const useFollowMouse = (
  ref: MutableRefObject<HTMLElement | SVGSVGElement | null>
) => {
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const onMouseMove = (e: MouseEvent) => {
        const { width, height } = element.getBoundingClientRect();

        element.style.transform = `translate(${e.x - width / 2}px, ${
          e.y - height - height / 2
        }px)`;
      };

      document.addEventListener("mousemove", onMouseMove);

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [ref]);
};

export default useFollowMouse;
