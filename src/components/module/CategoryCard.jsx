import Image from "next/image";
import Link from "next/link";

function CategoryCard({ name, title }) {
  return (
    <div className="shadow-custom rounded-[15px] overflow-hidden p-[10px] transition-all ease-in duration-100 my-[10px] hover:-rotate-6">
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p className="text-xl font-normal text-mainBlue text-center mt-[10px] mb-[5px]">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard;
