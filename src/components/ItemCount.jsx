//Elemento hijo de productDetail
import { useCount } from "./hooks/useCount";
import { Button } from "@mui/material";

export function ItemCount({initial=1, stock, onAdd}) {
//                                                           1      5
    const {count, decrement, increment, reset} = useCount(initial,stock, 1)

    return (
        <>
            <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
                <Button variant="contained" disabled={stock < 1 ? true : false} onClick={decrement}>-</Button>
                <h2>{count}</h2>
                <Button variant="contained" onClick={increment}>+</Button>
                
                <Button variant="contained" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
            <Button variant="contained" onClick={reset}>Reset</Button>
        </>
    )
}

