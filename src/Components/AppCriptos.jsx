import { useEffect, useState } from 'react'
import GridCriptos from './GridCriptos'
import '../AppCriptos.css'

function AppCriptos() {

  const [criptos,setCriptos] = useState()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) =>{
        setCriptos(data.data)
        console.log(data.data)
      })
      .catch(() => {
        console.error("La petición falló")
      })
      
  },[])

  if(!criptos) return <span>Cargando...</span>

  return (
    <div className='main-container'>
      <div className='main-header'>
        <h1 className='header-title'>Criptomonedas</h1>
        <span className='header-info'> Consulta el valor de las criptomonedas en tiempo real</span>
      </div>
      <GridCriptos criptomonedas={criptos}/>
    </div>
  )
}

export default AppCriptos
