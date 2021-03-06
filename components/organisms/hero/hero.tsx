import Typography from "components/atoms/typography/typography";
import Container from "components/atoms/container/container";
import LightSaber from "components/molecules/lightsaber/lightsaber";
import ProfileCard from "components/molecules/profileCard/profileCard";
import classnames from "classnames";
import { FiChevronDown } from "react-icons/fi";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.stars} />
      </div>
      <div className={styles.content}>
        <div />
        <Container center>
          <Typography.h1 className={classnames(styles.title, styles.glare)}>
            <span>Hello</span>
            <span>there!</span>
          </Typography.h1>
          <div className={styles.center}>
            <LightSaber />
          </div>
          <div className={classnames(styles.center, styles.profileInformation)}>
            <ProfileCard />
          </div>
        </Container>

        <div className={styles.center}>
          <a className={styles.chevron} href="#about">
            <FiChevronDown size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
