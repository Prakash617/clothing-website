import React, { useState } from "react";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

type Props = {};

const HeaderComponent = (props: Props) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [keywords, setKeywords] = useState("");
  const router = useRouter();

  const submitHndler = async (e: any) => {
    setKeywords("");
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: keywords,
    });
  };
  const handleMouseOver = () => {
    setShowSearchBar(true);
  };

  return (
    <section
      className=" p-6 px-14 bg-[url(http://webdesign-finder.com/qtex/wp-content/uploads/2018/06/abstraction.jpg)]
    text-white font-light items-center flex justify-between"
    >
      <div className="flex align-center gap-2 justify-center">
        <div className="flex items-center">
          <LocationMarkerIcon className="h-5 w-5 mr-2" />
          <span>Kathmandu, Nepal 44000</span>
        </div>
        <div className="flex items-center">
          <MailIcon className="h-5 w-5 mr-2" />
          <span>cottonside@gmail.com</span>
        </div>
        <div className="flex items-center">
          <PhoneIcon className="h-5 w-5 mr-2" />
          <span> +977-928377488</span>
        </div>
      </div>

      {/* Search Bar */}
      {/* <div className="flex items-center "> */}
      <form className="flex items-center " onSubmit={submitHndler}>
        {showSearchBar && (
          <input
            type="search"
            className="caret-white p-3 bg-transparent focus:outline-none placeholder-white text-lg "
            placeholder="Search keywords..."
            onChange={(e) => setKeywords(e.target.value)}
            value={keywords}
            autoFocus
          />
        )}
        <button type="submit" onMouseOver={() => handleMouseOver()}>
          <SearchIcon className="h-8 w-8 ml-2 p-1 rounded-full hover:bg-white hover:text-primary cursor-pointer" />
        </button>
      </form>
      {/* </div> */}
    </section>
  );
};

export default HeaderComponent;
