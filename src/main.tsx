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
    path: "/Home",
    element: <div>Página Home!</div>,
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
    element: <div className='Contato'>
      <nav>
        <ul>
          <li>
            <p>Nome:</p>
          </li>
          <li>
            <p>E-mail:</p>
          </li>
          <li>
            <p>Telefone:</p>
          </li>
          <li>
            <p>Endereço:</p>
          </li>
        </ul>
      </nav>
      </div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)