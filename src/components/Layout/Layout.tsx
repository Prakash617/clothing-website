import React, { ReactElement, useState } from 'react'
import useCommonStateHook from "../../customHooks/useCommonStateHook";
import Navbar from "../Navbar/Navbar";
import FooterComponent from "./FooterComponent";
import Header from "./Header";
import HeaderComponent from "./HeaderComponent";

type ILayoutProps = {
  children: ReactElement;
};

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  const [expandProduct, setExpandProduct] = useState<boolean>(false);

  // Cloning childern attribute to pass props
  const childrenWithAdjustedProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { expandProduct, setExpandProduct })
  );

  return (
    <div className="relative overflow-hidden">
      <Header /> {/* HTML head tag here */}
      {expandProduct ? (
        <div
          className="absolute backdrop-brightness-50 h-full w-full z-40"
          onClick={() => setExpandProduct(false)}
        />
      ) : null}
      <HeaderComponent />
      <Navbar />
      <main>{childrenWithAdjustedProps}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout