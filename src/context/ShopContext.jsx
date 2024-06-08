import { createContext, useState } from "react"
import all_product from '../assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    all_product.forEach(product => {
        cart[product.id] = 0
    })
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
  
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider