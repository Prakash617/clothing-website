import {
  ShareIcon,
  ShoppingBagIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { getSessionKey, removeSessionKey } from "../../sessionKey";
import DropDown from "../reusable/DropDown/DropDown";

type Props = {};

const Navbar = (props: Props) => {
  const [dropDown, setdropDown] = useState(false);
  const router = useRouter();
  const token = getSessionKey("token");
  const clickHandler = (e: any) => {
    e.preventDefault();
    removeSessionKey("token");
    router.push("/login");
  };

  const showdropDown = () => {
    dropDown ? setdropDown(false) : setdropDown(true);
  };
  return (
    <div className="flex justify-between xl:px-20 h-20 bg-white relative shadow-md">
      {/* LOGO */}
      <div className="text-white bg-blue-600 m-2 rounded text-4xl p-4 font-semibold">
        CottonSide
      </div>

      {/* NAVBAR */}
      <nav className="uppercase font-medium tracking-widest">
        <ul className="flex flex-row gap-8 items-center h-full">
          <Link href={"/home"} passHref>
            <li className="h-full py-7 cursor-pointer hover:text-primary">
              home
            </li>
          </Link>
          <Link href={"/shop"} passHref>
            <li className="h-full py-7 cursor-pointer hover:text-primary">
              shop
            </li>
          </Link>
          <Link href={"/gallery"} passHref>
            <li className="h-full py-7 cursor-pointer hover:text-primary">
              gallery
            </li>
          </Link>
          <Link href={"/contact-us"} passHref>
            <li className="h-full py-7 cursor-pointer hover:text-primary">
              contact us
            </li>
          </Link>
          <Link href={"/about"} passHref>
            <li className="h-full py-7 cursor-pointer hover:text-primary">
              about
            </li>
          </Link>
        </ul>
      </nav>

      {/* RIGHT SIDE ICONS */}
      <div className="flex justify-center items-center gap-3 ">
        <ShoppingBagIcon className="h-10 w-10 p-2 hover:bg-primary hover:text-white rounded-full cursor-pointer" />
        {token ? (
          <Link href={"/login"} passHref>
            <LogoutIcon
              className="h-10 w-10 p-2 hover:bg-primary hover:text-white rounded-full cursor-pointer"
              onClick={clickHandler}
            />
          </Link>
        ) : (
          
            <UserIcon
              className="h-10 w-10 p-2 hover:bg-primary hover:text-white rounded-full cursor-pointer "
              onClick={showdropDown}
            />
         
        )}
        {/* <Link href={"/login"} passHref>
          <UserIcon className="h-10 w-10 p-2 hover:bg-primary hover:text-white rounded-full cursor-pointer" />
        </Link> */}
        <ShareIcon className="h-10 w-10 p-2 hover:bg-primary hover:text-white rounded-full cursor-pointer" />
      </div>
      <div className="absolute right-12 top-12 ">
        {dropDown && <DropDown setdropDown={setdropDown} />}
      </div>
    </div>
  );
};

export default Navbar;
