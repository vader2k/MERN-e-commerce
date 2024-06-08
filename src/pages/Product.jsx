import { useContext } from "react"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrum"
import { ShopContext } from '../context/ShopContext'
import ProductDisplay from "../components/ProductDisplay"


const Product = () => {
  const { all_product } = useContext(ShopContext)
  const {id} = useParams();


  const product = all_product?.find((e) => e.id === Number(id))

  return (
    <div>
      {product ? <Breadcrum product={product} /> : <p>Product not found</p>}
      {product? <ProductDisplay product={product}/> : <p>Product not found</p>}
    </div>
  )
}

export default Product