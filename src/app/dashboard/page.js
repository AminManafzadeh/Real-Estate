import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function Dashboard() {
  const session = await getServerSession(authOption);
  const email = session?.user?.email;
  const user = await User.findOne({ email: email });
  console.log(user);
  const createdAt = user.createdAt;

  return (
    <div>
      <DashboardPage createdAt={createdAt} />
    </div>
  );
}

export default Dashboard;
