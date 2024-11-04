import NavbarScreen from "../components-screen/navbar/navbar-screen.jsx";
import Navbar from "../components/navbar/navbar.jsx";
import Menu from "../components/menu/menu.jsx";
import Footer from "../components/footer/footer.jsx";
import { Outlet } from "react-router-dom";

const Screen = () => {
  return (
    <div className="main-screen">
      <div className="background" />
      <NavbarScreen />
      <div className="container">
        <div id="home-anchor" className="container-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};


const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>

        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export { Screen, Layout };