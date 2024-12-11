import { Link } from 'react-router-dom';
import '../Home.css';

const Inicio = () => {
  return(
    <div className="home-main-container">
      <div className="home-header-container"> 
        <h1>CoinConnect</h1>
        <span className='slogan'>Conectando Monedas, Creando Oportunidades</span>
        <br /><br />
        <Link to = "/criptomonedas" className='btn-purple'> Ver Criptomonedas</Link>
      </div>
    </div>
  )
}

export default Inicio 