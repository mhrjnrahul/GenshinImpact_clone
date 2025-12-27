import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import City from "../components/City";

export default function MainLayout() {
  return (
    <div className="min-h-screen font-(font-ui) bg--color-bg text-color-text)">
      <Navbar />
      <Outlet />
      <City />
    </div>
  );
}
