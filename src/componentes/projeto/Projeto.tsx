import './Projeto.css'
type ProjetoProps = {
    titulo:string,
    descricao:string,
    imagem:string
}
function Projeto(props:ProjetoProps){
    return(
        <div className="projeto-content">
            <div className='foto-projeto'>
                <img className="img-projeto" src={props.imagem} alt="" /></div>
            <div className="text-titulo">
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
            </div>
        </div>
    )
}
export default Projeto