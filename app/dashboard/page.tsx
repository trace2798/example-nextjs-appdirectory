import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import styles from "../../styles/App.module.css";
import DashboardContent from "@/components/DashboardContent";
import getUser from "@/actions/getUser";
import { NextApiRequest, NextApiResponse } from "next";

interface DashboardProps {
  isAuthorized: boolean;
  username: string;
  appID: string;
}

const Dashboard: NextPage<DashboardProps> = ({ isAuthorized, username, appID }) => {
  return (
    <>
      <DashboardContent
        username={username}
        appID={appID}
        isAuthorized={isAuthorized}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async (
  context: GetServerSidePropsContext
) => {
  // Obtain req and res objects from the context
  const { req, res } = context;

  // Create a new NextApiRequest object
  const nextReq: NextApiRequest = Object.assign(req, {
    cookies: req.cookies || {}, // Ensure cookies property is present
  });

  // Call getUser function with the new NextApiRequest object
  const { isAuthorized, username, appID } = await getUser(nextReq, res);

  return {
    props: {
      isAuthorized,
      username,
      appID,
    },
  };
};

export default Dashboard;
