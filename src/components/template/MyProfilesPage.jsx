import DashboardCard from "@/module/DashboardCard";

function MyProfilesPage({ profiles }) {
  console.log(profiles);

  return (
    <div>
      {profiles.length ? null : (
        <p className="text-red bg-[rgba(219,5,5,0.159)] text-xl py-[10px] px-[15px] rounded-[10px]">
          هیچ آگهی ای ثبت نشده است
        </p>
      )}
      {profiles?.map((item) => (
        <DashboardCard
          key={String(item._id)}
          data={JSON.parse(JSON.stringify(item))}
        />
      ))}
    </div>
  );
}

export default MyProfilesPage;
