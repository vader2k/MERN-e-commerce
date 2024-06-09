import { createContext, useState } from "react";
import all_product from '../assets/all_product';

// Create a context for the shop
export const ShopContext = createContext(null);

// Function to initialize the default cart with all products
const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}

// Component to provide the ShopContext
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        console.log(cartItems);
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    // function to return total cart price
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                total += itemInfo.new_price * cartItems[item];
            }
        }
        return total;
    }

    //function to get the amount of items in the cart
    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                total += cartItems[item];
            }
        }
        return total;
    }

    // Value to be provided by the context
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;