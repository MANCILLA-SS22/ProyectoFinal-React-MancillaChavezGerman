import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

function ItemListContainer(){

    /* const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    }; */

    const [items, setItems] = useState([]); //console.log(items);
    const {categoryName} = useParams(); //console.log(categoryName);
    
    useEffect(() => {
        let productosFiltrados = products.filter( (producto) => {
            return producto.category === categoryName;
        }); //console.log(productosFiltrados);

        const tarea = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoryName ? productosFiltrados : products);
            }, 500);
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

    //condicional con return termprano
    if (items.length === 0) {
        return (
        <div style={{width: "100%",height: "90vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
            <ScaleLoader color="steelblue" width={40} height={111}  />
            {/* <h1>Espere por favor...</h1> */}
        </div>
        )
    }

    //Return de sin usar spinner
    return <ItemList Items={items}/>;

    /* return(
        <div>
            {
                items.length > 0 ? <ItemList Items={items}/> : (<ClipLoader cssOverride={override} color="#36d7b7" />)
            }
        </div>
    ) */

    
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