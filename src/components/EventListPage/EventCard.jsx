import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ event }) => {
  const { image1, name, _id, price, ratings, locations } = event;
  console.log(ratings);
  const averageRating =
    ratings.reduce((partialSum, a) => partialSum + a, 0) / ratings.length;
  return (
    <Link href={`/eventlist/${_id}`}>
      <Image src={image1} alt="" width={200} height={200} className="w-full h-full" />
      <div className="flex justify-between">
        <div>
          <p>Event: {name}</p>
          <p>Location: {locations}</p>
        </div>
        <div>
          <p>Tikct :${price}</p>
          <p>Rating:{averageRating}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
