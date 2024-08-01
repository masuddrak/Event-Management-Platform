"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
      event.target.reset();
    }
  };

  return (
    <div className="p-20 border-[1px] rounded-md md:w-2/4 mx-auto shadow-lg shadow-gray-700">
    <h3 className="text-xl font-semibold text-center">Sign Up</h3>
    <form className="w-full mt-12 space-y-4" onSubmit={handleSignUp}>
      <div className="">
        <label htmlFor="" className="">
          Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Your NName"
          className="border-[1px] p-2 rounded-sm w-full  outline-0"
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter Your Email"
          className="border-[1px] p-2 rounded-sm w-full  outline-0"
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Your Password"
          className="border-[1px] p-2 rounded-sm w-full  outline-0"
        />
      </div>

      <div>
        <input
          type="submit"
          value="Sign Up"
          className="border-[1px] p-2 cursor-pointer rounded-md w-full outline-0 bg-primary text-white font-semibold "
        />
      </div>
    </form>
    
    <div className="flex mt-4">
      <p>Are you ne</p>
      <Link href="/login" className="underline">Login Now</Link>
    </div>
  </div>
  );
};

export default SignUpPage;
