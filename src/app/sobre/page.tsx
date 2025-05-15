import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./sobre.css";

const Sobre = () => {
  return (
    <>
      <Header />
      <main className="main-sobre">
        <h2>Sobre o Apostas Rápidas</h2>

        <section className="missao">
          <h3>Nossa Missão</h3>
          <p>
            O <strong>Apostas Rápidas</strong> nasceu com um objetivo claro:
            fornecer análises confiáveis e diretas para apostadores de futebol e
            basquete, economizando seu tempo e ajudando-os a tomar decisões mais
            informadas.
          </p>
          <p>
            Sabemos que o tempo é valioso, por isso criamos um formato de
            análise que pode ser lido em menos de 2 minutos, contendo apenas as
            informações essenciais e eliminando conteúdos desnecessários.
          </p>
        </section>
        <section className="abordagem">
          <h3>Nossa Abordagem</h3>
          <p>
            Cada dica publicada em nosso site segue uma metodologia rigorosa de
            análise, considerando:
          </p>
          <ul>
            <li>Forma recente das equipes</li>
            <li>Estatísticas relevantes para o mercado de apostas</li>
            <li>Histórico de confrontos diretos</li>
            <li>Fatores contextuais (lesões, suspensões, calendário)</li>
            <li>Tendências de mercado e movimentação de odds</li>
          </ul>
          <p>
            Nossa equipe é composta por analistas apaixonados por esportes e com
            experiência no mercado de apostas, sempre buscando oferecer as
            melhores sugestões diárias.
          </p>
        </section>
        <section className="responsibilidade">
          <h3>Aposte com Responsabilidade</h3>
          <div className="responsibilidade-container">
            <p>
              Lembramos que todas as análises são apenas sugestões e
              recomendações. As apostas envolvem risco e não podemos garantir
              resultados.
            </p>
            <p>Recomendamos fortemente que você:</p>
            <ul>
              <li>Estabeleça limites claros para suas apostas</li>
              <li>Não aposte valores que não pode perder</li>
              <li>Entenda que apostas são uma forma de entretenimento</li>
              <li>Busque ajuda caso sinta que está perdendo o controle</li>
            </ul>
          </div>
        </section>
        <section className="contato">
          <h3>Contato</h3>
          <p>
            Para sugestões, dúvidas ou parcerias, entre em contato conosco pelo
            <br />
            email: <a href="mailto:">apostas.rapidas.blog@gmail.com</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
