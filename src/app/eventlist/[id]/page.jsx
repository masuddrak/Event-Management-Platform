import CommentCard from "@/components/EventListPage/CommentCard";
import EventComment from "@/components/EventListPage/EventComment";
import { getCommentEVent, getSingleEVent } from "@/lib/getEvents";

import Image from "next/image";

import { IoIosStar } from "react-icons/io";
const page = async ({ params }) => {
  const { event } = await getSingleEVent(params.id);
  const { image1, name, _id, price, ratings, locations } = event || {};
  const { comments } = await getCommentEVent(_id);
  const averageRating =
    ratings?.reduce((partialSum, a) => partialSum + a, 0) / ratings?.length;
  console.log(comments);
  return (
    <div className=" container mx-auto mt-6">
      <div>
        <Image
          src={image1}
          alt=""
          width={200}
          height={200}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-7">
        <div>
          <div className="flex gap-10">
            <div>
              <p>Event: {name}</p>
              <p>Location: {locations}</p>
            </div>
            <div>
              <p>Tikct :${price}</p>
              <p>Rating:{averageRating}</p>
              <p className="flex items-center">
                {ratings}
                {[...Array(parseInt(ratings))].map((rat, index) => (
                  <IoIosStar key={index} className="text-primary"></IoIosStar>
                ))}
              </p>
            </div>
          </div>
          {/* get event comment */}
          <div className="my-5 space-y-4">
            {comments.map((comment) => (
              <CommentCard key={comment._id} comment={comment}></CommentCard>
            ))}
          </div>
          {/* create comment */}
          <EventComment id={_id}></EventComment>
        </div>
        {/*  */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
