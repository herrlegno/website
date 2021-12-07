import styles from "./commitPoint.module.css";
import classnames from "classnames";

interface CommitPointProps {
  active: boolean;
}

const CommitPoint = ({ active = false }: CommitPointProps) => {
  return (
    <div
      className={classnames(styles.point, {
        [styles.active]: active,
      })}
    />
  );
};

export default CommitPoint;
