import { ButtonHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={classnames(className, styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      {...props}
    />
  );
};

export default Button;
