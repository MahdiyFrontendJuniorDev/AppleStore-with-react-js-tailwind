import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Ipad from "./pages/Ipad";
import Iphone from "./pages/Iphone";
import Mac from "./pages/Mac";
import About from "./pages/About";
import LoginRoute from "./pages/Login/loginRoute";
import AuthProvider from "./utils/authContext";
import ProductProvider from "./utils/ProductContext";

import DetailPage from "./pages/DetailPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <ProductProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/About/" element={<About />}></Route>
            <Route path="/Iphone/" element={<Iphone />}></Route>
            <Route path="/Ipad/" element={<Ipad />}></Route>
            <Route path="/Mac/" element={<Mac />}></Route>
            <Route path="/login/" element={<LoginRoute />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ProductProvider>
  );
}

export default App;
