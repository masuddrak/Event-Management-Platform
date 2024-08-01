import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";
export const PATCH = async (req,{params}) => {
  const db = await connectDB();
  const commentCollection = db.collection("comments");
  try {
    const filter = { _id: new ObjectId(params.id)}
    const options = { upsert: true };
    const findData=await commentCollection.findOne(filter)
    const currentLike=findData.like+1
    const udpadeDoc = {
        $set:{like:currentLike}
    }
    const result = await commentCollection.updateOne(filter, udpadeDoc,options)
    return NextResponse.json({ result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `{dsfdgfh error ${params.id}}`, error });
  }
};