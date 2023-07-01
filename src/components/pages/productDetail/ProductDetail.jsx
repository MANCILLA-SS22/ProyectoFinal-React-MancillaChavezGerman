//Elemento hijo / Elemento padre de ItemCount
import { ItemCount } from "../../itemCount";
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
        productSelected.stock > 0 ? 
        (<div style={{ display: "flex", justifyContent: "center" }}><ItemCount initial={cantidad} stock={productSelected.stock} onAdd={onAdd}/></div>) : 
        (<h3>No hay nada</h3>)            
      }    

      </div>
  )
}

export default ProductDetail

