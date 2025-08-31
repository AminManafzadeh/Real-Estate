import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connections[0].readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to DB ✅");
  } catch (error) {
    console.log("Error in connecting DB ❌");
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting DB ❌" });
  }
}
