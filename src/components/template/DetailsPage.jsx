import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import { e2p } from "@/utils/replaceNumber";
import englishToPersianNumber from "@/utils/englishToPersian";
import ShareButton from "@/module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";

function DetailsPage({ data }) {
  const {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  } = data || {};

  console.log(data);
  return (
    <div className="flex flex-col sm:flex-row mt-8 sm:mt-[60px] w-full max-w-screen-lg mx-auto px-2 sm:px-8">
      <div className="w-full">
        <h1 className="text-mainBlue text-lg sm:text-xl font-normal mb-2 sm:mb-[10px]">
          {title}
        </h1>
        <span className="flex items-start h-[15px] mb-6 sm:mb-[50px] text-gray text-sm sm:text-base">
          <HiOutlineLocationMarker className="text-lg sm:text-xl ml-[5px]" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-6 sm:mb-[50px] text-sm sm:text-base">
          {description}
        </p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>

      <div className="w-full sm:w-[250px] sm:mr-10 mt-6 sm:mt-0 flex flex-col gap-4">
        <div className="shadow-custom p-4 sm:p-[10px] rounded-[10px] mb-4 sm:mb-5 flex flex-col items-center">
          <SiHomebridge className="text-4xl sm:text-5xl text-mainBlue mt-2 sm:mt-[10px] mb-3 sm:mb-5" />
          <p className="text-base sm:text-lg font-normal">املاک {realState}</p>
          <span className="flex items-center text-gray mt-3 sm:mt-5 text-sm sm:text-base">
            <AiOutlinePhone className="text-xl sm:text-2xl m-0 ml-[5px] text-gray" />
            {e2p(phone)}
          </span>
        </div>

        <ShareButton id={data._id} />

        <div className="shadow-custom p-4 sm:p-[10px] rounded-[10px] mb-4 sm:mb-5 flex flex-col items-center pt-3 sm:pt-5">
          <p className="flex items-center text-gray mb-3 sm:mb-5 h-5 text-sm sm:text-base">
            <span className="text-xl sm:text-2xl ml-[5px] text-mainBlue">
              {icons[category]}
            </span>{" "}
            <span>{categories[category]}</span>
          </p>
          <p className="flex items-center text-gray mb-3 sm:mb-5 h-5 text-sm sm:text-base">
            {englishToPersianNumber(price)} تومان
          </p>
          <p className="flex items-center text-gray mb-3 sm:mb-5 h-5 text-sm sm:text-base">
            <BiCalendarCheck className="text-base sm:text-[1.3rem] ml-[5px] text-mainBlue" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
