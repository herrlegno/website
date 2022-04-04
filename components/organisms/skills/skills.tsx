import { cloneElement, Fragment } from "react";
import Skill from "components/molecules/skill/skill";
import Typography from "components/atoms/typography/typography";
import Divider from "components/atoms/divider/divider";
import { useProfileData } from "hooks/useProfileData";

import styles from "./skills.module.css";

const Skills = () => {
  const { skills, languages } = useProfileData();
  return (
    <div className={styles.container}>
      {Object.entries(skills).map(([section, values], index) => (
        <Fragment key={index}>
          <Divider align="start">
            <Typography.h3 className={styles.section}>{section}</Typography.h3>
          </Divider>
          <div className={styles.grid}>
            {values.map(({ label, icon }) => (
              <Skill key={label} label={label} icon={icon} />
            ))}
          </div>
        </Fragment>
      ))}

      <Divider align="start">
        <Typography.h3 className={styles.section}>Languages</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        {languages.map(({ label, icon, aspectRatio }) => (
          <Skill
            key={label}
            label={label}
            icon={cloneElement(icon, {
              width: 52 * aspectRatio,
              height: 52,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
