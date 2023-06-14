// import { Passage, PassageUserInfo } from "@passageidentity/passage-js";

// interface GetSessionInfoResult {
//   userInfo: PassageUserInfo | undefined;
// }

// export async function getSessionInfo(): Promise<GetSessionInfoResult> {
//   const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
//   try {
//     const session = passage.getCurrentSession();
//     const authToken = await session.getAuthToken();
//     console.log(authToken, "authToken");
//     const user = passage.getCurrentUser();
//     const userInfo = await user.userInfo();
//     return {
//       userInfo
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       userInfo: undefined
//     };
//   }
// }

import { Passage } from "@passageidentity/passage-js";

export interface PassageUserInfo {
  email: string;
  created_at: string;
}

export async function getSessionInfo() {
  const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  try {
    const user = passage.getCurrentUser();
    const userInfo = await user.userInfo();
    console.log(userInfo);
    return {
      userInfo,
    };
  } catch (error) {
    console.log(error);
  }
  return { userInfo: undefined };
}
