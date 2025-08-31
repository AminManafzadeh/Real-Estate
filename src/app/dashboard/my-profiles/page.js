import { authOption } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProfilesPage from "@/template/MyProfilesPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOption);
  console.log(session);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  console.log(user);

  return (
    <div>
      <MyProfilesPage profiles={user.profiles} />
    </div>
  );
}

export default MyProfiles;
