import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function ProductCard({evento}){
    return (
        <Card sx={{width: 345 }}>
        <CardMedia component="img" alt="green iguana" height="140" image={evento.img} title={evento.title}/>
        <CardContent>

            <Typography gutterBottom variant="h5" component="div">
                {evento.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {evento.description}
            </Typography> 
        </CardContent>

        <CardActions>

            {/* PARTE 3: Navegamos en la ruta itemDetail, seguido del id correspondiente a las 4 zapatillas. En la barra de navegacion aparece como, ejemplo: itemDetail/2 */}
            <Link to={`/itemDetail/${evento.id}`}>  <Button variant="contained">Ver detalles</Button>  </Link>
            
        </CardActions>
    </Card>
    )
}

export default ProductCard


/* //Forma estatica
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

function ProductCard({evento}){
    return (
        <Card sx={{width: 345 }}>
        <CardMedia component="img" alt="green iguana" height="140" image={evento.img} title={evento.title}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {evento.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {evento.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained">Ver detalles</Button>
        </CardActions>
    </Card>
    )
}

export default ProductCard */