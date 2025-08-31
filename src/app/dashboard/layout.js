import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export const metadata = {
  title: "پنل کاربری املاک | پروژه املاک",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOption);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session?.user?.email });
  if (!user) return <h3>مشکلی پیش آمده است</h3>;

  return (
    <div>
      <DashboardSidebar role={user?.role} email={user?.email}>
        {children}
      </DashboardSidebar>
    </div>
  );
}

export default DashboardLayout;
