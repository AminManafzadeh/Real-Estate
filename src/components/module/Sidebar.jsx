import Link from "next/link";
import { HiFilter } from "react-icons/hi";

function Sidebar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];

  return (
    <div className="flex flex-col">
      <p className="flex text-xl font-normal">
        <HiFilter className="ml-[5px] text-xl text-mainBlue" /> دسته بندی
      </p>

      <Link className="text-gray m-[5px]" href="/buy-residential">
        همه
      </Link>
      {queries?.map((item, index) => (
        <Link
          key={index}
          className="text-gray m-[5px]"
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(item) },
          }}
        >
          {Object.values(item)}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
