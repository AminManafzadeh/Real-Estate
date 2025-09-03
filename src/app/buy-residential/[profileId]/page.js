import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import {
  getPublishedProfileById,
  getProfiles,
} from "@/lib/actions/profile-actions";

export async function generateStaticParams() {
  try {
    const profiles = await getProfiles();
    return profiles.map((profile) => ({
      profileId: profile._id.toString(),
    }));
  } catch (error) {
    return [];
  }
}

export default async function ProfileDetail({ params }) {
  try {
    const { profileId } = params;
    const profile = await getPublishedProfileById(profileId);

    return <DetailsPage data={profile} />;
  } catch (error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
}

export async function generateMetedata({ params }) {
  const profileId = await params;

  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  return { title: profile.title, description: profile.description };
}
