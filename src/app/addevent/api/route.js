import { connectDB } from "@/lib/connectDB";

import { NextResponse } from "next/server";
export const POST = async (request) => {
  const newEvent = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("allevent");
    
    const resp = await userCollection.insertOne(newEvent);
    
    return NextResponse.json({ message: "event Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};