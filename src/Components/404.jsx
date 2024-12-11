import '../404.css'
import ErrorImage from '../img/error-404.png'

const Pagina404 = () => {
  return(
    <div className='error-container'>
      <img src={ErrorImage} alt="Error 404" />
      <h1>Pagina No Encontrada</h1>
      <span>Es posible que la ruta de la pagina esté incorrecta</span>
    </div>
  )
}

export default Pagina404