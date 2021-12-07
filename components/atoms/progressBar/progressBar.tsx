import React from "react";
import classnames from "classnames";
import clamp from "utils/clamp";

import styles from "./progressBar.module.css";

interface ProgressBarProps {
  label?: boolean;
  value: number;
  className?: string;
}

const ProgressBar = ({
  value,
  className = "",
  label = true,
}: ProgressBarProps) => {
  return (
    <div className={styles.container}>
      {label && (
        <div
          style={{ width: `${clamp(0, 10, value) * 10}%` }}
          className={styles.labelContainer}
        >
          <span className={styles.label}>{value}</span>
        </div>
      )}

      <div
        className={classnames(styles.progressBar, styles.rounded, className)}
      >
        <div
          style={{ width: `${clamp(0, 10, value) * 10}%` }}
          className={styles.bar}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
