import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import englishToPersianNumber from "@/utils/englishToPersian";
import Link from "next/link";

function Card({ data }) {
  const { category, title, location, price, _id } = data;

  const icons = {
    villa: (
      <RiHome3Line className="text-3xl bg-secondBlue text-mainBlue p-[3px] rounded-[5px]" />
    ),
    apartment: (
      <MdApartment className="text-3xl bg-secondBlue text-mainBlue p-[3px] rounded-[5px]" />
    ),
    store: (
      <BiStore className="text-3xl bg-secondBlue text-mainBlue p-[3px] rounded-[5px]" />
    ),
    office: (
      <GiOfficeChair className="text-3xl bg-secondBlue text-mainBlue p-[3px] rounded-[5px]" />
    ),
  };

  return (
    <div className="w-[250px] border-2 border-solid border-secondBlue rounded-[10px] p-[10px] m-[10px]">
      <div>{icons[category]}</div>
      <p className="font-normal my-[10px]">{title}</p>
      <p className="flex text-gray text-sm">
        <HiOutlineLocationMarker className="ml-[5px]" />
        {location}
      </p>
      <span className="text-gray block text-sm font-normal mt-[10px]">
        {englishToPersianNumber(price)} تومان
      </span>
      <Link
        className="flex items-center justify-between mt-5 text-base font-normal text-mainBlue"
        href={`/buy-residential/${_id}`}
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-2xl" />
      </Link>
    </div>
  );
}

export default Card;
