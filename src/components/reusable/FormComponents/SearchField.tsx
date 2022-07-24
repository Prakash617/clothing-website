import { SearchIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";

type Props = {
  products: any;
  setSearchProductList?: any;
};

const SearchField = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        console.log(
          `I can see you're not typing. I can use "${searchQuery}" now!`
        ),
      2000
    );
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  props.setSearchProductList(searchQuery);

  return (
    <div className="relative">
      <input
        type="text"
        name={searchQuery}
        className="w-full h-20 pl-4 p-2 shadow-xl border outline-0"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="absolute top-6 right-5 text-slate-600 z-10 border-l pl-2">
        <SearchIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default SearchField;
