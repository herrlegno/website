import type { NextPage } from "next";
import Hero from "components/organisms/hero/hero";
import Section from "components/molecules/section/section";
import Skills from "components/organisms/skills/skills";

const Index: NextPage = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Section title="About me" />
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Career" />
      </main>
    </>
  );
};

export default Index;
