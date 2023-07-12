import { login,  } from "../../../firebaseConfig"
import "./IngresarEmail.css"

function IngresarEmail(){

    let infoInput = {
        email: "coder@gmail.com",
        password: "ellgerhmman"
    }

    async function handleSumbmit(){
        let res = await login(infoInput);
        console.log(res);
    }

    return (
    <div className="d-flex flex-column align-items-center mt-5 mb-5">
        <h2 className="text-light">Ingresar con Email</h2>
        <button className="custom-btn btn-16 w-25 text-light" onClick={handleSumbmit}><span style={{color:"white"}}>Sign in</span></button>
    </div>
    )
}

export default IngresarEmail


/* import { login } from "../../../firebaseConfig"
import "./IngresarEmail.css"
import { useState } from "react";

function IngresarEmail(){

    // let infoInput = {
    //     email: "coder@gmail.com",
    //     password: "ellgerhmman"
    // }

    const [userData, setUserData] = useState({email: "",password:""}); //console.log(userData);
    async function handleSubmit(evento){ //console.log(evento);
        evento.preventDefault();

        

        let res = await login(data);
        console.log(res);

  let data = {
          email: userData.email,
          password: userData.password
        }
        console.log(data);
        
        if (!userData.password.includes("@") || userData.Name.length < 3) {
            console.log("El campo no es vallido");
            return; //Este return ocaciona que la funcion se corte o ya no se ejecute.
        }

  
    //console.log(data);
    }

    function handleChange(evento){
        setUserData({...userData, [evento.target.email]: evento.target.value});   
        //console.log([evento.target.email], " --- ", evento.target.email);
    }   
 Usamos corchetes en evento.target.name porque lo que estamos reciviento es un STRING. Por lo cual, para acceder a un elemento string de un objeto, no podemos hacer 
    algo como esto: evento.target.name. Para ello, debemos usar todo eso dentro de unos corchetes para obtener el string dentro de los "", y de esa manera, poder apceder a la clave
    el atributo "name" en evento.target.name representa el perteneciente al formulario, los cuales son los de Name y lastName
    
    return (
        <div>
            <h2>Este es el formlario</h2>    
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
                <input type="text" placeholder="Password" name="password" onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default IngresarEmail */

/* import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { login } from "../../../firebaseConfig"
import "./IngresarEmail.css"
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function IngresarEmail(){

    let infoInput = {
        email: "coder@gmail.com",
        password: "ellgerhmman"
    }

    async function handleSumbmit(){
        let res = await login(infoInput);
        console.log(res);
    }

    
    const[showPassword, setShowPassword] = useState(false);
    return (

      <Box sx={{background:"white", width:"100%", gap:"30px", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
            <TextField id="outlined-basic" label="Email" variant="outlined" color='secondary' size='medium'/>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={ 
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"/>
            </FormControl>
            <Button onClick={handleSumbmit} variant="contained" color='secondary'>Ingresar</Button>
        </Box>    

  )
}

export default IngresarEmail */

