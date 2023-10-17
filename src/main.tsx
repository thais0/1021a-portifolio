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
            <input type="text" placeholder='Nome'/>
            <input type="email" placeholder='E-mail'/>
            <input type="tel" placeholder='Telefone'/>
            <input type="text" placeholder='Endereço'/>
            <button>Enviar</button>
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