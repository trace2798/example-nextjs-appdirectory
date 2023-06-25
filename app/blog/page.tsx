import Example from "@/components/Example";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div>Blog page</div>
      <Example/>
    </>
  );
};

export default page;
