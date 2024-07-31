import React from "react";
const Banner = () => {
  return (
    <div className="min-h-[50vh] banner md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover  flex justify-center items-cente text-white items-center">
      <div className="space-y-4">
        <div className="text-center space-y-3">
          <h3 className="text-5xl font-bold">Find Nearby Location</h3>
          <p className="text-4xl ">
            Explore top-rated attractions, activities and more!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex gap">
            <input type="text" placeholder="Type Country Name" className="px-7 py-4 text-black  outline-0" />
            <button className="px-7 py-4 bg-primary">Find Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
