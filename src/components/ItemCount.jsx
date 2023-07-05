//Elemento hijo de productDetail
import { useState } from "react";
import { useCount } from "./hooks/useCount";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function ItemCount({initial=1, stock, onAdd}) {
//                                                           1      5
    const {count, decrement, increment, reset} = useCount(initial,stock, 1)
    const [isAdd, setIsAd] = useState(false);
    const navigate = useNavigate();

    return (
            <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
                
                {
                    !isAdd && (
                        <>
                            <Button variant="contained" disabled={stock < 1 ? true : false} onClick={decrement}>-</Button>
                            <h2>{count}</h2>
                            <Button variant="contained" onClick={increment}>+</Button>
                            <Button variant="contained" onClick={reset}>Reset</Button>
                        </>
                    )
                }

                {
                    isAdd ? <Button variant="contained" onClick={ () => {navigate("/cart")}}>Ir al carrito</Button> :
                            <Button variant="contained" onClick={ () => {onAdd(count), setIsAd(true)} }>Agregar al carrito</Button>
                }



                {/* <Button variant="contained" onClick={ () => {onAdd(count), setIsAd(true)} }>
                    {
                        isAdd ? "Ir al carrito" : "Agregar al carrito"
                    }
                </Button> */}
            </div>
    )
}

