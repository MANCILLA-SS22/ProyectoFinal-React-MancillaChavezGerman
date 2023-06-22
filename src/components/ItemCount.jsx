//Elemento hijo de productDetail
import { useCount } from "./hooks/useCount";

export function ItemCount({initial=1, stock, onAdd}) {
//                                                           1      5
    const {count, decrement, increment, reset} = useCount(initial,stock, 1)

    return (
        <>
            <div className="count--container">
                <button onClick={decrement}><h1>-</h1></button>
                <span>{count}</span>
                <button onClick={increment}><h1>+</h1></button>
                
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            <button onClick={reset}><h1>Reset</h1></button>
        </>
    )
}

