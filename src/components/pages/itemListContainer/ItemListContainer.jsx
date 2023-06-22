import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

function ItemListContainer(){

    const [items, setItems] = useState([]); //console.log(items);
    const {categoryName} = useParams(); //console.log(categoryName);
    
    useEffect(() => {
        let productosFiltrados = products.filter( (producto) => {
            return producto.category === categoryName;
        }); //console.log(productosFiltrados);

        const tarea = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoryName ? productosFiltrados : products);
            }, 1);
        });

        // Metodo 1: .then() y .catch()
        tarea
        .then((res) => {setItems(res)})
        .catch((err) => {setItems(err)})

        /* // Metodo 2: async-await
        async function getData(){
            try {
                let res = await tarea;
                setFrase(res);
            }catch (err) {
                console.log(err);
            }
        }
        getData() */

    }, [categoryName]); 

    return <ItemList Items={items}/>;
}

export default ItemListContainer


/* import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";

function ItemListContainer(){

    const [items, setItems] = useState([]); //console.log(items);

    useEffect(() => {
        const tarea = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
                
            }, 3000);
        });

        // Metodo 1: .then() y .catch()
        tarea
            .then((res) => {setItems(res)})
            .catch((err) => {setItems(err)})

        // Metodo 2: async-await
        // async function getData(){
        //     try {
        //         let res = await tarea;
        //         setFrase(res);
        //     }catch (err) {
        //         console.log(err);
        //     }
        // }
        // getData()
        
    }, []); 

    return <ItemList Items={items}/>;
}

export default ItemListContainer */

/* function ItemListContainer( {res} ){

    const [contador, setContador] = useState(0); console.log("El componente se actualiza")

    useEffect( ()=> {
        console.log("Se hace la peticion a la API");
    }, []) 

    useEffect( ()=> {
        console.log("Me ejecuto de forma condicional");
    }, [contador, res])

    return <ItemList conta={contador} setConta={setContador} />
}

export default ItemListContainer */