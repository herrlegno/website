import Job from "components/molecules/job/job";
import CommitPoint from "components/atoms/commitPoint/commitPoint";
import { useProfileData } from "hooks/useProfileData";

import styles from "./career.module.css";

const Career = () => {
  const { career } = useProfileData();
  return (
    <>
      {career
        .slice(0)
        .reverse()
        .map(
          ({ company, title, description, dates: [start, finish] }, index) => (
            <div key={index} className={styles.job}>
              <div className={styles.branch}>
                <CommitPoint active={index === 0} />
              </div>
              <Job
                company={company}
                title={title}
                description={description}
                start={start as string}
                finish={finish}
              />
            </div>
          )
        )}
    </>
  );
};

export default Career;
