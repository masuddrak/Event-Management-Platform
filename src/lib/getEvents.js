import axios from "axios";

export const getEvents = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/api`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};