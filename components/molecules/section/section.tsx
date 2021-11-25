import { PropsWithChildren } from "react";
import Typography from "components/atoms/typography/typography";
import Container from "components/atoms/container/container";

import styles from "./section.module.css";
import classnames from "classnames";

interface SectionProps {
  id?: string;
  title: string;
  className?: string;
}

const Section = ({
  children,
  id,
  title,
  className,
}: PropsWithChildren<SectionProps>) => {
  return (
    <Container center className={styles.container}>
      <section className={classnames(styles.section, className)} id={id}>
        <Typography.h2 variant="h1" className={styles.title}>
          {title}
        </Typography.h2>
        <div className={styles.content}>{children}</div>
      </section>
    </Container>
  );
};

export default Section;
