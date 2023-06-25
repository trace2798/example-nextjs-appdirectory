import { Passage } from "@passageidentity/passage-js";

export async function getAuthToken() {
  const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  try {
    const session = passage.getCurrentSession();
    console.log(session, "session");
    const authToken = await session.getAuthToken();
    console.log(authToken, "auth token");
    return {
      authToken,
    };
  } catch (error) {
    console.log(error);
  }
  return { authToken: undefined };
}
