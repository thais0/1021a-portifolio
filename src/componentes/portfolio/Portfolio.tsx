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
         titulo:'Barbie',
         descricao:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
         imagem:'/barbie.png'
    },
    {  
         id:2,
         titulo:'App gerel',
         descricao:'Para melhor gerenciamento dos clientes e atividades da empresa GEREL, o sistema servirá para armazenar as informações dos usuários e eventos.',
         imagem:'/Conesul Voleibol.jpeg'
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
            {
              projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map((projeto)=><Projeto key={projeto.id} titulo={projeto.titulo} descricao={projeto.descricao} imagem={projeto.imagem}/>)
            }
        </div>
        </>
    )
}
export default Portfolio
