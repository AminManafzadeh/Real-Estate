"use server";

import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export async function signupUser(formData) {
  try {
    await connectDB();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      throw new Error("لطفا اطلاعات معتبر وارد کنید");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("این حساب کاربری وجود دارد");
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      email: email,
      password: hashedPassword,
    });

    return { success: true, message: "حساب کاربری ایجاد شد" };
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "مشکلی در سرور رخ داده است");
  }
}

export async function getUserByEmail(email) {
  try {
    await connectDB();
    const user = await User.findOne({ email }).select("-password");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در سرور رخ داده است");
  }
}
