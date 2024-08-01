import EventCard from "@/components/EventListPage/EventCard";
import { getEvents } from "@/lib/getEvents";
import React from "react";

const page = async () => {
  const { events } = await getEvents();
  
  return (
    <div className="container mx-auto grid grid-cols-4 gap-8 mt-6">
      {events.map((event) => (
        <EventCard key={event._d} event={event}></EventCard>
      ))}
    </div>
  );
};

export default page;
