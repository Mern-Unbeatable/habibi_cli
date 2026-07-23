import { Outlet } from "react-router";
import NavbarLayout from "./NavbarLayout";
import FooterLayout from "./FooterLayout";
import SmoothScroll from "../Components/utility/SmoothScroll";
import ScrollToTop from "../Components/utility/ScrollToTop";

const RootLayout = () => {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <header>
          <NavbarLayout />
        </header>
        <main className="flex-1 flex flex-col pt-20">
          <Outlet />
        </main>
        <FooterLayout />
      </div>
    </SmoothScroll>
  );
};

export default RootLayout;
