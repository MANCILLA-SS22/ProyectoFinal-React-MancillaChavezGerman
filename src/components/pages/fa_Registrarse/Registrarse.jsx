import {register } from "../../../firebaseConfig"
import "./Registrarse.css"

function Registrarse() {

  let infoForRegiter = {
        email: "ger@gmail.com",
        password: "000000"
    } 
    
    //1) En firebase, registramos un email con el cual querramos iniciar secion. En este caso, la primera fue coder@gmail.com y clave 000000
    //2) Procedemos a agregar un boton que nos permita agregar otra cuenta pero directamente desde VS code. 
    async function registerWithEmail(){
        let res = await register(infoForRegiter);
        console.log(res);
    }

  return (
    <div className="d-flex flex-column align-items-center mt-5 mb-5">
      <h4 className="text-light">Aun no tienes cuenta?</h4>
      <button className="custom-btn btn-16 w-25 text-light" onClick={registerWithEmail}><span style={{color:"white"}}>Registrate</span> </button>
    </div>
  )
}

export default Registrarse