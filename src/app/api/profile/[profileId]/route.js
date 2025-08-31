import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { profileId } = await params;
  try {
    await connectDB();

    const profile = await Profile.findById(profileId).lean();
    if (!profile) {
      return NextResponse.json(
        { message: "پروفایل پیدا نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
