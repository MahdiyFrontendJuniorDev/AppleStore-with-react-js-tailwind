import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const myValues = { products, setProducts };

  return (
    <ProductContext.Provider value={myValues}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
