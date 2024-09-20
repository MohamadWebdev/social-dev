import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

type Props = {};

const PostCard = (props: Props) => {
  return (
    <div className="sm:w-[400px] w-[300px] h-[410px] border border-black rounded-lg bg-white p-3">
      <div className="w-full h-[250px] bg-gray-500 rounded-md">
        <Image src={""} alt="" />
      </div>

      <div className="w-full">
        <h1 className="text-lg font-bold mt-2">Post Title</h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          quod.
        </p>

        <div className="flex w-full mt-2 justify-between items-center">
          <p className="text-sm">1 hour ago</p>

          <div className="flex gap-5 text-gray-800">
            {/* like */}
            <AiFillLike className="hover:bg-gray-800 border border-gray-800 hover:text-white hover:border-transparent w-10 h-10 p-2 rounded-full cursor-pointer" />
            {/* comment */}
            <FaCommentDots className="hover:bg-gray-800 border border-gray-800 hover:text-white hover:border-transparent w-10 h-10 p-2 rounded-full cursor-pointer" />
            {/* share */}
            <FaShare className="hover:bg-gray-800 border border-gray-800 hover:text-white hover:border-transparent w-10 h-10 p-2 rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
