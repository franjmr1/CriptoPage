import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import Inicio from './Components/Inicio.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './Components/404.jsx'
import AppCriptos from './Components/AppCriptos.jsx'
import CriptoPage from './Components/CriptoPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App/>}>
          <Route index element = {<Inicio/>} />
        </Route>
        <Route path='/criptomonedas' element = {<App/>}>
          <Route index element = {<AppCriptos/>} />
          <Route path=':id' element = {<CriptoPage/>}/>
        </Route>
        <Route path='*' element={<Pagina404/>}/>
      </Routes>
    </BrowserRouter>
  </>
)
