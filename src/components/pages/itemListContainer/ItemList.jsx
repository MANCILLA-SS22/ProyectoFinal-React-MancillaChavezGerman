const ItemList = ( {conta, setConta} ) => {
  return (
    <>
        <h1>Aca van los productos</h1>
        <button onClick={ () => setConta(conta + 1)}>Sumador</button>
    </>
  )
}

export default ItemList