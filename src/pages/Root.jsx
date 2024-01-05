import { Outlet } from "react-router-dom";
import Header from "../fragments/header";
import { Footer } from "../fragments/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="dark:bg-[#111111]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
