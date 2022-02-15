import { ShoppingCartIcon } from '@heroicons/react/solid'

const CartWidget = () => {
    return (
        <>
            <button>
                <span className="text-white mr-2" id="cartItems">0</span>
                <ShoppingCartIcon className="h-7 w-7 text-white mr-6" />
            </button>
        </>
    );
}

export default CartWidget;
