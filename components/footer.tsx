import { FC } from "react";
import styles from '../styles/App.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <div className={styles.footer}>
        Learn more with our{" "}
        <u>
          <a href="https://docs.passage.id">Documentation</a>
        </u>{" "}
        and{" "}
        <u>
          <a href="https://github.com/passageidentity">Github</a>
        </u>
        .
      </div>
    </>
  );
};

export default Footer;
