import { useContext } from "react"
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItem = () => {

    const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

  return (
    <div className="my-[70px] mx-[150px]">
        <div className="format grid gap-[75px] items-center py-[20px] text-[16px] text-[#454545] font-medium">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className="h-[3px] bg-slate-50 border-none"/>
        {all_products.map((e) => {
            if(cartItems[e.id] > 0){
                return (
                    <div key={e.id} className="format grid gap-[75px] items-center py-[20px] text-[16px] text-[#454545] font-medium">
                        <img className="w-[150px]" src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img src={remove_icon} alt="remove" onClick={()=>removeFromCart(e.id)} />
                    </div>
                )
            }
            return null
        })}
        <div className="flex my-[60px]">
            <div className="flex flex-1 flex-col mr-[150px] gap-[40px]">
                <h1 className="text-[1.5rem] font-medium">Cart Total</h1>
                <div>
                    <div className="flex justify-between py-[15px]">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-[15px]">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-[15px]">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className="w-[200px] h-[40px] outline-none border-none bg-red-500 text-white font-semibold">PROCEED TO CHECKOUT</button>
            </div>
            <div className="flex-1 text-[16px] font-medium">
                <p className="text-[#555]">IF you have a promo code, enter it here</p>
                <div className="w-[504px] flex mt-[15px] pl-[20px] h-[50px] bg-[#eaeaea]">
                    <input className="outline-none bg-transparent w-[330px] h-[50px]" type="text" placeholder="promo code"/>
                    <button className="w-[170px] h-[50px] bg-black text-white">APPLY</button>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default CartItem