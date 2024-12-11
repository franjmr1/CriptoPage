import Criptos from "./Criptos"
import '../GridCriptos.css'


const GridCriptos = ({criptomonedas}) =>{
  return(
    <div className="cripto-container">
        {criptomonedas.map(({id, name,priceUsd,symbol,changePercent24Hr}) => (
          <Criptos key={id} name={name}  priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} id={id}/>
        ))}
    </div>
  )
}
export default GridCriptos