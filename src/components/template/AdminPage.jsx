import AdminCard from "@/module/AdminCard";

function AdminPage({ profiles }) {
  if (!profiles.length)
    return (
      <p className="bg-secondRed text-red text-xl py-[10px] px-[15px] rounded-[10px]">
        هیچ پروفایلی پیدا نشد
      </p>
    );

  return (
    <div>
      {profiles?.map((item) => (
        <AdminCard key={item._id} data={item} />
      ))}
    </div>
  );
}

export default AdminPage;
