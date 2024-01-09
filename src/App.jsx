import { useEffect, useState } from 'react'

function App() {

  const [criptos,setCriptos] = useState()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) =>{
        setCriptos(data.data)
      })
      .catch(() => {
        console.error("La petición falló")
      })
  },[])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Criptos</h1>

      <ul>
        {criptos.map(({id, name,priceUsd}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ul>
    </>
  )
}

export default App
