import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";

function BuyResidentialPage({ data }) {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-[30px] px-[15px] rounded-[10px] shadow-custom ml-[40px] w-[220px]">
        <Sidebar />
      </div>

      <div className="w-full flex flex-wrap justify-between">
        {data.length ? null : (
          <p className="bg-secondRed text-red text-xl py-[10px] px-[15px] rounded-[10px] h-[50px]">
            هیچ آگهی ای ثبت نشده است
          </p>
        )}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialPage;
