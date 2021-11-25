import type { NextPage } from "next";
import Hero from "components/organisms/hero/hero";
import Section from "components/molecules/section/section";
import Skills from "components/organisms/skills/skills";
import Career from "components/organisms/career/career";
import Typography from "../components/atoms/typography/typography";

const Index: NextPage = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Section id="about" title="About me">
          <Typography.p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aperiam atque debitis delectus explicabo facere, nobis nostrum
            numquam omnis provident quas repellat, sed sit temporibus unde velit
            vitae. Autem, tenetur.
          </Typography.p>
          <Typography.p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            mollitia odit officiis quo unde voluptate! Accusantium assumenda aut
            autem cupiditate delectus, deserunt id impedit maxime minima neque
            totam, ullam vero?
          </Typography.p>
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
