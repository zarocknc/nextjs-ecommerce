"use client";
import Image from "next/image";
import Navigate from "./navigate";
import OverNav from "./over-nav";
import TopPopup from "./top-popup";
import openLogo from "../../../../public/open-source.png";
import useScrollDirection from "./useScrollDirection";

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  return (
    <nav
      className={`sticky ${scrollDirection === "down" ? "-top-28" : "top-0"} h-28 max-h-28 transition-all duration-500`}
    >
      <TopPopup />
      <div className="flex max-h-full">
        <div className="bg-yellow-800 max-h-[4.5rem] aspect-square p-2">
          <Image
            src={openLogo}
            alt="company logo"
            className="object-contain h-full"
          />
        </div>
        <div className="flex-1">
          <OverNav />
          <Navigate />
        </div>
      </div>
    </nav>
  );
}
