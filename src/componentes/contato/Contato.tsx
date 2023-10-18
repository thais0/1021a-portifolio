import { useState } from 'react';
import './Contato.css'

function Contato(){

    const [textoC, setTextoC]=useState("")

    function TrataTextoC(e:React.ChangeEvent<HTMLInputElement>){
        setTextoC(e.target.value)
    }
    
    return(
        <div className='Contato'>
      <form className='CTT'>
            <input type="text" placeholder='Nome' onChange={TrataTextoC}/>
            <input type="email" placeholder='E-mail' onChange={TrataTextoC}/>
            <input type="tel" placeholder='Telefone' onChange={TrataTextoC}/>
            <input type="text" placeholder='Endereço' onChange={TrataTextoC}/>
            <button>Enviar</button>
            <div className="Cdigitado">
                {textoC && <p>{textoC}</p>}
            </div>
        </form>
      </div>
    )
}

export default Contato