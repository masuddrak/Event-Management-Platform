import Link from 'next/link';
import React from 'react';

const EventCard = ({event}) => {
    const {image1,name,_id}=event
    return (
        <Link href={`/eventlist/${_id}`}>
            <img src={image1} alt="" />
            <p>{name}</p>
            hhj
        </Link>
    );
};

export default EventCard;