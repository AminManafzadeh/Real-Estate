import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";

function BuyResidentialPage({ data }) {
  return (
    <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between mt-8 sm:mt-20 w-full max-w-screen-lg mx-auto px-2 sm:px-8">
      <div className="flex flex-col items-center h-fit py-4 sm:py-[30px] px-3 sm:px-[15px] rounded-[10px] shadow-custom sm:ml-[40px] w-full sm:w-[220px] mb-6 sm:mb-0">
        <Sidebar />
      </div>

      <div className="w-full flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 justify-center">
        {data.length ? null : (
          <p className="bg-secondRed text-red text-base sm:text-xl py-2 sm:py-[10px] px-3 sm:px-[15px] rounded-[10px] w-full text-center mb-4">
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
