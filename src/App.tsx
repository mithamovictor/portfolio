import * as React from "react";
import { Helmet } from "react-helmet";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "./layouts/default-layout.tsx";
import PublicLayout from "./layouts/public-layout.tsx";
import Homepage from "./pages/public-pages/homepage.tsx";
import NotFound from "./pages/public-pages/not-found.tsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<DefaultLayout />}>
        {/* Private pages */}
        {/*<Route element={<PrivateLayout />}>*/}
        {/*  <Route path={'roles'} element={<Roles />} />*/}
        {/*</Route>*/}
        {/* Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path={"/"} element={<Homepage />} />
        </Route>
        {/* Not Found page */}
        <Route path={"*"} element={<NotFound />} />
      </Route>,
    ),
  );

  return (
    <>
      <Helmet>
        <title>Victor Mithamo</title>
        {/* Add the icon to the head */}
        {/*<link rel='icon' href={favicon} />*/}
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
