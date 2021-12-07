import { useRef } from "react";
import Image from "next/image";
import Typography from "components/atoms/typography/typography";
import ProfileImage from "public/images/profile-picture.jpg";
import useTilt from "hooks/useTilt";
import Divider from "components/atoms/divider/divider";

import styles from "./profileCard.module.css";
import { useProfileData } from "../../../hooks/useProfileData";

const ProfileCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);
  const { name, social } = useProfileData();
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
        {name}
      </Typography.p>
      <Divider>Social</Divider>
      <div className={styles.contactLinks}>
        {social.map(({ icon, url }, index) => (
          <a key={index} href={url} rel="noopener noreferrer" target="_blank">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
