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
    <div className="flex mt-[60px]">
      <div className="w-full">
        <h1 className="text-mainBlue text-xl font-normal mb-[10px]">{title}</h1>
        <span className="flex items-start h-[15px] mb-[50px] text-gray">
          <HiOutlineLocationMarker className="text-xl ml-[5px]" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-[50px]">{description}</p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>

      <div className="w-[250px] mr-10">
        <div className="shadow-custom p-[10px] rounded-[10px] mb-5 flex flex-col items-center">
          <SiHomebridge className="text-5xl text-mainBlue mt-[10px] mb-5" />
          <p className="text-lg font-normal">املاک {realState}</p>
          <span className="flex items-center text-gray mt-5">
            <AiOutlinePhone className="text-2xl m-0 ml-[5px] text-gray" />
            {e2p(phone)}
          </span>
        </div>

        <ShareButton id={data._id} />

        <div className="shadow-custom p-[10px] rounded-[10px] mb-5 flex flex-col items-center pt-5">
          <p className="flex items-center text-gray mb-5 h-5">
            <span className="text-2xl ml-[5px] text-mainBlue">
              {icons[category]}
            </span>{" "}
            <span>{categories[category]}</span>
          </p>
          <p className="flex items-center text-gray mb-5 h-5">
            {englishToPersianNumber(price)} تومان
          </p>
          <p className="flex items-center text-gray mb-5 h-5">
            <BiCalendarCheck className="text-[1.3rem] ml-[5px] text-mainBlue" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
