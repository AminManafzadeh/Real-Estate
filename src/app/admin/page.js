import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/lib/actions/auth-actions";
import { getUnpublishedProfiles } from "@/lib/actions/profile-actions";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";

export const metadata = {
  title: "پنل ادمین املاک | پروژه املاک",
};

async function Admin() {
  try {
    const session = await getServerSession(authOption);
    if (!session) redirect("/signin");

    const user = await getUserByEmail(session.user.email);
    if (user.role !== "ADMIN") redirect("/dashboard");

    const profiles = await getUnpublishedProfiles();

    return (
      <DashboardSidebar role={user?.role} email={user?.email}>
        <AdminPage profiles={profiles} />
      </DashboardSidebar>
    );
  } catch (error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
}

export default Admin;
