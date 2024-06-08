import { useContext } from "react"
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItem = () => {

    const { all_product, cartItems, removeFromCart  } = useContext(ShopContext)

  return (
    <div>
        <div>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.product.id] > 0){
                return (
                    <div key={e.product.id}>
                        <img src={e.product.image} alt="" />
                        <p>{e.product.title}</p>
                        <p>${e.product.new_price}</p>
                        <button>{cartItems[e.product.id]}</button>
                        <p>{e.product.new_price * cartItems[e.product.id]}</p>
                        <img src={remove_icon} alt="remove" onClick={() => removeFromCart(e.product.id)} />
                    </div>
                )
            }
            else{
                <div>Cart is empty</div>
            }
        })}
    </div>
  )
}
 
export default CartItem