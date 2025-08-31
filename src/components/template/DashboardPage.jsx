function DashboardPage({ createdAt }) {
  return (
    <div className="">
      <h3 className="text-mainBlue font-normal text-2xl mb-5">سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className="mt-[100px] flex bg-[#304ffe18] w-fit py-[5px] px-[10px] rounded-[5px]">
        <p className="m-0 font-normal ml-[10px]">تاریخ عضویت:</p>
        <span className="text-mainBlue">
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
