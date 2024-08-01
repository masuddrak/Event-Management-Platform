"use client";
import Image from "next/image";
import React from "react";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const CommentCard = ({ comment }) => {
    // handel increment like
    const handelIncrementComment=async(like)=>{
        console.log("hello",like)
    }
  return (
    <div className="bg-white shadow-sm shadow-gray-700 p-3 space-y-4">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/image/masud.jpg"
          alt="comment image"
          height={100}
          width={100}
          className="w-7 h-7 rounded-full"
        ></Image>
        <div className="flex gap-3">
          <p>{comment?.userName}</p>

          <p>{comment?.rating}</p>
          <p>{comment?.reviewDate}</p>
        </div>
      </div>
      <div>
        <p>{comment?.comment}</p>
      </div>
      {/* coment action */}
      <div className="flex gap-3">
        <div onClick={()=>handelIncrementComment(1)}  className="flex items-center cursor-pointer">
          <BiSolidLike></BiSolidLike>
          <sup>{comment?.like}</sup>
        </div>
        <div className="flex items-center">
        <BiSolidDislike></BiSolidDislike>
          <sup>{comment?.disllike}</sup>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
