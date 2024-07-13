"use client";

import userAtom from "@/atom/UserAtom";
import { useRecoilValue } from "recoil";

const UserDetails = () => {
  const user = useRecoilValue(userAtom);
  // console.log(user);
  return (
    <section className=" md:relative sm:right-2 right-0 sm:fixed">
      <div className="sm:w-[40vw] w-[90vw] m-auto rounded-lg shadow-3xl bg-bg-zinc-200 ">
        <div className="rounded-lg  w-full px-8 py-6 bg-zinc-200 rounded-tr-lg rounded-tl-lg ">
          <h1 className=" text-2xl font-bold text-zinc-600">User's Details</h1>
        </div>
        {user.id && (
          <div className=" p-4">
            <div className="bg-zinc-200 p-4 rounded-md ">
              <img
                src={user.avatar}
                alt=""
                className="w-full h-76 object-cover rounded-lg"
              />
              <div className="mt-4 flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {user.profile.username}
                </h2>
                <div className="h-10">
                  <p className="text-gray-600 text-lg leading-6 -mt-1">
                    {user.Bio.slice(0, 50)}
                  </p>
                </div>
                <p className="text-gray-600">
                  <span className=" font-semibold">First Name : </span>
                  {user.profile.firstName}
                </p>
                <p className="text-gray-600">
                  <span className=" font-semibold">Last Name : </span>
                  {user.profile.lastName}
                </p>
                <p className="text-gray-600">
                  <span className=" font-semibold"> Email : </span>{" "}
                  {user.profile.email}
                </p>

                <p className="text-gray-600">
                  <span className=" font-semibold">Job : </span>
                  {user.jobTitle}
                </p>
              </div>
            </div>
          </div>
        )}
        {!user.id && (
          <div className=" p-4">
            <div className="bg-zinc-200 p-4 rounded-md relative">
              <div className=" absolute top-0 left-0 bg-white opacity-60 w-full h-full flex justify-center items-center">
                <h1 className=" text-3xl font-semibold">
                  Select User See Details
                </h1>
              </div>
              <img
                src="https://imgs.search.brave.com/5cAi-jXDh0PdCGuh2vvsggwMUWvGlmTFmbCQ7jYJ9OI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
                alt=""
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-800">Unknown</h2>
                <p className="text-gray-600">First Name : Unknown</p>
                <p className="text-gray-600">Last Name : Unknown</p>
                <p className="text-gray-600">Email : unknown@gmail.com</p>
                <p className="text-gray-600">Address : Unknown</p>
                <p className="text-gray-600">Job : Unknown</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserDetails;
