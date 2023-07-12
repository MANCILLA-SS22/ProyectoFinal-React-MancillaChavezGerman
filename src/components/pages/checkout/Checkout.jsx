import { Button, TextField } from '@mui/material'
import "./CheckoutContainer.css"

function Checkout( {handleSubmit, handleChange, errors} ) {
    return (
    <div style={{background:'#CACFD2'}} className='d-flex flex-column align-items-center pt-5'>
        <h1 className='titulo_h1'>Ingrese sus datos para finalizar la compra</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column w-100 align-items-center justify-content-center p-5">
                <TextField className='w-25 p-1' label="Name" variant="outlined" name="name" onChange={handleChange} helperText={errors.name} error={errors.name ? true : false}/>
                <TextField className='w-25 p-1 ' label="Email" variant="outlined" name="email" onChange={handleChange} helperText={errors.email} error={errors.email ? true : false}/>
                <TextField className='w-25 p-1' label="Phone" variant="outlined" name="phone" onChange={handleChange} helperText={errors.phone} error={errors.phone ? true : false}/>
                <Button className='25 border-light mt-3' type="submit" variant="outlined">Comprar</Button>
        </form>
    </div>
    )
}

export default Checkout