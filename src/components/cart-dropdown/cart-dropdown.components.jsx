import './cart-dropdown.styles.scss';

import { CartContext } from '../../contexts/cart-context';

import { useContext } from 'react';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);


    return(
        <div className='cart-dropdown-container'>
            {/* This div was initially self closing but I adjusted it against the course because the cart items were not displaying correctly */}
            <div className='cart-items'> 
            {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
            <Button > GO TO CHECKOUT </Button>
            </div>
        </div>
    )
}

export default CartDropdown;