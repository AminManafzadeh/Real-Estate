import { authOption } from "@/app/api/auth/[...nextauth]/route";
import MyProfilesPage from "@/template/MyProfilesPage";
import { getServerSession } from "next-auth";
import { getUserProfiles } from "@/lib/actions/profile-actions";

async function MyProfiles() {
  try {
    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("لطفا وارد حساب کاربری خود شوید");
    }

    const profiles = await getUserProfiles(session.user.email);

    return (
      <div>
        <MyProfilesPage profiles={profiles} />
      </div>
    );
  } catch (error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
}

export default MyProfiles;
