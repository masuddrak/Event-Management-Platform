"use client";
import { getDicrementLike, getIncrementLike } from "@/lib/getEvents";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { FaReply } from "react-icons/fa";
import ReplayCommentCard from "./ReplayCommentCard";

const CommentCard = ({ comment }) => {
  const [isActiveFrom, setIsActiveFrom] = useState(false);
  const [textareaValue, setTextAreaValue] = useState("");
  const authInfo = useSession();
  const user = authInfo?.data?.user || {};
  // handel increment like
  const handelIncrementComment = async (id) => {
    await getIncrementLike(id);
    console.log("hello", id);
  };
  // dislike comment
  const handelDicrementComment = async (id) => {
    await getDicrementLike(id);
    console.log("hello", id);
  };
  // reaply comment
  const handelReplayComment = async (id) => {
    const reolayComment = textareaValue;
    const replayId = comment?._id;
    const replayUser = user?.name;
    const commentInfo = { reolayComment, replayId, replayUser };

    try {
      // create user
      const res = await axios.post(
        "/eventlist/comment/replaycomment/api",
        commentInfo
      );
      console.log(res);
      if (res.status === 200) {
        const form = e.target;
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
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
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            onClick={() => handelIncrementComment(comment?._id)}
            className="flex items-center cursor-pointer"
          >
            <BiSolidLike></BiSolidLike>
            <sup>{comment?.like}</sup>
          </div>
          <div
            onClick={() => handelDicrementComment(comment?._id)}
            className="flex items-center cursor-pointer"
          >
            <BiSolidDislike></BiSolidDislike>
            <sup>{comment?.disllike}</sup>
          </div>
        </div>
        {/* repaly comment */}
        <div className="relative">
          {/* <div>
            <ReplayCommentCard id={comment?._id}></ReplayCommentCard>
          </div> */}
          {isActiveFrom && (
            <div className="absolute bottom-0 right-0 border-1">
              <textarea
                name=""
                id=""
                placeholder="Type Your comment"
                className="border-[1px] border-[#eb3300] px-3 py-1 rounded-sm outline-0"
                onChange={(e) => setTextAreaValue(e.target.value)}
              ></textarea>
              <br />
              <div className="flex justify-between">
                <button
                  onClick={() => handelReplayComment(comment?._id)}
                  type="submit"
                  className="bg-green-900 text-white px-2 cursor-pointer"
                >
                  replay
                </button>
                <button
                  onClick={() => setIsActiveFrom(!isActiveFrom)}
                  type="submit"
                  className="bg-[#eb3300] text-white px-2 cursor-pointer"
                >
                  cencle
                </button>
              </div>
            </div>
          )}

          <FaReply onClick={() => setIsActiveFrom(!isActiveFrom)}></FaReply>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
