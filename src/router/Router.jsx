import { Routes, Route } from "react-router-dom"
import Shop from "../pages/Shop"
import ShopCategory from "../pages/ShopCategory"
import Product from "../pages/Product"
import Cart from '../pages/Cart'
import Login from "../pages/Login"
import men_banner from '../assets/banner_mens.png'
import women_banner from '../assets/banner_women.png'
import kid_banner from '../assets/banner_kids.png'


const Router = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Router