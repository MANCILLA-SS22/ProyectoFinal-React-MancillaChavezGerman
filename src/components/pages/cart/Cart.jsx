import "./Cart.css";
// import { button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function Cart({ cart, total, quitar, limpiar }) {
  const {getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <>
      <div className="cart-container">

        <div className="container-items">
          {
            cart.map((item) => {
              return (
                <>
                  <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info pe-3 ps-3">
                    <h2>{item.title}</h2>
                    <h2>${item.priceNow}.-</h2>
                    <h2>Unidades: {item.quantity}</h2>
                  </div>
                  <button className="btnx"  onClick={() => quitar(item.id)}>
                    Quitar
                  </button>
                </div>
                </>
              );
            })
          }
        </div>

        <div className="cart-info"> 
          <h3>Cantidad de productos: {totalItems} </h3>
          <h3>El total sin descuento es de ${total.toFixed(3)}</h3>
          <h3>El total del carrito con el 30% es de: ${total.toFixed(3) - (total.toFixed(3))*0.3}</h3>
          {
            cart.length > 0 ? (
              <div className="btn-cart">
                <button className="btnx" onClick={limpiar}>Vaciar carrito</button>
                <Link to="/checkout">
                  <button className="btnx">Finalizar compra</button>
                </Link>
              </div>
            ) : (
              <Link to="/products">
                <button className="btnx">Agrega productos</button>
              </Link>
            )
          }
        </div>
        
      </div>
    </>
  );
}

export default Cart;