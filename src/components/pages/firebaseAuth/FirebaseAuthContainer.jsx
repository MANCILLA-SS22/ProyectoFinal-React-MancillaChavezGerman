import { useNavigate } from "react-router-dom";
import "./FirebaseAuthContainer.css"

function FirebaseAuth() {

    const navigate = useNavigate();

    //1) En firebase, registramos un email con el cual querramos iniciar secion. En este caso, la primera fue coder@gmail.com y clave 000000
    //2) Procedemos a agregar un boton que nos permita agregar otra cuenta pero directamente desde VS code. 

    function option1(){
        navigate("/ingresar-email")
    }

    function option2(){
        navigate("/registrarse")
    }

    function option3(){
        navigate("/ingresar-google")
    }

    return (
        <div className="d-flex flex-column align-items-center" style={{background:"linear-gradient(#141e30, #243b55)"}}>
            <div className="border border-dark-subtle p-5 m-5">
                <h2 className="text-light">FirebaseAuth</h2>
                <button className="custom-btn btn-16 w-100 text-light" onClick={option1}>Ingresar con email</button>
    
                <h4 className="text-light">Aun no tienes cuenta?</h4>
                <button className="custom-btn btn-16 w-100 text-light" onClick={option2}>Registrate</button>
    
                <h4 className="text-light">Ingresar con google</h4>
                <button className="custom-btn btn-16 w-100 text-light" onClick={option3}>Ingresar con google</button>
            </div>
        </div>
    )
}

export default FirebaseAuth