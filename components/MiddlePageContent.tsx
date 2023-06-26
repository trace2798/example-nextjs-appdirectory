"use client";
import { getAuthToken } from "@/actions/getAuthToken";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface MiddlePageContentProps {}

const MiddlePageContent: FC<MiddlePageContentProps> = ({}) => {
  const [authTokenInfo, setAuthTokenInfo] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      const token = await getAuthToken();
      setAuthTokenInfo(token.authToken);
      setIsLoading(false);
    };

    fetchTokenInfo();
  }, []);

  if (isLoading) {
    // Render loading state if the session information is still being fetched
    return <div>Loading...</div>;
  }

  if (!authTokenInfo) {
    // Render the message if the session doesn't exist
    return (
      <main className="flex justify-center p-24 ">
        <div className="border flex justify-center border-black rounded-xl w-96">
          <div className="p-10 pb-5">
            <div className="font-bold text-2xl mb-5">
              <h1>Unauthorized</h1>
            </div>
            <div className="break-normal"></div>
            <p>
              This page is middleware protected. Should not be visible if user
              is not logged in with valid token.
              <br />
              <Link
                href="/"
                className="underline font-bold hover:text-blue-600 "
              >
                Login to continue.
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }
  return (
    <>
      <div className="w-[98vw]">Your Token:&nbsp;<br/>{authTokenInfo}</div>
    </>
  );
};

export default MiddlePageContent;
