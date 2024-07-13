"use client";

import usersListAtom from "@/atom/UsersListAtom";
import Usercard from "@/components/Usercard";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useRecoilState(usersListAtom);
  function isArrayOfObjects(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return false;
    }

    // Check if all elements in the array are objects
    return arr.every(
      (item) =>
        item !== null && typeof item === "object" && !Array.isArray(item)
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        return null;
      }
      setLoading(true);
      try {
        const api = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
        const response = await fetch(api);
        const data = await response.json();
        if (data.error) {
          console.error("Error fetching data:", data.error);
          setLoading(false);
          setUsersList([]);
          return;
        }
        setUsersList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        return setUsersList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setUsersList]);

  if (loading) {
    return (
      <div className=" relative ">
        <div className="  w-full z-10 rounded-lg   px-8 py-6 bg-zinc-200 rounded-tr-lg rounded-tl-lg">
          <h1 className="text-2xl font-bold text-zinc-600">List of users</h1>
          <div className="px-28 pt-4 flex relative w-full justify-between items-center">
            <p className="text-sm text-gray-600 font-bold">Name</p>
            <p className="text-sm hidden lg:inline text-gray-600 ">
              Profession
            </p>
            {/* <p className="text-sm text-gray-600">Current Location</p> */}
          </div>
        </div>
        <div className=" relative pt-4 pb-8 px-4">
          <div className="  flex justify-center items-center flex-col gap-2">
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            {/* {usersList.map((user) => (
              // console.log(user),
              <Usercard
                key={user.id}
                imgURL={user.avatar}
                userData={user}
                name={user.profile.username}
                role={user.jobTitle}
              />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
  // console.log(usersList?.length);

  const isData = isArrayOfObjects(usersList);
  if (isData) {
    return (
      <div className="shadow-3xl ">
        <div className=" z-10 rounded-lg shadow-3xl  px-8 py-6 bg-zinc-200 rounded-tr-lg rounded-tl-lg">
          <h1 className="text-2xl font-bold text-zinc-600">List of users</h1>
          <div className="px-28 pt-4 flex relative w-full justify-between items-center">
            <p className="text-sm text-gray-600 font-bold">Name</p>
            <p className="text-sm text-gray-600 hidden lg:inline ">
              Profession
            </p>
            {/* <p className="text-sm text-gray-600">Current Location</p> */}
          </div>
        </div>
        <div className=" relative pt-4 pb-8 px-4">
          <div className="  flex flex-col gap-2">
            {console.log(usersList[0])}
            {usersList.map((user) => (
              // console.log(user),
              <Usercard
                key={user.id}
                imgURL={user.avatar}
                userData={user}
                name={user.profile.username}
                role={user.jobTitle}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (!loading && usersList.length === 0) {
    return (
      <div className=" h-full relative ">
        <div className="  w-full z-10 rounded-lg   px-8 py-6 bg-zinc-200 rounded-tr-lg rounded-tl-lg">
          <h1 className="text-2xl font-bold text-zinc-600">List of users</h1>
          <div className="px-28 pt-4 flex relative w-full justify-between items-center">
            <p className="text-sm text-gray-600 font-bold">Name</p>
            <p className="text-sm text-gray-600 hidden lg:inline ">
              Profession
            </p>
            {/* <p className="text-sm text-gray-600">Current Location</p> */}
          </div>
        </div>
        <div className=" h-full relative pt-4 pb-8 px-4">
          <div className="  h-full flex flex-col justify-center items-center gap-2">
            <h1 className=" color text-4xl">There is no data to show</h1>
            {/* {usersList.map((user) => (
              // console.log(user),
              <Usercard
                key={user.id}
                imgURL={user.avatar}
                userData={user}
                name={user.profile.username}
                role={user.jobTitle}
              />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
  if (!isData) {
    return (
      <div className=" h-full relative ">
        <div className="  w-full z-10 rounded-lg   px-8 py-6 bg-zinc-200 rounded-tr-lg rounded-tl-lg">
          <h1 className="text-2xl font-bold text-zinc-600">List of users</h1>
          <div className="px-28 pt-4 flex relative w-full justify-between items-center">
            <p className="text-sm text-gray-600 font-bold">Name</p>
            <p className="text-sm text-gray-600  hidden lg:inline">
              Profession
            </p>
            {/* <p className="text-sm text-gray-600">Current Location</p> */}
          </div>
        </div>
        <div className=" h-full relative pt-4 pb-8 px-4">
          <div className="  h-full flex flex-col justify-center items-center gap-2">
            <h1 className=" color text-4xl">Failed To Fetch data </h1>
            <p>Error found</p>
            {/* {usersList.map((user) => (
              // console.log(user),
              <Usercard
                key={user.id}
                imgURL={user.avatar}
                userData={user}
                name={user.profile.username}
                role={user.jobTitle}
              />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
};

export default UserList;
