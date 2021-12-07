import { useProfileData } from "hooks/useProfileData";
import Typography from "components/atoms/typography/typography";
import Divider from "components/atoms/divider/divider";
import ProfileImage from "public/images/profile-picture.jpg";
import Career from "components/organisms/career/career";
import classnames from "classnames";
import { cloneElement } from "react";

import styles from "./resume.module.css";

/* eslint-disable @next/next/no-img-element */
const Resume = () => {
  const { about, name, social, skills, languages } = useProfileData();
  return (
    <div className={styles.document}>
      <div className={classnames(styles.section, styles.black)}>
        <div className={styles.header}>
          <div className={styles.item}>
            <img
              src={ProfileImage.src}
              className={styles.profileImage}
              alt="Alejandro's Profile Picture"
            />

            <Typography.p variant="h3" className={styles.name}>
              {name}
            </Typography.p>
          </div>
          <div id="about" className={styles.item}>
            {about}
          </div>
        </div>
        <Divider>Contact</Divider>
        <div className={styles.social}>
          {social.map(({ icon, url, label }, index) => (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.section} id="skills">
        <Typography.h2>Skills</Typography.h2>
        {Object.entries(skills).map(([section, values], index) => {
          return (
            <div
              className={classnames(styles.skillCategory, styles.noBreakInside)}
              key={index}
            >
              <Divider align="start">
                <Typography.h3>{section}</Typography.h3>
              </Divider>
              <div className={styles.grid}>
                {values.map(({ label, icon }) => (
                  <div className={styles.skill} key={label}>
                    {cloneElement(icon, { size: 20 })}{" "}
                    <Typography.span>{label}</Typography.span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className={classnames(styles.skillCategory, styles.noBreakInside)}>
          <Divider align="start">
            <Typography.h3>Languages</Typography.h3>
          </Divider>
          <div className={styles.grid}>
            {languages.map(({ label, icon, aspectRatio }) => (
              <div key={label}>
                <Typography.p>{label}</Typography.p>
                <div>
                  {cloneElement(icon, {
                    width: 25 * aspectRatio,
                    height: 25,
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={classnames(styles.section, styles.noBreakInside)}
        id="career"
      >
        <Typography.h2>Career</Typography.h2>
        <Career />
      </div>
    </div>
  );
};

export default Resume;
