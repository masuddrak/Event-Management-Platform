import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";
export const GET = async (req, { params }) => {
  const db = await connectDB();
  const alleventCollection = db.collection("allevent");
  try {
    const event = await alleventCollection.findOne({
      _id: new ObjectId(params?.id),
    });
    return NextResponse.json({ event });
  } catch (error) {

    return NextResponse.json({ message: `{dsfdgfh ${params}}`, error });
  }
};
export const POST = async (req) => {
  const commnet = await req.json();
  const db = await connectDB();
  const commentsCollection = db.collection("comments");
  try {
    const comments = await commentsCollection.insertOne(commnet);
    return NextResponse.json({ comments });
  } catch (error) {
   
    return NextResponse.json({ message: `{dsfdgfh ${params}}`, error });
  }
};
