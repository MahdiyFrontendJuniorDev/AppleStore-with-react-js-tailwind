import { useContext } from "react";
import Layout from "../../shared_Components";
import ProductCard from "../../shared_Components/products/product";
import { ProductContext } from "../../utils/ProductContext";

function Cart() {
  const { products } = useContext(ProductContext);
  function allTotal() {
    let usd = 0;
    products.map((arr) => (usd += arr.price));
    return usd;
  }
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
        {
          (products != null,
          products.map((product) => <ProductCard product={product} />))
        }{" "}
      </div>{" "}
      <div className="bg-blue-500 pt-8">
        <h1
          className="text-3xl px-4 py-2 rounded-xl justify-end flex
          text-white font-bold  "
        >
          Total: {allTotal()}$
        </h1>
      </div>
    </Layout>
  );
}

export default Cart;
