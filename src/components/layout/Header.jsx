"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

function Header() {
  const { data, status } = useSession();
  console.log(status);

  const handleLogout = () => {
    signOut();
  };

  return (
    <header className="flex justify-between items-center p-5 my-5 rounded-[10px] bg-mainBlue text-mainWhite">
      <div>
        <ul className="list-none flex gap-x-7 sm:gap-x-6">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>

          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>

      {data ? (
        <div className="flex">
          <Link
            onClick={handleLogout}
            className="flex items-center ml-4 bg-mainWhite text-mainBlue py-1 px-2 rounded-[5px] transition-all ease-in duration-100 hover:bg-mainBlue hover:text-mainWhite"
            href="/signin"
          >
            <LuLogOut className="w-6 h-6" />
            <span className="mr-[5px]">خروج</span>
          </Link>
          <Link
            className="flex items-center bg-mainWhite text-mainBlue py-1 px-2 rounded-[5px] transition-all ease-in duration-100 hover:bg-mainBlue hover:text-mainWhite"
            href="/dashboard"
          >
            <FaUserAlt className="w-6 h-6" />
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="flex items-center bg-mainWhite text-mainBlue py-1 px-2 rounded-[5px] transition-all ease-in duration-100 hover:bg-mainBlue hover:text-mainWhite"
            href="/signin"
          >
            <FiLogIn className="w-6 h-6" />
            <span className="mr-[5px]">ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
