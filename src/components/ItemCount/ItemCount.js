
import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)
    };

    const increment = () => {
        setCount(count + 1)
    };

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
            <button className='p-2 m-4 h-10 hover:bg-slate-200 bg-white text-sky-600 border border-sky-600 rounded-lg'>Agregar al carrito</button>
        </div>

    );
};

export default ItemCount;