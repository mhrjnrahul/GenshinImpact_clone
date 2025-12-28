import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import City from "../components/City";

export default function MainLayout() {
  return (
    <div className="min-h-screen font-(font-ui) bg--color-bg text-color-text)">
      <Navbar />
      <Outlet />
      
      <div className="cities">
        <City image="/cities/mondstadt.png" name="Mondstadt" />
        <City image="/cities/liyue.png" name="Liyue" />
        <City image="/cities/inazuma.png" name="Inazuma" />
        <City image="/cities/sumeru.png" name="Sumeru" />
        <City image="/cities/fontaine.png" name="Fontaine" />
        <City image="/cities/natlan.png" name="Natlan" />
        <City image="/cities/nodkrai.png" name="Nod-Krai" />
        <City image="/cities/coming.png" name="Coming Soon"/>
      </div>
    </div>
  );
}
