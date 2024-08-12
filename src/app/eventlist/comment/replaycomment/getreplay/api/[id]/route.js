import { connectDB } from "@/lib/connectDB";

import { NextResponse } from "next/server";
export const GET = async (req,{params}) => {
  const db = await connectDB();
  const replayComentCollection = db.collection("repalycomment");
  try {

    const comments = await replayComentCollection.find({replayId:params.id}).toArray();
    return NextResponse.json({ comments });
  } catch (error) {
    
    return NextResponse.json({ message: `{dsfdgfh error ${params.id}}`, error });
  }
};