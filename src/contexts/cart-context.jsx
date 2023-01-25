import { createContext, useState} from 'react';

import CartIcon from "../components/cart-icon/cart-icon.component";
import CartDropdown from "../components/cart-dropdown/cart-dropdown.components";

export const CartContext = createContext({
    isCartOpen: false, 
    setIsCartOpen: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>;
    
}