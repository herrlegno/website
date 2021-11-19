import { PropsWithChildren } from "react";

import styles from "./divider.module.css";
import classnames from "classnames";

interface DividerProps {
  align?: "center" | "start" | "end";
}
const Divider = ({
  children,
  align = "center",
}: PropsWithChildren<DividerProps>) => {
  return (
    <div
      className={classnames(styles.divider, {
        [styles.center]: align === "center",
        [styles.start]: align === "start",
        [styles.end]: align === "end",
      })}
    >
      <span>{children}</span>
    </div>
  );
};

export default Divider;
