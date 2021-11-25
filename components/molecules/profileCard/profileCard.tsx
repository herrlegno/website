import { useRef } from "react";
import Image from "next/image";
import Typography from "components/atoms/typography/typography";
import ProfileImage from "public/images/profile-picture.jpg";
import useTilt from "hooks/useTilt";
import Divider from "components/atoms/divider/divider";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import styles from "./profileCard.module.css";

const ProfileCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);
  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.imageContainer}>
        <Image
          src={ProfileImage}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          className={styles.image}
          alt="Alejandro's Profile Picture"
        />
      </div>
      <Typography.p variant="h3" className={styles.name}>
        Alejandro González Alonso
      </Typography.p>
      <Divider>Contact</Divider>
      <div className={styles.contactLinks}>
        <a
          href="https://github.com/herrlegno"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiGithub size={24} />
        </a>
        <a
          href="https://twitter.com/herrlegno"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/herrlegno/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiLinkedin size={24} />
        </a>
        <a
          href="mailto://alejandrolegno@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiMail size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
