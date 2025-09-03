import { getProfileById } from "@/lib/actions/profile-actions";
import AddProfilePage from "@/template/AddProfilePage";

async function Edit({ params }) {
  try {
    const { profileId } = await params;
    const profile = await getProfileById(profileId);

    return <AddProfilePage data={profile} />;
  } catch (error) {
    return <h3>مشکلی پیش آمده لطفا دوباره امتحان کنید ...</h3>;
  }
}

export default Edit;
