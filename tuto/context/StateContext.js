import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

 //create function for increase and decrease

 const incQty = () => {
    setQty((prevQty) => prevQty + 1);
 }

 const decQty = () => {
    setQty((prevQty) => {
        if(prevQty -1 < 1) return 1;

        return prevQty - 1;
    });
 }


 //function to add to the cart

 const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart){
       const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
            }
        })

        setCartItems(updatedCartItems);
    } else {
        product.quantity = quantity;

        setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart!`);

 }

    return(
        <Context.Provider
        value={{
            showCart, 
            cartItems, 
            totalPrice,
             totalQuantities,
             qty,
             incQty,
             decQty,
             onAdd,
             setShowCart
        }}
        >
            {children}
        </Context.Provider>
    )
}

//function to export context

export const useStateContext = () => useContext(Context);