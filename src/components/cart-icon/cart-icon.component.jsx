import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart-context';

import CartItem from '../cart-item/cart-item.component';

import './cart-icon.styles.scss';

const CartIcon = (cartItem) => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const { quantity } = cartItem;
    
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;