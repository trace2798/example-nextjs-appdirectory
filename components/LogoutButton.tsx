"use client";
import { useRouter } from "next/navigation";
import { FC, MouseEventHandler } from "react";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  const router = useRouter();
  const handleLogout: MouseEventHandler<HTMLDivElement> = () => {
    localStorage.clear();
    // Redirect to the login page after logout
    router.push("/");
  };

  return (
    <>
      <div
        onClick={handleLogout}
        className="mt-5 bg-red-800 w-fit px-5 py-3 rounded-xl text-neutral-200 cursor-pointer"
      >
        Logout
      </div>
    </>
  );
};

export default LogoutButton;
