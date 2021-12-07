import type { NextPage } from "next";
import Hero from "components/organisms/hero/hero";
import Section from "components/molecules/section/section";
import Skills from "components/organisms/skills/skills";
import Career from "components/organisms/career/career";
import { useProfileData } from "../hooks/useProfileData";

import styles from "styles/pages/index.module.css";

const Index: NextPage = () => {
  const { about } = useProfileData();
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Section id="about" title="About me" className={styles.about}>
          {about}
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="career" title="Career">
          <Career />
        </Section>
      </main>
    </>
  );
};

export default Index;
