import UserLayout from "@/components/userLayout";
import CarouselComponent from "@/components/carousel";
import Hr from "@/components/Hr";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import PostCard from "@/components/postCard";
import UsersideFooter from "@/components/usersideFooter";

export default function Home() {
  return (
    <UserLayout>
      <div className="w-full flex-col justify-start sm:px-10 flex items-center h-auto overflow-auto z-10 scroll-width">
        <h1 className="w-full text-left mt-10 text-3xl mb-5 font-bold text-gray-700 pl-5">
          Best Projects Of The Week
        </h1>

        {/* carousel */}
        <CarouselComponent/>

        <span className="w-full my-10">
          <Hr />
        </span>

        {/* new posts */}
        <h1 className="w-full text-left mb-5 text-3xl font-bold text-gray-700 pl-5">
          Recent posts
        </h1>
        <div className="w-full h-auto px-8 flex flex-wrap gap-4 justify-center">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <UsersideFooter />
      </div>
    </UserLayout>
  );
}
