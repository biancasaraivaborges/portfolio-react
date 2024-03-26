import './CampoTexto.css'
const CampoTexto = (props) => {

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>
            {/* quero que esse valor venha da variável */}
        </div>
    )

}

export default CampoTexto

//props vem de propriedades
//uma forma de colocar mais organizada é colocar uma função dentro de uma constante e chamar ela
//return com () para retornar várias coisas