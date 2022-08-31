import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/ProductContext";
import About from "../pages/About";
import HomePage from "../pages/Home";
import Ipad from "../pages/Ipad";
import Iphone from "../pages/Iphone";
import Mac from "../pages/Mac";
import { useContext } from "react";
function MobileMenu() {
  const [showMenu, setShowmenu] = useState(false);
  const { products } = useContext(ProductContext);
  let menu;

  if (showMenu) {
    menu = (
      <div className="fixed   bg-gray-900 text-white top-0 right-0 w-2/5 h-full z-50">
        <div className=" flex justify-between pr-6 pl-6">
          <nav className="">
            <h1 className="p-6 text-xl">Apple</h1>

            <ul className=" space-y-6 pt-4">
              <li>
                <Link className="" to="/" element={<HomePage />}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="" to="/About/" element={<About />}>
                  About
                </Link>
              </li>
              <li>
                <Link className="" to="/Iphone/" element={<Iphone />}>
                  Iphone
                </Link>
              </li>
              <li>
                <Link className="" to="/Ipad/" element={<Ipad />}>
                  Ipad
                </Link>
              </li>
              <li>
                <Link className="" to="/Mac/" element={<Mac />}>
                  Mac
                </Link>
              </li>
              <li>
                {" "}
                <div className="pl-2">
                  <Link to={"/cart"}>
                    <span class="relative inline-block">
                      <i class="fa-solid fa-cart-shopping"></i>
                      <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {products.length}
                      </span>
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          <div>
            <i
              className="fa-solid fa-xmark text-xl pt-6"
              onClick={() => setShowmenu(!showMenu)}
            ></i>
          </div>
        </div>
      </div>
    );
  }
  return (
    <nav className="flex justify-between items-center">
      <span className="text-xl">
        <i
          className="fa-solid fa-bars"
          onClick={() => setShowmenu(!showMenu)}
        ></i>
      </span>

      {menu}
    </nav>
  );
}

export default MobileMenu;
