import React, { useState } from "react";
import Layout from "../../shared_Components";
import axios from "axios";
import { useEffect } from "react";
import ProductCard from "../../shared_Components/products/product";
import IpadGrid from "./ipadGrid.jsx";

export default function Ipad() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Ipads")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <div>
          <div className="">
            <div>
              <h1 className="absolute text-2xl  md:text-6xl p-10 md:p-24 font-serif text-white ">
                iPad Air
              </h1>
              <p className="absolute p-18  md:p-48 text-violet-600 font-mono text-xl md:text-3xl">
                Light.Bright
              </p>
              <p className="absolute p-24 md:p-64 text-fuchsia-600 font-extrabold text-xl md:text-3xl">
                Full of Might
              </p>
            </div>

            <img
              className="w-full object-cover"
              src="https://www.apple.com/v/ipad-air/r/images/meta/ipad-air_overview__cahgij9otxua_og.png?202207050626"
            />
          </div>
          <div className="md:pl-24 pl-12 pt-12 max-w-6xl mx-auto">
            <h1 className="text-6xl text-center font-extrabold pb-8">
              Which iPad is right for you?
            </h1>
            <IpadGrid />
          </div>

          <div className="bg-white">
            <img
              className="object-cover w-full  border-none"
              src="https://i.ytimg.com/vi/KomAGQOSAkU/maxresdefault.jpg"
            />
          </div>
        </div>
        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.length > 0 &&
            data.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
        <div className="max-w-6xl mx-auto"></div>
      </Layout>
    </>
  );
}
