import Job from "components/molecules/job/job";
import CommitPoint from "components/atoms/commitPoint/commitPoint";

import styles from "./career.module.css";

const jobs = [
  <Job
    key={1}
    company="Lorem ipsum dolor sit amet"
    title="Developer"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto beatae corporis cum delectus deserunt dolores eum fuga in inventore itaque, labore minima, nesciunt perspiciatis quia ratione unde, velit veritatis."
    start={new Date("12/12/2019")}
  />,
  <Job
    key={2}
    company="Lorem ipsum dolor sit amet"
    title="Developer"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto beatae corporis cum delectus deserunt dolores eum fuga in inventore itaque, labore minima, nesciunt perspiciatis quia ratione unde, velit veritatis."
    start={new Date("12/12/2019")}
  />,
  <Job
    key={3}
    company="Lorem ipsum dolor sit amet"
    title="Developer"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto beatae corporis cum delectus deserunt dolores eum fuga in inventore itaque, labore minima, nesciunt perspiciatis quia ratione unde, velit veritatis."
    start={new Date("12/12/2019")}
  />,
];

const Career = () => {
  return (
    <>
      {jobs.map((job, index) => (
        <div key={index} className={styles.job}>
          <div className={styles.branch}>
            <CommitPoint active={index === 0} />
          </div>
          {job}
        </div>
      ))}
    </>
  );
};

export default Career;
