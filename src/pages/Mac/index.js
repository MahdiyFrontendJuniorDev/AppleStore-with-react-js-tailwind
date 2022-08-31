import React from "react";
import Layout from "../../shared_Components";
import { useState, useEffect } from "react";
import axios from "axios";
import GridMacPage from "./MacSlide";
import ProductCard from "../../shared_Components/products/product";
import MacBookGrid from "./MacGrid";
export default function Mac() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/MacBooks")
        .then(function (response) {
          setData(response.data);
          console.log(response.data);
        })

        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    }, 0);
  }, []);
  const products1 = data;
  if (!products1 || products1.length === 0)
    return (
      <p className="text-red-500 text-3xl pt-12 text-center font-semibold">
        Нет данных!
      </p>
    );

  return (
    <>
      <Layout>
        <div>
          <div>
            <div className="flex justify-center ">
              <h1 className="absolute  pt-24 lg:pt-64  text-center font-bold text-white text-2xl lg:text-4xl">
                MacBook PRO 13
              </h1>
            </div>
            <div>
              <img
                className=" w-full object-cover "
                src="
https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg"
              />
            </div>
          </div>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.length > 0 &&
              data.map((product) => {
                return <ProductCard product={product} />;
              })}
          </div>
          <div className="max-w-xl lg:max-w-6xl md:max-w-2xl mx-auto">
            <MacBookGrid />
          </div>
          <div className="max-w-6xl mx-auto p-6">
            <GridMacPage />
          </div>
        </div>
      </Layout>
    </>
  );
}
