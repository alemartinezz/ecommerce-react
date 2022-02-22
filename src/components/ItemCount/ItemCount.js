
import { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    // Set initial count according to props
    const [count, setCount] = useState(initial);

    // Set initial stock
    const [currentStock, setStock] = useState(stock - initial);

    console.log("Stock: " + currentStock)
    console.log("Count: " + count)
    console.log("-----------")

    const increment = () => {
        if (currentStock > 0){
            setCount(count + 1)
            setStock(currentStock - 1)
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
            setStock(currentStock + 1)
        }
    };

    const onAdd = () => {

    }

    return (
        <div className='grid w-96 m-auto mt-8'>
            <div className='bg-slate-200 p-4'>
                <h2 className='text-left'>ItemListContainer</h2>
                <div className='flex justify-between bg-white mt-2 font-semibold text-2xl bold px-4 text-lg border border-zinc-700 rounded-lg items-center h-10'>
                    <button className="text-3xl text-sky-700" onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button className="text-3xl text-sky-700" onClick={increment}>+</button>
                </div>
            </div>
            <button className='p-2 m-4 h-10 hover:bg-slate-200 bg-white text-sky-600 border border-sky-600 rounded-lg' onClick={onAdd}>Agregar al carrito</button>

            <p className='p-2 m-4 text-xl'>Ha seleccionado: {count} elementos.</p>

        </div>
    );
};

export default ItemCount;