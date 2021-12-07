import { ReactNode } from "react";
import classnames from "classnames";
import styles from "./container.module.css";

export interface IContainerProps {
  center?: boolean;
  className?: string;
  children: ReactNode;
}

const Container = ({
  center = false,
  className,
  children,
}: IContainerProps) => {
  return (
    <div
      className={classnames(styles.container, className, {
        [styles.center]: center,
      })}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Container;
