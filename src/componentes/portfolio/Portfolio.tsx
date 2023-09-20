import {useState} from 'react'
import Projeto from '../projeto/Projeto'
import './Portfolio.css'
import Fundo from './../../../public/portfolio-logo-ERConsultoria.webp'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
function Portfolio(){
const [texto,setTexto]=useState("")

const projetos:ProjetoType[] = [
    {
         id:1,
         titulo:'Site da Barbie',
         descricao:'Estamos usando o site da barbie, como base para criar nosso portfolio.',
         imagem:'/barbie.png'
    },
    {  
         id:2,
         titulo:'Aplicativo Gerel',
         descricao:'Para melhor gerenciamento dos clientes e atividades da empresa GEREL, o sistema servirá para armazenar as informações dos usuários e eventos.',
         imagem:'/gerel.png'
    },
    {  
        id:3,
        titulo:'Estágio',
        descricao:'Esse estágio foi feito na refrigeração do Gilmar, onde eu fazia nota, boleto, atendia as pessoas e anotava pedido de gelo.',
        imagem:'/estagio.jpg'
   },
   {  
        id:4,
        titulo:'Site de Volei',
        descricao:'Esse projeto é um site de volei, onde vende acessórios de volei.',
        imagem:'/volei.jpg'
   }
]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    setTexto (e.target.value)
    }
    return(
        <>
        <main>
             <div style={{backgroundImage: `url(${Fundo})`}} className="img"></div>
        </main>
        <div className='campo_pesquisa'>
            <p>Busque um projeto</p>
            <input type="text" className='botao_pesquisa' placeholder='Pesquise um Projeto' onChange={TrataTexto}/>
            {
              (texto)?
              <p>Resultados Para: {texto}</p>:""
            }
            <div className='contents'>
            <div className='content'>
            {
              projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map((projeto)=><Projeto key={projeto.id} titulo={projeto.titulo} descricao={projeto.descricao} imagem={projeto.imagem}/>)
            }
            </div>
            </div>
        </div>
        </>
    )
}
export default Portfolio
