import React, { useContext } from "react";
import { ProductContext } from "../../utils/ProductContext";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const { products, setProducts } = useContext(ProductContext);

  const onAddToCart = () => {
    let newArr = [...products];
    newArr.push(product);
    setProducts(newArr);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 p-4 ">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h1>
          <img
            className=" w-64 h-64 object-cover"
            src={product.imageURL}
            alt="Apple Inc "
          />
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
          <span className="text-white">{product.developer}</span>
          <p className="text-white">{product.releaseDate}</p>{" "}
          <p className="text-green-500 font-bold pt-2">{product.price}</p>
          <div className="flex pt-8 gap-4">
            <Link to={`/detail/${product.id}`}>
              <button className="flex   p-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
              </button>
            </Link>
            {/* Add To Cart */}
            <button
              onClick={onAddToCart}
              className="flex   p-4 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
