









 import React from 'react';
import { Cabecalho } from '../componentes/cabecalho';
import { Titulo } from '../componentes/title';
import { TituloSessao } from '../componentes/tituloSessao';
import { Cartao } from '../componentes/cartao';
import { Rodape } from '../componentes/rodape';
import { Likes } from '@/componentes/Likes';

const projetos = [
  { nome: 'Sobre mim', descricao: 'Prazer meu nome e Kauan Rodrigues Regino,Tenho 16 anos moro em palmas tocantins' },
  { nome: 'Projeto 2', descricao: 'Minha historia ' },
  { nome: 'Projeto 3', descricao: 'Meus titulos individuais' },
];

export default function Home() {
  return (
    <div className="app">
      <Cabecalho
        nome="Meu Portfólio"
        subtitulo="Bem-vindo ao maraca"
        descricao="Aqui você encontrará uma seleção dos meus projetos e experiências."
      />
      <Likes/>
      <Titulo nome="Projetos" subnome="Alguns dos meus trabalhos recentes" />
      <section className="projetos">
        {projetos.map((projeto, index) => (
          <Cartao
            key={index}
            titulo={projeto.nome}
            conteudo={projeto.descricao}
            botaoTexto="Acessar"
            onClickBotao={() => alert(`Abrindo ${projeto.nome}`)}
          />
        ))}
      </section>
      <TituloSessao titulo="Espero que você tenha gostado." />
      Livre para todos os publicos. 
      <Rodape
        nome=" Criador Kauan Rodrigues"
        linkGithub="https://github.com/seuusuario"
        linkLinkedin="https://linkedin.com/in/seuusuario"
        email="kauanrodrigues5527@gmail.com"
      />
    </div>
  );
}
