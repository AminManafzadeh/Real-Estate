function DashboardPage({ createdAt }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 py-6 flex flex-col items-start">
      <h3 className="text-mainBlue font-normal text-xl sm:text-2xl mb-3 sm:mb-5">
        سلام 👋
      </h3>
      <p className="text-sm sm:text-base mb-6 sm:mb-8">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="mt-12 sm:mt-[100px] flex flex-col sm:flex-row bg-[#304ffe18] w-full sm:w-fit py-2 sm:py-[5px] px-3 sm:px-[10px] rounded-[5px] items-start sm:items-center">
        <p className="m-0 font-normal mb-2 sm:mb-0 sm:ml-[10px]">
          تاریخ عضویت:
        </p>
        <span className="text-mainBlue text-sm sm:text-base">
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
