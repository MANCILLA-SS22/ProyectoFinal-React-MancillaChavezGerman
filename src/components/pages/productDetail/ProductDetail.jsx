//Elemento hijo / Elemento padre de ItemCount
import { ItemCount } from "../../itemCount";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
import styles from "./ProductDetail.css";
function ProductDetail({productSelected, onAdd, cantidad}){ //console.log(productSelected);

  return (

      <div>
        <div className={styles.containerItemDetail}>
          
          <div className={styles.containerImage}>
            <img src={productSelected.img} alt="" />
          </div>
  
          <div className={styles.containerDetail}>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
              {productSelected.title}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
              {productSelected.description}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Precio:</span> $
              {productSelected.price}.-
            </h2>
          </div>

      </div>
      {
        productSelected.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}><ItemCount initial={cantidad} stock={productSelected.stock} onAdd={onAdd}/></div>) : (<h3>No hay nada</h3>)            
      }    
      </div>
  )
}

export default ProductDetail


/* Mismo codigo que el anterior pero la funcion onAdd se encuentra aqui y NO en el ProductListContainer.
//Elemento hijo / Elemento padre de ItemCount
import { ItemCount } from "../../itemCount"

function ProductDetail({productSelected, addToCart}){ //console.log(productSelected);


  function onAdd( cantidad ){ //No podemos devolver o mandar una variable desde el hijo al padre, SI podemos ejecutar una funcion que existe en el padre en el hijo, y el hijo a traves de los parametros le hace llegar la informacion al padre. Ejecutamos la funcion onAdd en el hijo, y en el hijo, lo que retornara es el "count" que se encuentra en ItemCount.
        let data ={
          ...productSelected,
          quantity: cantidad
        }
        
        addToCart(data)
    }

  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>    

      {
        productSelected.stock > 0 ? (<ItemCount initial={1} stock={productSelected.stock} onAdd={onAdd}/>) : (<h3>No hay nada</h3>)
      }

    </>
  )
}

export default ProductDetail */


