"use client";

import userAtom from "@/atom/UserAtom";
import { useRecoilState } from "recoil";

const Usercard = ({ imgURL, name, role, userData }) => {
  const [user, setUser] = useRecoilState(userAtom);
  const showDetails = () => {
    // console.log("Click");
    setUser(userData);

    // Show modal or something else to display user details
  };

  return (
    <div
      onClick={showDetails}
      className=" cursor-pointer rounded-lg shadow-3xl py-3 flex flex-col justify-between h-fit"
    >
      <div className="w-full flex px-8 h-fit ">
        <div className=" w-16 h-16">
          <img
            src={imgURL}
            alt=""
            className="min-w-[60px] h-[60px] object-cover rounded-full"
          />
        </div>
        <div className=" relative px-12 flex justify-between text-gray-50 w-full items-center">
          <h1 className=" font-semibold text-xl text-zinc-900">{name}</h1>
          <p className=" hidden lg:inline  text-lg">{role}</p>
          {/* <div className="w-44"> */}
          {/* <p className=" text-lg"> {location} </p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Usercard;
