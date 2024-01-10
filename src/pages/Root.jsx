import { Outlet } from "react-router-dom";
import Header from "../fragments/header";
import { Footer } from "../fragments/Footer";
import Aside from "./../fragments/Aside";

function RootLayout() {
  return (
    <>
      <Header />
      <Aside />
      <main className="dark:bg-[#111111] md:px-7 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
