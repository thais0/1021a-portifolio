import './Portfolio.css'
import Fundo from './../../assets/img/portfolio-logo-ERConsultoria.webp'

function Portfolio(){
    return(
        <main>
             <div style={{backgroundImage: `url(${Fundo})`}} className="img">
            </div>
        </main>
    )
}
export default Portfolio
