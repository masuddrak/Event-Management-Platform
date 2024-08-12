"use client";
import { useSession } from 'next-auth/react';
import React from 'react';
import PrimaryBtn from '../button/PrimaryBtn';
import axios from 'axios';

const EventComment = ({id}) => {
    const authInfo = useSession();
    const user = authInfo?.data?.user || {};
   
    console.log(user)
    // comment handel
      const handelReviews = async (e) => {
        e.preventDefault()
        const from = e.target
        const reviewEventID = id
        const rating = from.rating.value
        if (rating < 1 || rating > 5) {
            return ("plase input rating 1 to 5")
        }
        const userName = user?.name
        const reviewEmail = user?.email
        const reviewDate = new Date()
        const comment = from.comment.value
        const reviewInfo = { reviewEventID, rating, userName, reviewEmail, reviewDate, comment,like:0,disllike:0 }
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/eventlist/api/${id}`, reviewInfo)
           
          
        } catch (error) {
           return(error)
        }
  
    }
    return (
        <div>
            <div className="">
                <form onSubmit={handelReviews} className="space-y-3">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Name" className="block ">Rating</label>
                        <input type="number" name="rating" placeholder="Rating" required className="w-full px-2 outline-0 py-2 border-b-[1px] border-gray-400" />
                    </div>
                    
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Name" className="block ">Comment</label>
                        <textarea type="number" name="comment" rows={3} placeholder="comment" required className="w-full px-2 outline-0 py-2 border-b-[1px] border-gray-400" />
                    </div>
                    <div className='w-1/3'>
                        <PrimaryBtn name={"Comment Now"}></PrimaryBtn>
                    </div>
                </form>
                <div></div>
            </div>
        </div>
    );
};

export default EventComment;