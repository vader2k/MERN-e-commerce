import { useContext } from "react"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrum"
import { ShopContext } from '../context/ShopContext'
import ProductDisplay from "../components/ProductDisplay"
import DescriptionBox from "../components/DescriptionBox"
import RelatedProducts from "../components/RelatedProducts"


const Product = () => {
  const { all_products } = useContext(ShopContext)
  const {id} = useParams();

  const product = all_products?.find((e) => e.id === Number(id))

  return (
    <div>
      {product ? <Breadcrum product={product} /> : <p>Product not found</p>}
      {product? <ProductDisplay product={product}/> : <p>Product not found</p>}
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product