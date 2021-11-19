import { useRef } from "react";
import useFollowMouse from "hooks/useFollowMouse";
import styles from "./cursor.module.css";

const Cursor = () => {
  const cursorRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  useFollowMouse(cursorRef);

  // useEffect(() => {
  //   const element = cursorRef.current;
  //   const circle = circleRef.current;
  //   if (element && circle) {
  //     const defaultSize = circle.getAttribute("cx");
  //     const radius = 10;
  //     console.log(defaultSize);
  //     const setSize = (size) => {
  //       circle.setAttribute("cx", size / 2);
  //       circle.setAttribute("cy", size / 2);
  //       circle.setAttribute("r", size);
  //     };
  //
  //     const clickables = document.querySelectorAll("a");
  //
  //     clickables.forEach((el) => {
  //       el.addEventListener("mouseenter", () => setSize(radius));
  //       el.addEventListener("mouseleave", () => setSize(defaultSize));
  //     });
  //
  //     return () => {
  //       clickables.forEach((el) => {
  //         el.removeEventListener("mouseenter", () => setSize(radius));
  //         el.removeEventListener("mouseleave", () => setSize(defaultSize));
  //       });
  //     };
  //   }
  // }, [cursorRef]);

  return (
    <div className={styles.cursor}>
      <div className={styles.circle}>
        <svg ref={cursorRef} width="10" height="10">
          <circle ref={circleRef} cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
