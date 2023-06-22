// Elemento padre de productDetail
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import { ItemCount } from "../../itemCount";
import ProductDetail from "./ProductDetail"
import { CartContext } from "../../../context/CartContext";

function ProductDetailContainer(){

    function onAdd( cantidad ){ //No podemos devolver o mandar una variable desde el hijo al padre, SI podemos ejecutar una funcion que existe en el padre en el hijo, y el hijo a traves de los parametros le hace llegar la informacion al padre. Ejecutamos la funcion onAdd en el hijo, y en el hijo, lo que retornara es el "count" que se encuentra en ItemCount.
        let data ={
          ...productSelected,
          quantity: cantidad
        }
        
        addToCart(data)
    }
  
    const {addToCart, getTotalQuantityById} = useContext(CartContext);
    const [productSelected, setProductSelected] = useState({});
    const { num_id } = useParams(); //PARTE 2. Con useParams recuperamos el lo contenido en itemDetail/2. Es decir, el numero 2, que es la parte dinamica. Para despues, desplegar la nueva pagina con los detalles del calzado seleccionado. num_id debe ser el mismo nombre de la ruta en la linea 23 en App.js porque es el nombre del parametro dinamico en el mismo.
    const cantidad = getTotalQuantityById(Number(num_id));
    useEffect(() => {

        let productFind = products.find((evento) => {
            return evento.id === Number(num_id); //Tod0 lo que recuperamos desde la web, en este caso, el id, se recibe como un elemento de tipo string. Por lo que, es necesario convertir ese elemento a un numero.
        });

        const getProduct = new Promise((res) => {
            return res(productFind);
        })

        getProduct
        .then((res) => {setProductSelected(res)})
        .catch((err) => {console.log("Error: ", err);});
    }, [num_id]);
    
    //console.log(productSelecteds);

    return (
        <>
          <ProductDetail productSelected={productSelected}/>
          {
            productSelected.stock > 0 ? (<ItemCount initial={cantidad} stock={productSelected.stock} onAdd={onAdd}/>) : (<h3>No hay nada</h3>)
          }
        </>
    )
}

export default ProductDetailContainer

/* Mismo codigo que el primero, pero la funcion onAdd se encuentra aqui, ya que todo el codigo JS se ejecuta en los Container, y no en lo presentacionales.
// Elemento padre de productDetail
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ProductDetail from "./ProductDetail"
import { CartContext } from "../../../context/CartContext";

function ProductDetailContainer(){

  
    const {addToCart} = useContext(CartContext);
    const [productSelected, setProductSelected] = useState({});
    const { num_id } = useParams(); //PARTE 2. Con useParams recuperamos el lo contenido en itemDetail/2. Es decir, el numero 2, que es la parte dinamica. Para despues, desplegar la nueva pagina con los detalles del calzado seleccionado. num_id debe ser el mismo nombre de la ruta en la linea 23 en App.js porque es el nombre del parametro dinamico en el mismo.

    useEffect(() => {

        let productFind = products.find((evento) => {
            return evento.id === Number(num_id)
        });

        const getProduct = new Promise((res) => {
            return res(productFind);
        })

        getProduct
        .then((res) => {setProductSelected(res)})
        .catch((err) => {console.log("Error: ", err);});
    }, [num_id]);
    
    //console.log(productSelected);

    return (
        <>
          <ProductDetail productSelected={productSelected} addToCart={addToCart}/>

        </>
    )
}

export default ProductDetailContainer */

/* //Enrutado con forma estatica
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./Navbar.modules.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision-43240</Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar; */

/* //Sin router
import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import { products } from "../../../productsMock";

function ProductDetailContainer(){
    const [productSelected, setProductSelected] = useState({});

    let id_N = 3;

    useEffect(() => {

        let productFind = products.find((evento) => {
            console.log(evento.id);
            return evento.id === id_N
        });

        const getProduct = new Promise((res, err) => {
            return res(productFind);
        });

        getProduct
        .then((res) => {setProductSelected(res)})
        .catch((err) => {console.log("Error: ", err);});
    }, [id_N]);

    console.log(productSelected);
    return <ProductDetail productSelected={productSelected}/>
}

export default ProductDetailContainer */


//33:40