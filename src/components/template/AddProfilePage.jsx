"use client";

import CutomDatePicker from "@/module/CutomDatePicker";
import Loading from "@/module/Loading";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";
import { createProfile, updateProfile } from "@/lib/actions/profile-actions";

function AddProfilePage({ data }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    startTransition(async () => {
      try {
        const formData = new FormData();
        Object.keys(profileData).forEach((key) => {
          if (key === "amenities" || key === "rules") {
            formData.append(key, JSON.stringify(profileData[key]));
          } else {
            formData.append(key, profileData[key]);
          }
        });

        const result = await createProfile(formData);
        toast.success(result.message);
        router.push("/dashboard/my-profiles");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    });
  };

  const handleEdit = async () => {
    setLoading(true);

    startTransition(async () => {
      try {
        const formData = new FormData();
        Object.keys(profileData).forEach((key) => {
          if (key === "amenities" || key === "rules") {
            formData.append(key, JSON.stringify(profileData[key]));
          } else {
            formData.append(key, profileData[key]);
          }
        });

        const result = await updateProfile(data._id, formData);
        toast.success(result.message);
        router.push("/dashboard/my-profiles");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex flex-col mb-[150px]">
      <h3 className="text-2xl font-normal mb-20 w-full bg-[#304ffe18] text-mainBlue rounded-[10px] py-[10px] px-[15px]">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="توضیحات "
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CutomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading || isPending ? (
        <Loading loading={loading || isPending} size="40" />
      ) : data ? (
        <button
          onClick={handleEdit}
          disabled={loading || isPending}
          className="border-none bg-mainBlue text-mainWhite rounded-[5px] transition-all ease-in duration-100 cursor-pointer p-[10px] hover:opacity-90 disabled:opacity-50"
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={loading || isPending}
          className="border-none bg-mainBlue text-mainWhite rounded-[5px] transition-all ease-in duration-100 cursor-pointer p-[10px] hover:opacity-90 disabled:opacity-50"
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
