import { getEvents } from "@/lib/getEvents";
import React from "react";

const page = async () => {
  const { events } = await getEvents();
  console.log(events);
  return (
    <div>
      {events.map((event) => (
        <div key={event._d}>
            <img src={event?.image1} alt="" />
            <p>{event.name}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
