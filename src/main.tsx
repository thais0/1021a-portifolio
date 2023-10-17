import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Portfolio from './componentes/portfolio/Portfolio'
import Footer from './componentes/footer/Footer'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header/>
              <Portfolio/>
              <Footer/>
            </>,
  },
  {
    path: "/Projetos",
    element: <div>Página de Projetos!</div>,
  },
  {
    path: "/Sobre",
    element: <div>Página Sobre!</div>,
  },
  {
    path: "/contato",
    element: 
    <>
    <Header/>
    <div className='Contato'>
      <form className='CTT'>
            <input className='contato-form' type="text" placeholder='Nome'/>
            <input className='contato-form' type="email" placeholder='E-mail'/>
            <input className='contato-form' type="tel" placeholder='Telefone'/>
            <input className='contato-form' type="text" placeholder='Endereço'/>
            <input type="submit" className="button" placeholder='Enviar'/>
        </form>
      </div>
      
      <Footer/>
      </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)