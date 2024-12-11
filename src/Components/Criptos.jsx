import { Link } from 'react-router-dom'
import '../Criptos.css'

const Criptos = ({id,name,priceUsd,symbol,changePercent24Hr}) => {
  return(
    <Link to={`/criptomonedas/${id}`} className='cripto-link'>
    <div className='unit-container'>
      <h3 className="title">{name}</h3>
      <div className='titles-container'>
        <p className='title-label'>Precio: <span className="label">{parseFloat(priceUsd).toFixed(8)}</span></p>
        <p className='title-label'>Simbolo: <span className="label">{symbol}</span></p>
        <p className='title-label'>Variacion 24hr: <span className={parseFloat(changePercent24Hr) > 0 ? "label-esp" :"label-esp-neg"}>{parseFloat(changePercent24Hr).toFixed(3)}%</span></p>
      </div>
    </div>
    </Link>
  )
}
export default Criptos