import {
  SiCplusplus,
  SiCss3,
  SiCypress,
  SiDocker,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinkedin,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostcss,
  SiPython,
  SiReact,
  SiRuby,
  SiTwitter,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FiDatabase, FiMail } from "react-icons/fi";
import Typography from "components/atoms/typography/typography";
import { ReactElement } from "react";

interface Data {
  name: string;
  social: {
    icon: ReactElement;
    url: string;
    label: string;
  }[];
  about: ReactElement;
  skills: {
    [index: string]: { label: string; icon: ReactElement; rate?: number }[];
  };
  languages: { label: string; icon: ReactElement; aspectRatio: number }[];
  career: {
    company: string;
    title: string;
    description?: ReactElement;
    dates: [string, string | null];
  }[];
}

/* eslint-disable @next/next/no-img-element */
const data: Data = {
  name: "Alejandro González Alonso",
  social: [
    {
      icon: <SiGithub size={24} />,
      url: "https://github.com/herrlegno",
      label: "herrlegno",
    },
    {
      icon: <SiTwitter size={24} />,
      url: "https://twitter.com/herrlegno",
      label: "@herrlegno",
    },
    {
      icon: <SiLinkedin size={24} />,
      url: "https://www.linkedin.com/in/herrlegno/",
      label: "herrlegno",
    },
    {
      icon: <FiMail size={24} />,
      url: "mailto://alejandrolegno@gmail.com",
      label: "alejandrolegno@gmail.com",
    },
  ],
  about: (
    <>
      <Typography.p>
        I am Alejandro, a React developer that loves the tech world and be at
        the bleeding edge of front-end tech. Currently working as a fullstack
        with React, Next.js and Spring. From time to time I also like to do some
        game development related things with UE4, because I love playing them as
        well as coding them.
      </Typography.p>
    </>
  ),
  skills: {
    primary: [
      {
        label: "HTML5",
        icon: <SiHtml5 size={64} />,
        rate: 7.5,
      },
      {
        label: "CSS3",
        icon: <SiCss3 size={64} />,
        rate: 7.5,
      },
      {
        label: "JavaScript",
        icon: <SiJavascript size={64} />,
        rate: 8,
      },
      {
        label: "TypeScript",
        icon: <SiTypescript size={64} />,
        rate: 8,
      },
      {
        label: "React",
        icon: <SiReact size={64} />,
        rate: 8,
      },
      {
        label: "Next.js",
        icon: <SiNextdotjs size={64} />,
        rate: 7,
      },
      {
        label: "PostCSS",
        icon: <SiPostcss size={64} />,
        rate: 6.5,
      },
      {
        label: "GraphQL",
        icon: <SiGraphql size={64} />,
        rate: 6.5,
      },
      {
        label: "Jest",
        icon: <SiJest size={64} />,
        rate: 5,
      },
    ],
    secondary: [
      {
        label: "Node.js",
        icon: <SiNodedotjs size={64} />,
        rate: 6,
      },
      {
        label: "SQL",
        icon: <FiDatabase size={64} />,
        rate: 5,
      },
      {
        label: "MongoDB",
        icon: <SiMongodb size={64} />,
        rate: 5,
      },
    ],
    others: [
      {
        label: "Vue.js",
        icon: <SiVuedotjs size={64} />,
      },
      {
        label: "NestJS",
        icon: <SiNestjs size={64} />,
      },
      {
        label: "Docker",
        icon: <SiDocker size={64} />,
      },
      {
        label: "C++",
        icon: <SiCplusplus size={64} />,
      },
      {
        label: "Ruby",
        icon: <SiRuby size={64} />,
      },
      {
        label: "Python",
        icon: <SiPython size={64} />,
      },
      {
        label: "Cypress",
        icon: <SiCypress size={64} />,
      },
    ],
  },
  languages: [
    {
      label: "Spanish (Native)",
      aspectRatio: 1.5,
      icon: <img src="/images/spain-flag.svg" alt="Spanish Flag" />,
    },
    {
      label: "English",
      aspectRatio: 2,
      icon: <img src="/images/uk-flag.svg" alt="United Kingdom Flag" />,
    },
  ],
  career: [
    {
      company: "Universidad de La Laguna",
      title: "Degree in Computer Engineering",
      dates: ["2015-09-01", "2019-06-01"],
    },
    {
      company: "Liga Canaria de eSports S.L.",
      title: "React Developer",
      description: (
        <>
          Tasks:
          <ul>
            <li>
              Front-end Development with React, React Router, Apollo GraphQL,
              Redux and Redux Thunk
            </li>
          </ul>
        </>
      ),
      dates: ["2019-08-01", "2020-06-30"],
    },
    {
      company: "Medano Solution S.L.",
      title: "React Developer",
      description: (
        <>
          Tasks:
          <ul>
            <li>
              Front-end Development with React, React Router, React Contexts,
              React Hook Form and React Query
            </li>
          </ul>
        </>
      ),
      dates: ["2020-07-01", "2021-01-02"],
    },
    {
      company: "Botdreams S.L.",
      title: "React Developer and Back-end Developer",
      description: (
        <>
          Tasks:
          <ul>
            <li>Front-end Development with Next.js and React</li>
            <li>Back-end Development with Spring Boot and Python</li>
          </ul>
        </>
      ),
      dates: ["2021-01-10", null],
    },
  ],
};

export const useProfileData = () => data;
