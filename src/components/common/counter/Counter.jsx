function Counter(conteo, setConteo){

    return ( 
        <div>
            <h2>{conteo}</h2>
            <button onClick={ ()=> setConteo(conteo + 1)}>Sumar</button>
            <button onClick={ ()=> setConteo(conteo - 1)}>Resart</button>
        </div>
    )
}


export default Counter