import { FC } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
