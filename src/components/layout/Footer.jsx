function Footer() {
  return (
    <footer className="flex justify-between p-5 mt-20 mb-5 rounded-[10px] bg-mainBlue text-mainWhite">
      <div className="w-[70%] text-justify ml-[30px]">
        <h3 className="font-semibold text-[1.4rem] mb-[10px]">
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          سامانه خرید و اجاره ملک، بستری آنلاین برای دسترسی سریع و آسان به انواع
          املاک مسکونی، تجاری و اداری است. کاربران می‌توانند بدون واسطه، مشخصات
          ملک مورد نظر را مشاهده و مقایسه کنند. این سامانه با شفافیت اطلاعات و
          صرفه‌جویی در زمان، فرایند خرید و اجاره را ساده‌تر می‌سازد.
        </p>
      </div>
      <div>
        <ul>
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
