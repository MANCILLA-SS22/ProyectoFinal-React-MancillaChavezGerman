import {loginWithGoole } from "../../../firebaseConfig"
import "./IngresarGoogle.css"

function IngresarGoogle() {

  async function handleSubmitGoogle(){
        let res = await loginWithGoole(); 
        console.log(res);
    }

  return (
    <div className="d-flex flex-column align-items-center mt-5 mb-5">
      <h4 className="text-light">Ingresar con google</h4>
      <button className="custom-btn btn-16 w-25 text-light" onClick={handleSubmitGoogle}>Ingresar</button>
    </div>
  )
}

export default IngresarGoogle