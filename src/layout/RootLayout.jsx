import { Outlet } from "react-router";
import NavbarLayout from "./NavbarLayout";
import FooterLayout from "./FooterLayout";
import SmoothScroll from "../Components/utility/SmoothScroll";
import ScrollToTop from "../Components/utility/ScrollToTop";

const RootLayout = () => {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <header>
        <NavbarLayout />
      </header>
      <main>
        <Outlet />
      </main>
      <FooterLayout />
    </SmoothScroll>
  );
};

export default RootLayout;
