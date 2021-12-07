import { ReactNode } from "react";
import Typography from "components/atoms/typography/typography";
import {
  differenceInMonths,
  differenceInYears,
  format,
  formatDuration,
} from "date-fns";

import styles from "./job.module.css";

interface JobProps {
  company: string;
  title: string;
  description: ReactNode;
  start: string;
  finish?: string | null;
}

const Job = ({ company, title, description, start, finish }: JobProps) => {
  const startDate = new Date(start);
  const finishDate = finish ? new Date(finish) : new Date();
  const duration = {
    years: differenceInYears(finishDate, startDate),
    months: differenceInMonths(finishDate, startDate) % 12,
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.company}>
          <Typography.p variant="h3" className={styles.title}>
            {company}
          </Typography.p>
          <Typography.span className={styles.duration}>
            {format(startDate, "LLLL, Y")} -{" "}
            {finish ? format(finishDate, "LLLL, Y") : "Current"} (
            {formatDuration(duration)})
          </Typography.span>
        </div>

        <Typography.p variant="h4">{title}</Typography.p>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Job;
