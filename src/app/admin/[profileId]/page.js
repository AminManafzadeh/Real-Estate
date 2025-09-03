import DetailsPage from "@/template/DetailsPage";
import {
  getProfileById,
  getUnpublishedProfiles,
} from "@/lib/actions/profile-actions";

export async function generateStaticParams() {
  try {
    const profiles = await getUnpublishedProfiles();
    return profiles?.map((item) => ({ profileId: item._id.toString() }));
  } catch (error) {
    return [];
  }
}

export default async function ProfileDetail({ params }) {
  try {
    const { profileId } = await params;
    const profile = await getProfileById(profileId);

    return (
      <div>
        <DetailsPage data={profile} />
      </div>
    );
  } catch (error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
}
