import React from 'react'

export default function Projetos(props) {

  return (
        <div className="projeto-item">
          <h3>{props.nome}</h3>
          <p>{props.descricao}</p>
        </div>
  )
}