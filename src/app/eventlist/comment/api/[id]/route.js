import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";


import { NextResponse } from "next/server";
export const GET = async (req,{params}) => {
  const db = await connectDB();
  const commentCollection = db.collection("comments");
  try {

    const comments = await commentCollection.find({reviewEventID:params.id}).toArray();
    return NextResponse.json({ comments });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `{dsfdgfh error ${params.id}}`, error });
  }
};