import React from 'react';
import { Cabecalho } from '../componentes/cabecalho';
import { Titulo } from '../componentes/title';
import { TituloSessao } from '../componentes/tituloSessao';
import { Cartao } from '../componentes/cartao';
import { Rodape } from '../componentes/rodape';

const projetos = [
  { nome: 'Projeto kauan', descricao: 'Descrição do projeto A' },
  { nome: 'Projeto B', descricao: 'Descrição do projeto B' },
  { nome: 'Projeto C', descricao: 'Descrição do projeto C' },
];

export default function Home() {
  return (
    <div className="app">
      <Cabecalho
        nome="Meu Portfólio"
        subtitulo="Bem-vindo ao meu espaço"
        descricao="Aqui você encontrará uma seleção dos meus projetos e experiências."
      />
      <Titulo nome="Projetos" subnome="Alguns dos meus trabalhos recentes" />
      <section className="projetos">
        {projetos.map((projeto, index) => (
          <Cartao
            key={index}
            titulo={projeto.nome}
            conteudo={projeto.descricao}
            botaoTexto="Ver Projeto"
            onClickBotao={() => alert(`Abrindo ${projeto.nome}`)}
          />
        ))}
      </section>
      <TituloSessao titulo="Experiência e Educação" />
      <Rodape
        nome="Seu Nome"
        linkGithub="https://github.com/seuusuario"
        linkLinkedin="https://linkedin.com/in/seuusuario"
        email="kauanrodrigues5527@gmail.com"
      />
    </div>
  );
}
