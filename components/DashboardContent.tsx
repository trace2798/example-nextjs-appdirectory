"use client";
import { FC, useEffect } from "react";
import styles from "../styles/App.module.css";
import Link from "next/link";


interface DashboardContentProps {
  isAuthorized: boolean;
  username: string;
  appID: string;
}

const DashboardContent: FC<DashboardContentProps> = ({isAuthorized, username, appID}) => {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-profile");
  }, []);

  const authorizedBody = (
    <>
      <p>You successfully signed in with Passage.</p>

      <p>
        Your username is: <b>{username}</b>
      </p>

      <p>
        <passage-profile app-id={appID}></passage-profile>
      </p>
    </>
  );

  const unauthorizedBody = (
    <>
      You have not logged in and cannot view the dashboard.
      <br /> <br />
      <Link href="/" className={styles.link}>
        Login to continue.
      </Link>
    </>
  );

  return (
    <>
      <>
        <div className={styles.mainContainer}>
          <div className={styles.dashboard}>
            <div className={styles.title}>
              {isAuthorized ? "Welcome!" : "Unauthorized"}
            </div>
            <div className={styles.message}>
              {isAuthorized ? authorizedBody : unauthorizedBody}
            </div>
          </div>
        </div>
      </>
    </>
  );
};



export default DashboardContent;
