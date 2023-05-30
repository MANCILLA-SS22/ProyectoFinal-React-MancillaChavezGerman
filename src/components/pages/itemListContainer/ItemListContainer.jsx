import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer( {res} ){

    const [contador, setContador] = useState(0);
    console.log("El componente se actualiza")

    useEffect( ()=> {
        console.log("Se hace la peticion a la API");
    }, []) 

    useEffect( ()=> {
        console.log("Me ejecuto de forma condicional");
    }, [contador, res])

    return <ItemList conta={contador} setConta={setContador} />

}

export default ItemListContainer