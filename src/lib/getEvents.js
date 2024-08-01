import axios from "axios";
// get alll event
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
// get a single event
export const getSingleEVent = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/api/${id}`
    );
    return res.data;
  } catch (error) {
    return {};
  }
};
// get a sigle comment
export const getCommentEVent = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/comment/api/${id}`
    );
    return res.data;
  } catch (error) {
    return {};
  }
};
// increment comment like
export const getIncrementLike = async (id) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/comment/increment/api/${id}`
    );
    return res.data;
  } catch (error) {
    return {};
  }
};
// dicrement comment like
export const getDicrementLike = async (id) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/comment/dicrement/api/${id}`
    );
    return res.data;
  } catch (error) {
    return {};
  }
};
// dicrement comment like
export const getReplayComment = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/comment/replaycomment/getreplay/api/${id}`
    );
    return res.data;
  } catch (error) {
    return {};
  }
};
