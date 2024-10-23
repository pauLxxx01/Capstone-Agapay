import "./styles/global.scss";

import NavbarScreen from "./components-screen/navbar/navbar-screen.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Menu from "./components/menu/menu.jsx";

import Home from "./pages/screen-page/screen/screen.jsx";
import Login from "./pages/screen-page/login/login.jsx";

import Image from "./try-mobile-user/tryimage.jsx";
import InsertUser from "./try-mobile-user/insertUser.jsx";
import Display from "./try-mobile-user/display.jsx";

import AdminRegistration from "./Accounts/Admin/admin-registration/admin.jsx";
import DisplayAccount from "./Accounts/Admin/admin-accounts/accounts.jsx";
import UserRegistration from "./Accounts/Users/user-registration/user.jsx";
import UserAccount from "./Accounts/Users/user-accounts/userAccounts.jsx";

import Footer from "./components/footer/footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/home-page/dashboard/dashboard";
import ViewReports from "./pages/home-page/process-report/view-report/view";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/auth/user/getUser")
      .then((response) => {
       
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Screen />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/admin/registration",
          element: <AdminRegistration />,
        },
        {
          path: "/admin/accounts",
          element: <DisplayAccount />,
        },
        {
          path: "/user/registration",
          element: <UserRegistration />,
        },
        {
          path: "/user/accounts",
          element: <UserAccount users={users} />,
        },
        {
          path: "/insertImg",
          element: <Image />,
        },
        {
          path: "/display",
          element: <Display />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home/dashboard",
          element: <Dashboard users={users} />,
        },
        {
          path: "/home/report/:id",
          element: <ViewReports />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
