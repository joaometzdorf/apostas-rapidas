import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="title">
          <h2>Apostas Rápidas</h2>
          <div>
            <span>
              Dicas diárias de apostas esportivas para futebol e basquete.
              Análises rápidas para ajudar em suas apostas.
            </span>
          </div>
        </div>
        <div className="links">
          <h2>Links</h2>
          <div>
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/futebol">Futebol</Link>
              </li>
              <li>
                <Link href="/basquete">Basquete</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal-notice">
          <h2>Aviso Legal</h2>
          <div>
            <span>
              Este site fornece apenas sugestões de apostas. Aposte com
              responsabilidade. Conteúdo direcionado para maiores de 18 anos.
            </span>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <span>&copy; 2025 Aposta Rápida. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
