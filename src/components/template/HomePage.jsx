import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa6";
import { services, cities } from "@/constants/strings";

function HomePage() {
  const categoryItems = [
    { title: "خانه ویلایی", name: "villa", id: 1 },
    { title: "آپارتمان", name: "apartment", id: 2 },
    { title: "مغازه", name: "store", id: 3 },
    { title: "دفتر", name: "office", id: 4 },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center rounded-[10px] p-5 my-[100px]">
        <div className="w-full text-center text-mainBlue">
          <h1 className="font-bold text-2xl md:text-4xl mb-[30px]">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className="flex justify-center list-none flex-wrap">
            {services?.map((service) => (
              <li
                className="flex items-center justify-center w-20 m-[10px] bg-lightBlue py-[5px] px-[10px] rounded-[5px]"
                key={service}
              >
                <FiCircle />
                <span className="font-normal mr-[5px] h-5">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-between flex-wrap my-[50px] gap-x-4">
          {categoryItems?.map((item) => (
            <CategoryCard key={item.id} title={item.title} name={item.name} />
          ))}
        </div>

        <div className="my-[100px]">
          <h3 className="font-semibold text-[2rem] text-center text-mainBlue">
            شهر های پر بازدید
          </h3>
          <ul className="flex justify-center gap-4 md:justify-between flex-wrap mt-[50px] list-none">
            {cities?.map((item) => (
              <li
                className="bg-lightBlue text-mainBlue text-xl w-[250px] my-[10px] flex justify-center items-center p-[10px] rounded-[10px]"
                key={item}
              >
                <FaCity />
                <span className="h-[30px] mr-[15px] font-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
