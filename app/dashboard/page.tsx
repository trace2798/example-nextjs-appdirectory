import { NextPage } from "next";
import Link from "next/link";
import { getCurrentUser } from "@/actions/getCurrentUser";
import LogoutButton from "@/components/LogoutButton";
// import { Passage } from "@passageidentity/passage-js";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = async ({}) => {
  const { props } = await getCurrentUser();
  // const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  // const session = passage.getCurrentSession();
  // const authToken = await session.getAuthToken();
  // console.log(session, "session");
  // // const handlelogout = () => {
  // //   session.signOut();
  // // };
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
                {/* <div onClick={handlelogout}>Logout</div> */}
                <LogoutButton />
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
