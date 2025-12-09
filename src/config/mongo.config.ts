import mongoose from "mongoose";

export async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/pos_sync");
  console.log("MongoDB Connected");
}
