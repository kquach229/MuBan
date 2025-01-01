"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import AppSidebar from "./AppSidebar";
import { div } from "motion/react-client";

const NavBar = () => {
  const [bgBlack, setBgBlack] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setBgBlack(true);
    } else {
      setBgBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const desktopMenu = () => {
    return (
      <nav className={`w-full flex `}>
        <div
          className={`hidden md:flex w-full justify-between ${
            bgBlack ? "md:bg-foreground" : "md:bg-none"
          } ${
            bgBlack ? "text-white" : "text-black"
          } z-50 p-5 fixed top-0 w-full justify-between items-center duration-500 h-[100px]`}
        >
          <Link className="flex items-center" href="/">
            <Image
              src={"/moban_logo.svg"}
              height={70}
              width={70}
              alt="moban logo"
            />
            <span className="text-xl ml-5">MoBan</span>
          </Link>
          <div className="gap-5 flex items-center">
            <Link href="/templates">Templates</Link>
            <Link href="/about">About</Link>
            <SignedOut>
              <SignInButton>
                <Button>Get Started</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div className="block md:hidden z-[500] bg-foreground p-5 fixed top-0 w-full justify-between items-center duration-500 h-[100px]">
          <AppSidebar />
        </div>
      </nav>
    );
  };

  return <div>{desktopMenu()}</div>;
};

export default NavBar;
