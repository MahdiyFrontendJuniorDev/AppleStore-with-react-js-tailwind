import React from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart/index";
import HomePage from "../pages/Home";
import Ipad from "../pages/Ipad";
import Iphone from "../pages/Iphone";
import LoginRoute from "../pages/Login/loginRoute";
import Mac from "../pages/Mac";
import { AuthContext } from "../utils/authContext";
import { ProductContext } from "../utils/ProductContext";
import MobileMenu from "./mobileMenu";

export default function Header() {
  const { products } = useContext(ProductContext);
  const { currentUser, logout } = useContext(AuthContext);

  let navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="bg-gray-800 text-white flex justify-between md:justify-center p-6 items-center ">
          <div className="text-white">
            <i className="fa-brands fa-apple pr-12"></i>
          </div>
          <div>
            <nav className="space-x-12 hidden md:block max-w-6xl mx-auto">
              <Link
                className="p-8 hover:bg-blue-500"
                to="/"
                element={<HomePage />}
              >
                Store
              </Link>
              <Link
                className="p-8 hover:bg-blue-500"
                to="/About/"
                element={<About />}
              >
                About
              </Link>
              <Link
                className="p-8 hover:bg-blue-500"
                to="/Iphone/"
                element={<Iphone />}
              >
                Iphone
              </Link>
              <Link
                className="p-8 hover:bg-blue-500"
                to="/Ipad/"
                element={<Ipad />}
              >
                Ipad
              </Link>
              <Link
                className="p-8 hover:bg-blue-500"
                to="/Mac/"
                element={<Mac />}
              >
                Mac
              </Link>
            </nav>
            <div>
              <div className="block md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
          <div className="pl-24 space-x-8 hidden lg:block ">
            {currentUser != null ? (
              <button
                onClick={onLogout}
                className="p-2 rounded-md border bg-red-500"
              >
                Logout
              </button>
            ) : (
              <Link
                className="p-4 border hover:bg-green-500"
                to="/login/"
                element={LoginRoute}
              >
                Login
              </Link>
            )}
          </div>
          {/* Link Cart */}
          <div className="pl-2 hidden lg:block">
            <Link to={"/cart"}>
              <span class="relative inline-block">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {products.length}
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center bg-blue-500 text-white p-6">
          <h1 className="font-bold">Bu Fake WebSite</h1>
        </div>
      </header>
    </>
  );
}
