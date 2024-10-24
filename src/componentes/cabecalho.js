export function Cabecalho(props ) {
    return (
      <header className="cabecalho">
        <h1>{props.titulo}</h1>
        {props.subtitulo && <h2>{props.subtitulo}</h2>}
      </header>
    )
  }