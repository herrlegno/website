import { ReactNode } from "react";
import Typography from "components/atoms/typography/typography";
import ProgressBar from "components/atoms/progressBar/progressBar";

import styles from "./skill.module.css";

interface SkillProps {
  label: string;
  icon?: ReactNode;
  rate: number;
}

const Skill = ({ label, icon, rate }: SkillProps) => {
  return (
    <div className={styles.container}>
      <Typography.span variant="h3">{label}</Typography.span>
      {icon}
      <ProgressBar value={rate} className={styles.progressBar} />
    </div>
  );
};

export default Skill;
