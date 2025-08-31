import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

async function DashboardSidebar({ children, role, email }) {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-[30px] px-[15px] rounded-[10px] shadow-custom ml-10 w-[220px]">
        <CgProfile className="text-5xl text-mainBlue" />
        <p className="text-gray text-lg font-normal">
          {role === "ADMIN" ? "ادمین" : null}
        </p>
        <p className="text-gray text-lg font-normal mt-5">{email}</p>
        <span className="bg-silver w-full h-[1px] mb-[30px]"></span>
        <Link className="my-[5px] font-normal w-full" href="/dashboard">
          حساب کاربری
        </Link>
        <Link
          className="my-[5px] font-normal w-full"
          href="/dashboard/my-profiles"
        >
          آگهی های من
        </Link>
        <Link className="my-[5px] font-normal w-full" href="/dashboard/add">
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? (
          <Link className="my-[5px] font-normal w-full" href="/admin">
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
