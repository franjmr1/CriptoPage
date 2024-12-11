import axios from "axios"
import { useEffect, useState } from "react"

//Este es un hook personalizado el cual originalmente en criptopage haciamos 2 veces el useState y el useEffect
//Creamos un hook personalidado que nos permita optimizar nuestra app. Solo con mandarla a llamar ya me trae todos los datos de la API solicitada con la URL.
const usePetition = (url) =>{

    const API_URL = import.meta.env.VITE_API_URL //URL QUE SE USA EN TODOS

    const [data,setData] = useState()//ESTADO


    useEffect(() => {//USEEFFECT
    axios.get(`${API_URL}${url}`)
      .then(data =>{
        setData(data.data.data)
      })
      .catch(e => console.error(e))
  }, [])


  return data
}

export default usePetition