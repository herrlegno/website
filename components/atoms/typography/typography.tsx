import { ElementType, ReactNode } from "react";
import classnames from "classnames";
import styles from "./typography.module.css";

type ITypographyVariants = "h1" | "h2" | "h3" | "h4" | "p";

export interface ITypographyProps {
  children: ReactNode;
  component?: ITypographyVariants;
  variant?: ITypographyVariants;
  className?: string;
  [index: string]: any;
}

const Typography = ({
  component,
  variant,
  className,
  children,
  ...props
}: ITypographyProps) => {
  const Component = (component || variant) as ElementType;
  const Variant = variant || component;
  return (
    <Component
      className={classnames(className, {
        [styles.h1]: Variant === "h1",
        [styles.h2]: Variant === "h2",
        [styles.h3]: Variant === "h3",
        [styles.h4]: Variant === "h4",
        [styles.p]: Variant === "p",
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.h1 = (props: ITypographyProps) => (
  <Typography component="h1" {...props} />
);
Typography.h2 = (props: ITypographyProps) => (
  <Typography component="h2" {...props} />
);
Typography.h3 = (props: ITypographyProps) => (
  <Typography component="h3" {...props} />
);
Typography.h4 = (props: ITypographyProps) => (
  <Typography component="h4" {...props} />
);
Typography.p = (props: ITypographyProps) => (
  <Typography component="p" {...props} />
);

export default Typography;
