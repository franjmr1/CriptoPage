import { useParams } from "react-router-dom"
import "../CriptoPage.css"
import usePetition from "../hooks/usePetition"

const CriptoPage = () => {

  const params = useParams()

  const criptomoneda = usePetition(`assets/${params.id}`)//usePetition es un hook personalizado que hace el useState y el useEffec en un solo hook, recibe solo la info
  const history = usePetition(`assets/${params.id}/history?interval=d1`)
  
  if(!criptomoneda && !history) return <span>Cargando...</span>

  return(
    <div className="main-container-criptopage">
      <h1>{criptomoneda.name}</h1>
      <h3>USD ${parseFloat(criptomoneda.priceUsd).toFixed(2)}</h3>
      <div className="cripto-info-container">
        <p>Simbolo: <span>{criptomoneda.symbol}</span></p>
        <p>Vol (24h): <span>{parseFloat(criptomoneda.volumeUsd24Hr).toFixed(5)}</span></p>
        <p>Oferta máxima en: <span> BTC {parseFloat(criptomoneda.maxSupply).toFixed(2)}</span></p>
        <p>Oferta en: <span> BTC {parseFloat(criptomoneda.supply).toFixed(2)}</span></p>
        <p>Cap. Mercado: <span> {parseFloat(criptomoneda.marketCapUsd).toFixed(5)}</span></p>
        <p>Variacion 24hr:  <span>{parseFloat(criptomoneda.changePercent24Hr).toFixed(3)}</span></p>
      </div><br /><br />
      <h3>HISTORIAL</h3>
      <div className="history-container">
        {
          (history) && (
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {
                  history.map(({date,priceUsd,time}) => (
                    <tr key={time}>
                      <td className="label">{new Date(date).toDateString()}</td>
                      <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }
      </div>
    </div>
  )
}

export default CriptoPage