import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;