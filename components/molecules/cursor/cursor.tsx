import { useRef } from "react";
import useFollowMouse from "hooks/useFollowMouse";
import styles from "./cursor.module.css";

const Cursor = () => {
  const cursorRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  useFollowMouse(cursorRef);

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
