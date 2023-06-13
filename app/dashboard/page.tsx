import { NextPage } from "next";
import Link from "next/link";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface DashboardProps {
  appID: string;
}

const Dashboard: NextPage<DashboardProps> = async ({ appID }) => {
  const { props } = await getCurrentUser();
  // console.log(props);

  return (
    <main className="flex justify-center p-24 ">
      <div className="border flex justify-center border-black rounded-xl w-96">
        <div className="p-10 pb-5">
          <div className="font-bold text-2xl mb-5">
            {props.isAuthorized ? "Welcome!" : "Unauthorized"}
          </div>
          <div className="break-normal">
            {props.isAuthorized ? (
              <>
                <p>
                  You successfully signed in with Passage.
                  <br />
                  Your username is: <b>{props.username}</b>
                </p>
              </>
            ) : (
              <>
                You have not logged in and cannot view the dashboard.
                <br /> <br />
                <Link
                  href="/"
                  className="underline font-bold hover:text-blue-600 "
                >
                  Login to continue.
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
