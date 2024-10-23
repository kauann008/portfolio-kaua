import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Titulo } from "@/componentes/title";
import { Card } from "@/componentes/card";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const matematica = (numero1, numero2) => {
    return numero1 + numero2;
  };

  return (
    <div>
      <Titulo nome="João" />
      <Titulo nome="Victor" />
      <Titulo nome="Kauan" />
      <Titulo nome="Camille" />
      <Titulo nome="Valéria" />

      <Card
        titulo="Este é o meu card"
        paragrafo="Texto do meu card"
        textBotao="Clique aqui"
      />
    </div>
  );
}
