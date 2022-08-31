import React, { useEffect, useState } from "react";
import Layout from "../../shared_Components";
import axios from "axios";
import ProductCard from "../../shared_Components/products/product";
import SectionIphone from "./SectionIphone";

export default function Iphone() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/products")
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
        <div className="bg-white">
          <div className="max-w-6xl mx-auto">
            <img src="https://i.ytimg.com/vi/HKXqZBBf6BY/maxresdefault.jpg" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.length > 0 &&
            data.map((product) => {
              return (
                <ProductCard
                  product={product}
                  // key={product.id}
                  // title={product.title}
                  // imageURL={product.imageURL}
                  // description={product.description}
                  // price={product.price}
                  // developer={product.developer}
                  // releaseDate={product.releaseDate}
                  // id={product.id}
                />
              );
            })}
        </div>
        <div>
          <img src="https://store.bellestoreinc.com/wp-content/uploads/2022/03/iPhone-13-Pro-Max-Alpine-Green-2022.png" />
        </div>
        <div className=" max-w-6xl mx-auto space-y-4">
          <h1 className="text-center text-5xl font-bold">
            Get Supercharged for College
          </h1>
          <p className="text-xl font-bold text-center">Save on Mac or Ipad</p>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <img
              className="object-cover"
              src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-green-hero-2up-220308_big_carousel.jpg.slideshow-medium_2x.jpg"
            />
          </div>
          {/* PPPPPPPPPPPPP */}
        </div>
        <div className="bg-white">
          <div className="max-w-6xl mx-auto pl-24 ">
            <SectionIphone />
          </div>
        </div>
      </Layout>
    </>
  );
}
