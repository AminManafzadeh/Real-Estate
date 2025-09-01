function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 mt-5 mb-4 sm:mb-5 rounded-[10px] bg-mainBlue text-mainWhite w-full">
      <div className="w-full sm:w-[70%] text-justify mb-4 sm:mb-0 sm:ml-[30px]">
        <h3 className="font-semibold text-base sm:text-[1.4rem] mb-2 sm:mb-[10px]">
          سامانه خرید و اجاره ملک
        </h3>
        <p className="text-xs sm:text-sm">
          سامانه خرید و اجاره ملک، بستری آنلاین برای دسترسی سریع و آسان به انواع
          املاک مسکونی، تجاری و اداری است. کاربران می‌توانند بدون واسطه، مشخصات
          ملک مورد نظر را مشاهده و مقایسه کنند. این سامانه با شفافیت اطلاعات و
          صرفه‌جویی در زمان، فرایند خرید و اجاره را ساده‌تر می‌سازد.
        </p>
      </div>
      <div className="w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-xs sm:text-base">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
