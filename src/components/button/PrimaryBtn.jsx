import React from 'react';

const PrimaryBtn = ({name}) => {
    return (
        <button className="border-[1px] p-2 rounded-md w-full outline-0 bg-primary text-white font-semibold">{name}</button>
    );
};

export default PrimaryBtn;