import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-900 font-semibold bg-white ">
        <hr className=" border-black" />
        <div className="grid grid-cols-3 gap-10  max-w-6xl mx-auto pl-8 md:pl-24">
          <div className="text-sm md:text-md p-4">
            <h1>Products</h1>
            <ul>
              <li>
                <a href="https://www.apple.com/store">Apple</a>
              </li>
              <li>
                <a>iPhone</a>
              </li>
              <li>
                <a>iPad</a>
              </li>
              <li>
                <a>AirPods</a>
              </li>
              <li>
                <a>MacBook</a>
              </li>
              <li>
                <a>iWatch</a>
              </li>
            </ul>
          </div>
          <div className="text-sm md:text-md p-4">
            <h1>Services</h1>
            <ul>
              <li>
                <a>Apple Music</a>
              </li>
              <li>
                <a>Apple TV</a>
              </li>
              <li>
                <a>Apple Fitness</a>
              </li>
              <li>
                <a>Apple News</a>
              </li>
              <li>
                <a>iCloud</a>
              </li>
              <li>
                <a>App Store</a>
              </li>
            </ul>
          </div>
          <div className="text-sm md:text-md p-4">
            <ul>
              <h1 className="">Apple Store</h1>
              <li>
                <p>Financing</p>
              </li>
              <li>
                <p>Shopping Helps</p>
              </li>
              <li>
                <p>Genius Bar</p>
              </li>
              <li>
                <p>Apple Trade-In</p>
              </li>
              <li>
                <p>Apple Store App</p>
              </li>
              <li>
                <p>Today At Apple</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center font-mono text-sm">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MYAPPLE.
        </p>
        <hr className=" border-black" />

        <div>
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-gray-800 font-serif font-bold text-xl my-4">
              Bizni Ijtimoiy Tarmoqlarda kuzatib boring!
            </h2>
            <div class="flex justify-center pb-4">
              <img
                class="w-8"
                src="https://img.icons8.com/fluency/50/000000/instagram-new.png"
              />
              <img
                class="w-8"
                src="https://img.icons8.com/color/50/000000/telegram-app.png"
              />
              <img
                class="w-8"
                src="https://img.icons8.com/color/48/000000/whatsapp.png"
              />
              <img
                class="w-8"
                src="https://img.icons8.com/color/48/000000/twitter.png"
              />
              <img
                class="w-8"
                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              />
            </div>
          </div>
          <p className="pb-4 text-center text-sm font-serif">Apple Inc</p>
        </div>
      </footer>
    </>
  );
}
