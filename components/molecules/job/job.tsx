import Typography from "../../atoms/typography/typography";
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
  description: string;
  start: Date;
  finish?: Date;
}

const Job = ({ company, title, description, start, finish }: JobProps) => {
  const finishDate = finish ?? Date.now();
  const duration = {
    years: differenceInYears(finishDate, start),
    months: differenceInMonths(finishDate, start) % 12,
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.company}>
          <Typography.p variant="h3" className={styles.title}>
            {company}
          </Typography.p>
          <Typography.span className={styles.duration}>
            {format(start, "LLLL, Y")} -{" "}
            {finish ? format(finish, "LLLL, Y") : "Current"} (
            {formatDuration(duration)})
          </Typography.span>
        </div>

        <Typography.p variant="h4">{title}</Typography.p>
      </div>
      <Typography.p className={styles.description}>{description}</Typography.p>
    </div>
  );
};

export default Job;
