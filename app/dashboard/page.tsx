import { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/App.module.css";
import { getCurrentUser } from "@/hooks/getCurrentUser";

interface DashboardProps {
  appID: string;
}

const Dashboard: NextPage<DashboardProps> = async ({ appID }) => {
  const { props } = await getCurrentUser();
  // console.log(props);

  const authorizedBody = (
    <>
      <p>You successfully signed in with Passage.</p>

      <p>
        Your username is: <b>{props.username}</b>
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
    <div className={styles.mainContainer}>
      <div className={styles.dashboard}>
        <div className={styles.title}>
          {props.isAuthorized ? "Welcome!" : "Unauthorized"}
        </div>
        <div className={styles.message}>
          {props.isAuthorized ? authorizedBody : unauthorizedBody}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
