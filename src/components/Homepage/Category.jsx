import { category } from "@/lib/category";
import React from "react";

const Category = () => {
  return (
    <div className="space-y-10">
        <article>
            <h3 className="text-3xl font-semibold text-center">POPULAR CATEGORIES</h3>
            <hr className="h-[7px] bg-primary w-20 mx-auto"/>
        </article>
      <div className="grid grid-cols-3 gap-10">
        {category.map((cat) => (
          <h3
            key={cat.id}
            className="text-4xl font-semibold p-10 shadow-md shadow-gray-800 text-center bg-primary text-white rounded-md"
          >
            {cat.name}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Category;
