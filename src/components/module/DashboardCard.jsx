"use client";

import Card from "@/module/Card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Loading from "./Loading";

function DashboardCard({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    router.push(`/dashboard/my-profiles/${data?._id}`);
  };

  const handleDelete = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data?._id}`, {
      method: "DELETE",
    });
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
    <div className="flex border-2 border-solid border-secondBlue rounded-[15px] mb-5">
      <Card data={data} />
      <div className="flex items-end justify-between p-[10px] w-full">
        <button
          onClick={handleEdit}
          className="flex justify-center items-center w-[48%] bg-mainWhite cursor-pointer h-10 rounded-lg border border-solid border-green text-green "
        >
          ویرایش <FiEdit className="text-lg mr-[10px]" />
        </button>
        <button
          onClick={handleDelete}
          className="flex justify-center items-center w-[48%] bg-mainWhite cursor-pointer h-10 rounded-lg border border-solid border-red text-red "
        >
          {loading ? (
            <Loading loading={loading} size={25} />
          ) : (
            <>
              حذف آگهی <AiOutlineDelete className="text-lg mr-[10px]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
