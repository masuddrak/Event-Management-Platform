import { connectDB } from "@/lib/connectDB";

import { NextResponse } from "next/server";
export const POST = async (request) => {
  const newReplay = await request.json();
  try {
    const db = await connectDB();
    const replayCommmentCollection = db.collection("repalycomment");
    
    const resp = await replayCommmentCollection.insertOne(newReplay);
    
    return NextResponse.json({ message: "peplay Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};