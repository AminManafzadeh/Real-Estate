"use server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";


export async function createProfile(formData) {
  try {
    await connectDB();

    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("لطفا وارد حساب کاربری خود بشید");
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      throw new Error("حساب کاربری یافت نشد");
    }

    const title = formData.get("title");
    const description = formData.get("description");
    const location = formData.get("location");
    const phone = formData.get("phone");
    const realState = formData.get("realState");
    const price = formData.get("price");
    const constructionDate = formData.get("constructionDate");
    const category = formData.get("category");
    const amenities = formData.get("amenities")
      ? JSON.parse(formData.get("amenities"))
      : [];
    const rules = formData.get("rules")
      ? JSON.parse(formData.get("rules"))
      : [];

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      throw new Error("لطفا اطلاعات معتبر وارد کنید");
    }

    await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: user._id,
    });

    revalidatePath("/dashboard/my-profiles");
    revalidatePath("/buy-residential");
    return { success: true, message: "آگهی جدید اضافه شد" };
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "مشکلی در سرور رخ داده است");
  }
}

export async function updateProfile(profileId, formData) {
  try {
    await connectDB();

    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("لطفا وارد حساب کاربری خود بشید");
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      throw new Error("حساب کاربری یافت نشد");
    }

    const title = formData.get("title");
    const description = formData.get("description");
    const location = formData.get("location");
    const phone = formData.get("phone");
    const realState = formData.get("realState");
    const price = formData.get("price");
    const constructionDate = formData.get("constructionDate");
    const category = formData.get("category");
    const amenities = formData.get("amenities")
      ? JSON.parse(formData.get("amenities"))
      : [];
    const rules = formData.get("rules")
      ? JSON.parse(formData.get("rules"))
      : [];

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      throw new Error("لطفا اطلاعات معتبر وارد کنید");
    }

    const profile = await Profile.findOne({ _id: profileId });
    if (!profile) {
      throw new Error("آگهی یافت نشد");
    }

    if (!user._id.equals(profile.userId)) {
      throw new Error("دسترسی شما به این آگهی محدود شده است");
    }

    await Profile.findByIdAndUpdate(profileId, {
      title,
      description,
      location,
      phone,
      realState,
      price: +price,
      constructionDate,
      amenities,
      rules,
      category,
    });

    revalidatePath("/dashboard/my-profiles");
    revalidatePath("/buy-residential");
    revalidatePath(`/buy-residential/${profileId}`);
    return { success: true, message: "آگهی با موفقیت آپدیت شد" };
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "مشکلی در سرور رخ داده است");
  }
}

export async function deleteProfile(profileId) {
  try {
    await connectDB();

    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("لطفا وارد حساب کاربری خود شوید");
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      throw new Error("حساب کاربری یافت نشد");
    }

    const profile = await Profile.findOne({ _id: profileId });
    if (!profile) {
      throw new Error("آگهی یافت نشد");
    }

    if (!user._id.equals(profile.userId)) {
      throw new Error("دسترسی شما به این آگهی محدود شده است");
    }

    await Profile.deleteOne({ _id: profileId });

    revalidatePath("/dashboard/my-profiles");
    revalidatePath("/buy-residential");
    return { success: true, message: "آگهی مورد نظر حذف شد" };
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "مشکلی در سرور رخ داده است");
  }
}

export async function publishProfile(profileId) {
  try {
    await connectDB();

    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("لطفا وارد حساب کاربری خود شوید");
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user || user.role !== "ADMIN") {
      throw new Error("دسترسی شما محدود است");
    }

    const profile = await Profile.findOne({ _id: profileId });
    if (!profile) {
      throw new Error("آگهی یافت نشد");
    }

    profile.published = true;
    await profile.save();

    revalidatePath("/admin");
    revalidatePath("/buy-residential");
    return { success: true, message: "آگهی منتشر شد" };
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "مشکلی در سرور رخ داده است");
  }
}

export async function getProfiles() {
  try {
    await connectDB();
    const profiles = await Profile.find({ published: true }).select("-userId");
    return JSON.parse(JSON.stringify(profiles));
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در سرور رخ داده است");
  }
}

export async function getProfileById(profileId) {
  try {
    await connectDB();
    const profile = await Profile.findOne({ _id: profileId });
    if (!profile) {
      throw new Error("آگهی یافت نشد");
    }
    return JSON.parse(JSON.stringify(profile));
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در سرور رخ داده است");
  }
}

export async function getPublishedProfileById(profileId) {
  try {
    await connectDB();
    const profile = await Profile.findOne({ _id: profileId, published: true });
    if (!profile) {
      throw new Error("آگهی یافت نشد");
    }
    return JSON.parse(JSON.stringify(profile));
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در سرور رخ داده است");
  }
}

export async function getUserProfiles(email) {
  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("حساب کاربری یافت نشد");
    }

    const profiles = await Profile.find({ userId: user._id });
    return JSON.parse(JSON.stringify(profiles));
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در سرور رخ داده است");
  }
}

export async function getUnpublishedProfiles() {
  try {
    await connectDB();
    const profiles = await Profile.find({ published: false });
    return JSON.parse(JSON.stringify(profiles));
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در سرور رخ داده است");
  }
}
