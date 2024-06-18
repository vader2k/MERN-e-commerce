import { createContext, useState, useEffect } from "react";
import axios from "axios";


const token = localStorage.getItem("auth");

// Create a context for the shop
export const ShopContext = createContext(null);

// Function to initialize the default cart with all products
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300 ; i ++ ) {
        cart[i] = 0
    }
    return cart;
}

// Component to provide the ShopContext
const ShopContextProvider = (props) => {
    const [all_products, setAll_Products] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/server/v1")
                setAll_Products(res.data.data)
                if(token){
                  const res = await axios.post("http://localhost:8000/server/v1/cart", {} ,{
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                  setCartItems(res.data.cartData);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    // Function to add an item to the cart
    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: (prev[itemId] || 0) + 1, // Check if itemId exists, if not initialize it to 0
        //   setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }));
      
        if (token) {
          try {
            const res = await axios.post("http://localhost:8000/server/v1/addToCart", {
              id: itemId,
            },
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
  
            });
            console.log(res);
            
          } catch (error) {
            console.log(error);
          }
        }
      };

    // Function to remove an item from the cart
    const removeFromCart = async (itemId) => {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) - 1, // Check if itemId exists, if not initialize it to 0
      //   setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
      }));
  
      if (token) {
          try {
              const res = await axios.post("http://localhost:8000/server/v1/removeFromCart", {
                  id: itemId,
              }, {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              });
              console.log(res); // Log the response here, not as part of the function call
          } catch (error) {
              console.log(error);
          }
      }
  };
    // function to return total cart price
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
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
    const contextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;