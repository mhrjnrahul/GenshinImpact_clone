import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";;

export default function MainLayout() {
  return (
    <div className="min-h-screen font-(font-ui) bg--color-bg text-color-text)">
      <Navbar />
      <Outlet />

    </div>
  );
}
