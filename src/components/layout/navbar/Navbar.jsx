import CoronavirusIcon from '@mui/icons-material/Coronavirus';
/* import imagenLogo from "../../../../public/imgs/target.png" */

export function Navbar() {

    return (
      <div>
        <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1685436587/Screenshot_77_didono.png" alt="" style={{width:"100px"}} /> {/* Forma de importar imagen metodo 1 */}
        {/* <img src={imagenLogo} alt="" /> Forma de importar imagen metodo 2  */}
        {/* <img src="/public/imgs/target.png" alt="" /> Forma de importar imagen metodo 3 */}


        <CoronavirusIcon/>
      </div>
    );
  
}