import { Outlet } from "react-router-dom";
import Header from "../fragments/header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
