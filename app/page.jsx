"use client";
import UserDetails from "@/sections/UserDetails";
import UserList from "@/sections/UserList";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className=" max-container relative">
        <section className=" flex flex-row w-full justify-between gap-10 pt-32 pb-10">
          <section className=" relative min-h-[100vh] h-fit w-2/3 bg-white rounded-lg">
            <UserList />
          </section>
          <section className=" lg:w-1/3 w-full relative ">
            <UserDetails />
          </section>
        </section>
      </main>
    </RecoilRoot>
  );
}
