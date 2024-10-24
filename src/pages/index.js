import React, { useState } from 'react'
import { Cabecalho } from '../componentes/cabecalho'
import { Cartao } from '../componentes/cartao'
import { ListaItem } from '../componentes/listaItem'
import { Rodape } from '../componentes/rodape'

export default function App() {
  const [contador, setContador] = useState(0)

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  const listaItens = ['React', 'JavaScript', 'CSS', 'HTML']

  return (
    <div className="app">
      <Cabecalho titulo="Minha Aplicação React" subtitulo="Aprendendo componentes básicos" />
      
      <main>
        <Cartao
          titulo="Exemplo de Cartão"
          conteudo={`Este é um exemplo de cartão. O contador está em: ${contador}`}
          botaoTexto="Incrementar"
          onClickBotao={incrementarContador}
        />

        <h3>Lista de Tecnologias:</h3>
        <ul>
          {listaItens.map((item, index) => (
            <ListaItem key={index} texto={item} />
          ))}
        </ul>
      </main>

      <Rodape texto="© 2024 Minha Aplicação React" />
    </div>
  )
}