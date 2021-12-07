import styles from "./lightsaber.module.css";
import classnames from "classnames";

const LightSaber = () => {
  return (
    <div className={styles.lightSaber}>
      <div className={styles.handle}>
        <div className={classnames(styles.metal, styles.pommel)} />
        <div className={classnames(styles.metal, styles.black, styles.grip)}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={classnames(styles.metal, styles.controls)}>
          <div className={styles.gold} />
        </div>
        <div className={classnames(styles.metal, styles.black, styles.hilt)}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.gold} />
        <div className={classnames(styles.metal, styles.emitter)} />
      </div>
      <div className={styles.blade} />
    </div>
  );
};

export default LightSaber;
