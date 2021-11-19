import Typography from "components/atoms/typography/typography";
import Container from "components/atoms/container/container";
import LightSaber from "components/molecules/lightsaber/lightsaber";
import ProfileCard from "components/molecules/profileCard/profileCard";
import classnames from "classnames";
import { ChevronDown } from "tabler-icons-react";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.stars} />
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
          <Typography.p variant="h2" className={styles.glare}>
            I am
          </Typography.p>
          <ProfileCard />
        </div>
      </Container>

      <div className={styles.center}>
        <ChevronDown className={styles.chevron} size={36} />
      </div>
    </div>
  );
};

export default Hero;
