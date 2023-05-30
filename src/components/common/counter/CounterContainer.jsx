import Counter from "./Counter"
import { useState } from "react";

function CounterContainer(){
    const [contador, setContador] = useState (0);
    
    return (
    <Counter conteo={contador} setConteo={setContador} />
  )
}

export default CounterContainer