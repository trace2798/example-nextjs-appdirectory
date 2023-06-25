import { getAuthToken } from "@/actions/getAuthToken";
import { FC } from "react";

interface ExampleProps {}

const Example: FC<ExampleProps> = async ({}) => {
  const { authToken } = await getAuthToken();
  console.log(authToken, "token example component");
  return (
    <>
      <div>Example: {authToken}</div>
    </>
  );
};

export default Example;
