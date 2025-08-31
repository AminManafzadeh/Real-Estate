"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  return (
    <button
      onClick={signOut}
      className="flex bg-none border-none mt-5 w-full text-right text-red cursor-pointer"
    >
      <FiLogOut className="text-red text-xl ml-[5px]" />
      خروج
    </button>
  );
}

export default LogoutButton;
