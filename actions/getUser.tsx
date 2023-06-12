import Passage from "@passageidentity/passage-node";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // getServerSideProps runs server-side only and will never execute on the client browser
  // this allows the safe use of a private Passage API Key
  const passage = new Passage({
    appID: process.env.PASSAGE_APP_ID!,
    apiKey: process.env.PASSAGE_API_KEY!,
    authStrategy: "HEADER",
  });
  try {
    const authToken = req.cookies["psg_auth_token"];
    const authRequest = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    };
    const userID = await passage.authenticateRequest(authRequest);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;
      return {
        isAuthorized: true,
        username: identifier,
        appID: passage.appID,
      };
    }
  } catch (error) {
    // authentication failed
  }
  return { isAuthorized: false, username: "", appID: passage.appID };
}
