import { Routes, Route } from "react-router-dom"
import Shop from "../pages/Shop"
import ShopCategory from "../pages/ShopCategory"
import Product from "../pages/Product"
import Cart from '../pages/Cart'
import Login from "../pages/Login"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="mens"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory category="kids"/>} />
        <Route path="/product" element={<Product />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Router