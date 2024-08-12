"use client";
import React, { useState } from "react";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";

import { signOut, useSession } from "next-auth/react";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const authInfo = useSession();
  const userInfo = authInfo?.data?.user;
  const navlinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/eventlist",
      name: "Event List",
    },
    {
      path: "/addevent",
      name: "Add Event",
    },
    
  ];
  return (
    <nav className="shadow-lg shadow-gray-500 py-2 sticky bg-white top-0 w-full">
      <div className="flex justify-between container mx-auto items-center">
        <Link href="/" className="font-2xl font-extrabold  ">Event<span className="text-primary">TH</span>che</Link>
        <ul className="flex gap-4">
          {navlinks.map((item) => (
            <Link key={item.path} href={item.path}>
              {item.name}
            </Link>
          ))}
        </ul>
        <div className=" flex gap-4 items-center">
          <div className="flex items-center relative  gap-4">
            <CiSearch className="absolute right-3 "></CiSearch>
            <input type="text" placeholder="Type Event Name" className="border-[1px] border-[#eb3300] px-3 py-1 rounded-sm outline-0" />
          </div>
          {/* <button className="btn btn-outline px-4 py-1 btn-primary rounded-md">
            Appoinment
          </button> */}
          {userInfo ? (
            <div className="relative text-center ">
              <div
                className="cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                <div className="text-4xl text-primary">
                  <IoPersonCircle></IoPersonCircle>
                </div>
              </div>
              {isLogin && (
                <div className="w-[300px]  border-white absolute top-12 right-0 text-xl bg-primary text-white p-5 rounded-md shadow-lg shadow-gray-500">
                  <p>{userInfo.name}</p>
                  <p>{userInfo.email}</p>
                  <button
                    onClick={() => signOut()}
                    className="bg-white text-black px-5 py-2 rounded-md mt-4 text-lg"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className=" px-3 py-1 bg-primary text-white rounded-sm shadow-md shadow-gray-700"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
