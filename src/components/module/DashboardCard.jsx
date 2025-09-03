"use client";

import Card from "@/module/Card";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Loading from "./Loading";
import { deleteProfile } from "@/lib/actions/profile-actions";

function DashboardCard({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleEdit = () => {
    router.push(`/dashboard/my-profiles/${data?._id}`);
  };

  const handleDelete = async () => {
    setLoading(true);

    startTransition(async () => {
      try {
        const result = await deleteProfile(data?._id);
        toast.success(result.message);
        router.refresh();
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex items-center flex-col sm:items-end sm:flex-row border-2 border-solid border-secondBlue rounded-[15px] mb-5 p-3">
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
          disabled={loading || isPending}
          className="flex justify-center items-center w-[48%] bg-mainWhite cursor-pointer h-10 rounded-lg border border-solid border-red text-red disabled:opacity-50"
        >
          {loading || isPending ? (
            <Loading loading={loading || isPending} size={25} />
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
