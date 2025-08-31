import DetailsPage from "@/template/DetailsPage";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXTAUTH_URI}/api/profile`, {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("مشکلی پیش آمده");
  const { data } = await res.json();

  return data?.map((item) => ({ profileId: item._id.toString() }));
}

export async function ProfileDetail({ params }) {
  const { profileId } = await params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URI}/api/profile/${profileId}`,
    { cache: "force-cache", next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return <h3>مشکلی پیش آمده است</h3>;
  }

  const profile = await res.json();

  return (
    <div>
      <DetailsPage data={profile} />
    </div>
  );
}

export default ProfileDetail;
