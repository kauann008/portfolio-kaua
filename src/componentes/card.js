export function Card(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.paragrafo}</p>
            <button>{props.textBotao}</button>
        </div>
    )
}