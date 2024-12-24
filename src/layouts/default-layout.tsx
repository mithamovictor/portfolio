import * as React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
