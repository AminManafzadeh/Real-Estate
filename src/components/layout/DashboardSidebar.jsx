import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

async function DashboardSidebar({ children, role, email }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-20 w-full">
      <div className="flex flex-col items-center h-fit py-6 sm:py-[30px] px-4 sm:px-[15px] rounded-[10px] shadow-custom sm:ml-10 w-full sm:w-[220px] mb-6 sm:mb-0">
        <CgProfile className="text-4xl sm:text-5xl text-mainBlue mb-2" />
        <p className="text-gray text-base sm:text-lg font-normal">
          {role === "ADMIN" ? "ادمین" : null}
        </p>
        <p className="text-gray text-base sm:text-lg font-normal mt-3 sm:mt-5">
          {email}
        </p>
        <span className="bg-silver w-full h-[1px] mb-6 sm:mb-[30px]"></span>
        <Link
          className="my-1 sm:my-[5px] font-normal w-full text-sm sm:text-base"
          href="/dashboard"
        >
          حساب کاربری
        </Link>
        <Link
          className="my-1 sm:my-[5px] font-normal w-full text-sm sm:text-base"
          href="/dashboard/my-profiles"
        >
          آگهی های من
        </Link>
        <Link
          className="my-1 sm:my-[5px] font-normal w-full text-sm sm:text-base"
          href="/dashboard/add"
        >
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? (
          <Link
            className="my-1 sm:my-[5px] font-normal w-full text-sm sm:text-base"
            href="/admin"
          >
            در انتظار تایید ...
          </Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
