import './ListaSuspensa.css'

const ListaSuspensa = () => {
    console.log(props.itens)

    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )

    
}

export default ListaSuspensa

//renderizar um html para cada item da lista. Normalmente faz um tipo de for, no caso do React faz de uma forma mais js 
//map aparece com MUITA frequencia. Vários maps e devolve cada coisinha. If e for não aparecem
//para cada item retorna uma option e este é o caso + simples de escrever. Maneira tradicional: 
//{props.itens.map(item => {
//   return <option>{item}</option>
//)}}