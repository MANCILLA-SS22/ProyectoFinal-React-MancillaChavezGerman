import { Badge } from "@mui/material"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidwet(){
  const {getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  
  return (
    <div>
        <Link to={"/carrito"}>
          <Link to="/carrito">
            <Badge badgeContent={totalItems} showZero color="error" style={{color:"white"}}>
              <BsFillCartCheckFill size="35px"/>
            </Badge>
          </Link>
        </Link>
        
    </div>
  )
}

export default CartWidwet