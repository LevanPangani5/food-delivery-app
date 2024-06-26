"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  switch (status) {
    case "loading":
      return <Loading />;
    case "authenticated":
      router.push("/");
      break;
  }
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-3rem)] flex  items-center justify-center">
      {/*box*/}
      <div className="h-full shadow-2xl roundedd-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/*Image container*/}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/*form container*/}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p className="">
            Log into your account or create a new one using social buttons
          </p>
          <button
            onClick={() => signIn("google")}
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
