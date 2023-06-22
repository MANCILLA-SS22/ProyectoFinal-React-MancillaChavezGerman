//Forma dinamica
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/MenuNavigate";
import styles from "../navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision-43240</Link>
        <ul className={styles.categories}>
          {
              menuNavigate.map(({ id, path, title }) => <Link key={id} to={path}> {title} </Link> )
          }
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
}

export default Navbar;

/* //Forma estatica
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./Navbar.modules.css";

function Navbar( {children} ) { // "children" es una palabra que ya existe en REACT, por lo que no se debe colocar otro nombre si es que queremos mostrar todos los demas elementos que tengan este navbar.
  console.log();
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision-43240</Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>

      {children}
    </>
  );
}

export default Navbar; */

/* //Forma estatica con react-router (<Outlet/>)
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./Navbar.modules.css";
import { Outlet } from "react-router-dom"

function Navbar() { // "children" es una palabra que ya existe en REACT, por lo que no se debe colocar otro nombre si es que queremos mostrar todos los demas elementos que tengan este navbar.
  console.log();
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision-43240</Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar; */

/* //Uso de enrutado SIN react router
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidwet from '../../cartWidwet/cartWidwet';

const pages = ['Firearms', 'Accessories', 'About us'];

export function Navbar( {children} ) { // "children" es una palabra que ya existe en REACT, por lo que no se debe colocar otro nombre si es que queremos mostrar todos los demas elementos que tengan este navbar.

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    return (
      <>
          <AppBar position="static">
              <Container maxWidth="xl">
                  <Toolbar disableGutters>
                  <img style={{width:"40px"}} src={"../imgs/target.png"} alt="target" />
                  <Typography id="res" variant="h4" noWrap component="a" href="/" sx={{mr: 2,display: { xs: 'none', md: 'flex' },
                  letterSpacing: '.3rem',color: 'black',textDecoration: 'none', marginLeft:"2px"}}>
                      ImpactGuns 
                  </Typography>
                  
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  
                  <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                      <MenuIcon />
                  </IconButton>
                  
                  <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left'}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'left'}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' }}}>
                      {pages.map((page) => (
                          <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                      ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"flex-end" }}>
                  {pages.map((page) => (
                    <Button id='res' key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block'}}>
                      {page}
                    </Button>
                  ))}
                </Box>
  
                <CartWidwet/>
  
      
              </Toolbar>
            </Container>
          </AppBar>
          {children}
      </>
  );
  
} */




