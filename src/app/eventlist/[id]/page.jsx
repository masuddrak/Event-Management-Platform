import { getSingleEVent } from "@/lib/getEvents";
import React from "react";

const page = async ({ params }) => {
  console.log(params.id);
  const { event } = await getSingleEVent(params.id);
  console.log(event);
  return <div>this dynamic page {event?.name}</div>;
};

export default page;
