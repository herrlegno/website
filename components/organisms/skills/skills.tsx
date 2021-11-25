import Skill from "components/molecules/skill/skill";
import Typography from "components/atoms/typography/typography";
import Divider from "components/atoms/divider/divider";

import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Divider align="start">
        <Typography.h3 className={styles.section}>
          Front-end Related
        </Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="HTML5" rate={7.5} />
        <Skill label="CSS3" rate={7.5} />
        <Skill label="JavaScript" rate={8} />
        <Skill label="TypeScript" rate={8} />
        <Skill label="React" rate={8} />
        <Skill label="Vue" rate={4.5} />
        <Skill label="PostCSS" rate={6.5} />
        <Skill label="GraphQL" rate={6.5} />
        <Skill label="Jest" rate={5} />
      </div>
      <Divider align="start">
        <Typography.h3 className={styles.section}>
          Back-end Related
        </Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="Node.js" rate={6} />
        <Skill label="Python" rate={3} />
        <Skill label="SQL" rate={5} />
        <Skill label="MongoDB" rate={5} />
      </div>
      <Divider align="start">
        <Typography.h3 className={styles.section}>Others</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="Docker" rate={5} />
        <Skill label="C++" rate={5} />
      </div>
      <Divider align="start">
        <Typography.h3 className={styles.section}>Languages</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="Spanish" rate={10} />
        <Skill label="English" rate={7} />
      </div>
    </div>
  );
};

export default Skills;
