import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
}
