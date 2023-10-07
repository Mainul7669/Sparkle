import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;
