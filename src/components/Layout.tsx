import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className={isHome ? "flex-1" : "flex-1 pt-24"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
