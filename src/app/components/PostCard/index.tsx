import React from "react";
import "./PostCard.css";
import { Calendar, Share } from "lucide-react";
import Link from "next/link";

export interface PostCardProps {
  category: string;
  id: string;
  titulo: string;
  data_jogo: string;
  time_a: string;
  time_b: string;
  aposta_segura: string;
  odd_segura: string;
}

const PostCard = ({
  category,
  id,
  titulo,
  data_jogo,
  time_a,
  time_b,
  odd_segura,
  aposta_segura,
}: PostCardProps) => {
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/aposta/${id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Aposta: ${titulo}`,
          text: `Veja essa análise de aposta: ${titulo}`,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      alert("O compartilhamento não é suportado neste navegador.");
    }
  };

  return (
    <div className="post-card-container">
      <div className="category">
        <span>{category}</span>
      </div>

      <div className="infos">
        <h2>
          <Link href={`/aposta/${id}`}>{titulo}</Link>
        </h2>
        <div className="calendar">
          <Calendar />
          <span>{data_jogo}</span>
        </div>
        <div className="teams">
          <h3>{time_a}</h3>
          <span>VS</span>
          <h3>{time_b}</h3>
        </div>
      </div>

      <div className="aposta-principal">
        <div className="aposta">
          <span>Aposta Principal: </span>
          <span>Odd {odd_segura}</span>
        </div>
        <div className="aposta-segura">
          <h3>{aposta_segura}</h3>
        </div>
      </div>

      <div className="analise-completa">
        <Link href={`/aposta/${id}`}>Ver análise completa</Link>
        <button
          title="compartilhar"
          onClick={handleShare}
          className="share-button"
        >
          <Share />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
