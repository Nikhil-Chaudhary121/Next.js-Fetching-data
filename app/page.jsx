"use client";
import UserDetails from "@/sections/UserDetails";
import UserList from "@/sections/UserList";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className=" max-container relative">
        <section className=" flex sm:flex-row flex-col-reverse  w-full  xl:gap-10 gap-4 pt-32 pb-10">
          <section className=" md:w-2/3 w-[90%] m-auto relative min-h-[100vh] h-fit  bg-white rounded-lg">
            <UserList />
          </section>
          <section className=" lg:w-2/5 sm:w-fit w-full relative">
            <UserDetails />
          </section>
        </section>
      </main>
    </RecoilRoot>
  );
}
