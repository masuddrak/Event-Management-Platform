"use client";
import PrimaryBtn from '@/components/button/PrimaryBtn';
import { category } from '@/lib/category';
import axios from 'axios';
import React from 'react';

const page = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const locations = form.locations.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const category = form.category.value;
        const description = form.description.value;
    
        const eventInfo = {
          name,
          locations,
          price,
          ratings:[ratings],
          image1,
          image2,
          category,
          description,
        };
        console.table(eventInfo);
        try {
          // create user
          const res = await axios.post("/addevent/api", eventInfo);
        
          if (res.status === 200) {
            const form = e.target;
            form.reset();
          }
        } catch (error) {
          return(error);
        }
      };
    return (
        <div className="p-20 border-[1px] rounded-md md:w-2/4 mx-auto shadow-md shadow-gray-700 mt-5">
        <h3 className="text-xl font-semibold text-center">Add Event</h3>
        <form onSubmit={handleSubmit} className="w-full mt-12 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Image: 1</label>
              <br />
              <input
                type="text"
                name="image1"
                placeholder="Enter Url"
                className="border-[1px] p-2 rounded-sm w-full  outline-0"
              />
            </div>
            <div>
              <label>Image: 2</label>
              <br />
              <input
                type="text"
                name="image2"
                placeholder="Enter Url"
                className="border-[1px] p-2 rounded-sm w-full  outline-0"
              />
            </div>
          </div>
          <div>
            <label>Category</label>
            <br />
            <select
              name="category"
              className="border-[1px] p-2 rounded-sm w-full  outline-0"
            >
              {category.map((cat) => (
                <option value={cat.name} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
  
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border-[1px] p-2 rounded-sm w-full  outline-0"
            />
          </div>
          <div>
            <label>Locations</label>
            <br />
            <input
              type="text"
              name="locations"
              placeholder="Enter Your locations"
              className="border-[1px] p-2 rounded-sm w-full  outline-0"
            />
          </div>
          <div>
            <label>Ratings</label>
            <br />
            <input
              type="number"
              name="ratings"
              placeholder="Enter Your Ratings"
              className="border-[1px] p-2 rounded-sm w-full  outline-0"
            />
          </div>
          <div>
            <label>Price</label>
            <br />
            <input
              type="number"
              name="price"
              placeholder="Enter Your Price"
              className="border-[1px] p-2 rounded-sm w-full  outline-0"
            />
          </div>
          <div>
            <label>Description</label>
            <br />
            <textarea
              type="text"
              rows="4"
              cols="50"
              name="description"
              placeholder="Enter Your Event Description"
              className="border-[1px] p-2 rounded-sm w-full  outline-0"
            />
          </div>
  
          <div>
            <PrimaryBtn name={"Add Event"}></PrimaryBtn>
          </div>
        </form>
      </div>
    );
};

export default page;