import React from "react";
import Header from "../Header";
import { WrapperLayout } from "./styled";

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />
      <section>{children}</section>
    </WrapperLayout>
  );
};

export default Layout;
