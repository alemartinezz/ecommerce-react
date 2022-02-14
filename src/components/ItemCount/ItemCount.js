
import { useState }  from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)
    };

    const increment = () => {
        setCount(count + 1)
    };

    <div className="text-center p-20">
        <div className="productContainer">
            <div>
                <div className='flex space-between'>
                    <Button
                        className="mx-10 px-10"
                        onClick={increment}
                    >
                        +
                    </Button>
                    <div id="ItemQuantity"></div>
                    <Button
                        className="mx-20 px-10"
                        onClick={decrement}
                    >
                        -
                    </Button>
                </div>
            </div>
            <button id="addToCart"> Agregar al carrito </button>
        </div>
    </div>
};

export default ItemCount;