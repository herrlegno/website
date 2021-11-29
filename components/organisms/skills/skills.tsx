import Skill from "components/molecules/skill/skill";
import Typography from "components/atoms/typography/typography";
import Divider from "components/atoms/divider/divider";
import {
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostcss,
  SiPython,
  SiReact,
  SiRuby,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import Image from "next/image";

import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Divider align="start">
        <Typography.h3 className={styles.section}>Primary</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="HTML5" icon={<SiHtml5 size={64} />} rate={7.5} />
        <Skill label="CSS3" icon={<SiCss3 size={64} />} rate={7.5} />
        <Skill label="JavaScript" icon={<SiJavascript size={64} />} rate={8} />
        <Skill label="TypeScript" icon={<SiTypescript size={64} />} rate={8} />
        <Skill label="React" icon={<SiReact size={64} />} rate={8} />

        <Skill label="PostCSS" icon={<SiPostcss size={64} />} rate={6.5} />
        <Skill label="GraphQL" icon={<SiGraphql size={64} />} rate={6.5} />
        <Skill label="Jest" icon={<SiJest size={64} />} rate={5} />
        <Skill label="Next.js" icon={<SiNextdotjs size={64} />} rate={7.5} />
      </div>
      <Divider align="start">
        <Typography.h3 className={styles.section}>Secondary</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="Node.js" icon={<SiNodedotjs size={64} />} rate={6} />

        <Skill label="SQL" icon={<FiDatabase size={64} />} rate={5} />
        <Skill label="MongoDB" icon={<SiMongodb size={64} />} rate={5} />
      </div>
      <Divider align="start">
        <Typography.h3 className={styles.section}>Others</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill label="Vue" icon={<SiVuedotjs size={64} />} />
        <Skill label="Docker" icon={<SiDocker size={64} />} />
        <Skill label="C++" icon={<SiCplusplus size={64} />} />
        <Skill label="Ruby" icon={<SiRuby size={64} />} />
        <Skill label="Python" icon={<SiPython size={64} />} />
      </div>
      <Divider align="start">
        <Typography.h3 className={styles.section}>Languages</Typography.h3>
      </Divider>
      <div className={styles.grid}>
        <Skill
          label="Spanish (Native)"
          icon={
            <Image
              src="/images/spain-flag.svg"
              width={52 * 1.5}
              height={52}
              alt="Spanish Flag"
            />
          }
        />
        <Skill
          label="English"
          icon={
            <Image
              src="/images/uk-flag.svg"
              width={52 * 2}
              height={52}
              alt="United Kingdom Flag"
            />
          }
        />
      </div>
    </div>
  );
};

export default Skills;
