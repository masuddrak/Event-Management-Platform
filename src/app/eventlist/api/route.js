import { connectDB } from "@/lib/connectDB";

import { NextResponse } from "next/server";
export const GET = async () => {
    const db = await connectDB();
    const alleventCollection = db.collection("allevent");
    try {
        const events = await alleventCollection.find().toArray();
        return NextResponse.json({events})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "No Data Found", error})
    }
};