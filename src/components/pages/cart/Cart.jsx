import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
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
                  <Button variant="contained" onClick={() => quitar(item.id)}>
                    Quitar
                  </Button>
                </div>
                </>
              );
            })
          }
        </div>

        <div className="cart-info"> 
          <h3>Cantidad de productos: {totalItems} </h3>
          <h3>El total del carrito es ${total.toFixed(3)}</h3>         
          {
            cart.length > 0 ? (
              <div className="btn-cart">
                <Button onClick={limpiar} variant="contained">
                  Vaciar carrito
                </Button>
                <Link to="/checkout">
                  <Button variant="contained">Finalizar compra</Button>
                </Link>
              </div>
            ) : (
              <Link to="/products">
                <Button variant="contained">Agrega productos</Button>
              </Link>
            )
          }
        </div>
        
      </div>
    </>
  );
}

export default Cart;