import './Header.css'
import LinkNav from './../linknav/LinkNav'
function Header(){
    return(
        <header>
    <div>
        <h1 className="lg">Thaís</h1>
    </div>
    <nav>
        <ul>
            <li>
                <LinkNav url="/" texto='Home'/>
            </li>
            <li>
                <LinkNav url="/Projetos" texto='Projetos'/>
            </li>
            <li>
                <LinkNav url="/Sobre" texto='Sobre'/>
            </li>
            <li>
                <LinkNav url="/Contato" texto='Contato'/>
            </li>
        </ul>
    </nav>
</header>
    )
}
export default Header    