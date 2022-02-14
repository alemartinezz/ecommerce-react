import { ShoppingCartIcon } from '@heroicons/react/solid'

const CartWidget = () => {
    return (
        <>
            <buttom>
                <span className="text-white mr-2" id="cartItems">0</span>
                <ShoppingCartIcon className="h-7 w-7 text-white mr-6" />
            </buttom>
        </>
    );
}

export default CartWidget;
