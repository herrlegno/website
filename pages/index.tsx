import Button from "components/atoms/button/button";
import Typography from "components/atoms/typography/typography";
import Section from "components/molecules/section/section";
import Career from "components/organisms/career/career";
import Hero from "components/organisms/hero/hero";
import Resume from "components/organisms/resume/resume";
import Skills from "components/organisms/skills/skills";
import { useProfileData } from "hooks/useProfileData";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { FiDownload } from "react-icons/fi";

import styles from "styles/pages/index.module.css";

const GeneratePDF = dynamic(
  () => import("components/organisms/generatePdf/generatePdf"),
  { ssr: false }
);

const Index: NextPage = () => {
  const { about } = useProfileData();
  return (
    <>
      <NextSeo title="Home" />
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
        <Section id="resume">
          <div className={styles.resume}>
            <Typography.h2>Do you need a Resume?</Typography.h2>
            <GeneratePDF
              trigger={
                <Button variant="secondary">
                  <FiDownload size={32} />
                </Button>
              }
              pdf={<Resume />}
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Index;
