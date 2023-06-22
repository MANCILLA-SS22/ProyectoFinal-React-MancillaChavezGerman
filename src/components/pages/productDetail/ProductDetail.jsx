//Elemento hijo / Elemento padre de ItemCount

function ProductDetail({productSelected}){ //console.log(productSelected);

  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>    
    </>
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


