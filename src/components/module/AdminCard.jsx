"use client";

import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

function AdminCard({ data }) {
  const { title, description, location, price, _id } = data;
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setDeleteLoading(true);
    const res = await fetch(`/api/profile/delete/${_id}`, { method: "DELETE" });
    const result = await res.json();
    setDeleteLoading(false);
    if (result?.error) {
      toast.error(result?.error);
    } else {
      toast.success(result?.message);
      router.refresh();
    }
  };

  const handlePublish = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    setLoading(false);
    if (result?.error) {
      toast.error(result?.error);
    } else {
      toast.success(result?.message);
      router.refresh();
    }
  };

  return (
    <div className="border-b-2 border-b-mainBlue pb-[10px] mb-20">
      <h3 className="text-xl font-normal text-mainBlue mb-5">{title}</h3>
      <p className="text-justify mb-5 font-medium">{description}</p>
      <div className="flex mb-5">
        <span className="bg-secondBlue text-mainBlue py-[5px] px-[10px] ml-[15px] rounded-[5px]">
          {location}
        </span>
        <span className="bg-secondBlue text-mainBlue py-[5px] px-[10px] ml-[15px] rounded-[5px]">
          {sp(price)}
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <Link
          href={`/admin/${_id}`}
          className="bg-gray py-[5px] px-[15px] font-normal text-mainWhite border-none  rounded-[5px] cursor-pointer mt-5 transition-all ease-in duration-100 hover:text-[#000]"
        >
          مشاهده جزییات
        </Link>
        <button
          onClick={handlePublish}
          className="bg-green border-none py-[5px] px-[15px] font-normal text-mainWhite rounded-[5px] cursor-pointer mt-5 transition-all ease-in duration-100 hover:text-[#000]"
        >
          {loading ? <Loading loading={loading} size={15} /> : " انتشار"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red border-none py-[5px] px-[15px] font-normal text-mainWhite rounded-[5px] cursor-pointer mt-5 transition-all ease-in duration-100 hover:text-[#000]"
        >
          {deleteLoading ? (
            <Loading loading={deleteLoading} size={15} />
          ) : (
            " حذف"
          )}
        </button>
      </div>
    </div>
  );
}

export default AdminCard;
