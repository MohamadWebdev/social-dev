"use client";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import { Button } from "@/components/ui/button";
import { MdNotificationsActive } from "react-icons/md";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Hr from "./Hr";
import { useState } from "react";

const UsersideHeader = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="usersideHeader z-[15] relative sm:px-0 px-3">
      <div
        className={`flex items-center absolute top-0 left-0 justify-center w-full h-screen bg-white sm:hidden flex-col gap-5 ${
          active ? "flex" : "hidden"
        }`}
      >
        <AiFillCloseSquare onClick={() => setActive(false)} className="text-[60px] text-gray-800 absolute top-0 left-0 cursor-pointer" />

        <Button className="bg-gray-800 hover:bg-white border-[2px] hover:text-gray-800 hover:font-bold border-gray-800 text-xl mr-2 w-[200px] h-[60px]">
          Login
        </Button>

        <Button className="bg-gray-800 flex-col hover:bg-white border-[2px] hover:text-gray-800 hover:font-bold border-gray-800 text-xl mr-2 w-[200px] h-[60px]">
          Admin Panel
        </Button>
      </div>

      <div className="flex items-center justify-between w-full h-full">
        <Link href={"/"} className="h-full w-auto ">
          <Image src={logo} alt="logo" className="h-full w-full" />
        </Link>

        <div className="h-[50px] justify-end items-center md:gap-7 gap-5 flex">
          <div className="max-w-[300px] w-full ml-7 relative flex-col h-full md:flex hidden new-underline">
            <input
              className="flex h-full w-full rounded-md border-[2px]
              bg-transparent px-3 py-1 text-xl
              file:border-0 font-bold
              file:bg-transparent file:text-sm file:font-medium
              placeholder:text-muted-foreground relative text-gray-600
              focus-visible:ring-ring disabled:cursor-not-allowed
              disabled:opacity-50 pl-8 outline-none z-10 border-transparent"
              placeholder="Search"
            />

            <FaSearch className="absolute text-gray-600 z-0 h-full text-3xl inset-y-0 left-0 flex items-center pl-3 pointer-events-none" />
          </div>

          <Dialog>
            <DialogTrigger className="md:hidden block text-white">
              <FaSearch className="bg-gray-800 hover:bg-white border-[2px] border-gray-800 w-11 h-11 hover:text-gray-800 transition p-[10px] rounded-full text-white" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>

              <div className="w-full relative h-[50px]">
                <input
                  className="flex h-full w-full rounded-md border
                  border-input bg-transparent px-3 py-1 text-sm
                  shadow-sm transition-colors file:border-0
                  file:bg-transparent file:text-sm file:font-medium
                  placeholder:text-muted-foreground relative
                  focus-visible:ring-ring disabled:cursor-not-allowed
                  disabled:opacity-50 pl-8 outline-none z-10"
                  placeholder="Search"
                />

                <FaSearch className="absolute text-gray-600 z-0 h-full text-3xl inset-y-0 left-0 flex items-center pl-3 pointer-events-none" />
              </div>
            </DialogContent>
          </Dialog>

          <button className="hover:bg-gray-800 hover:border-transparent transition hover:!text-white border-neutral-800 border-[2px] md:rounded-md rounded-full font-extrabold text-lg text-gray-700 flex gap-2 items-center md:h-[100%] p-2 md:px-5">
            <MdNotificationsActive className="text-2xl" />
            <span className="hidden md:block">Notifications</span>
          </button>

          <PiListFill
            className="bg-gray-800 hover:bg-white border-[2px] border-gray-800 w-11 h-11 hover:text-gray-800 transition p-[10px] rounded-full text-white sm:hidden flex cursor-pointer"
            onClick={() => setActive(e => !e)}
          />

          <Button className="bg-gray-800 hidden sm:block hover:bg-white border-[2px] hover:text-gray-800 hover:font-bold border-gray-800 text-xl h-[100%] mr-2 w-[100px]">
            Login
          </Button>

          <Button className="bg-gray-800 hidden sm:block hover:bg-white border-[2px] hover:text-gray-800 hover:font-bold border-gray-800 text-xl h-[100%] mr-2 w-[150px]">
            Admin Panel
          </Button>
        </div>
      </div>

      <Hr />
    </div>
  );
};

export default UsersideHeader;
