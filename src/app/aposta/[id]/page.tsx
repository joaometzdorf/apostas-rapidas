"use client";

import { supabase } from "@/app/utils/supabase";
import {
  AlarmClock,
  ArrowLeft,
  Calendar,
  MapPin,
  Share,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./aposta.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

interface ApostaProps {
  category: string;
  titulo: string;
  data_jogo: string;
  horario: string;
  campeonato: string;
  local: string;
  time_a: string;
  forma_time_a: string;
  time_b: string;
  forma_time_b: string;
  resumo: string;
  confronto_direto: string;
  media_gols: string;
  estatisticas: string;
  observacoes: string;
  aposta_segura: string;
  odd_segura: string;
  justificativa_segura: string;
  aposta_ousada: string;
  odd_ousada: string;
  justificativa_ousada: string;
  resumo_final: string;
}

const Aposta = () => {
  const { id } = useParams();
  const [post, setPost] = useState<ApostaProps | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Erro ao buscar postagem:", error);
      } else {
        setPost(data);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) return <p>Carregando...</p>;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.titulo,
        url: shareUrl,
      });
    } else {
      alert("Compartilhamento não suportado neste navegador.");
    }
  };

  return (
    <>
      <Header />
      <main className="aposta-main">
        <div className="voltar">
          <Link href="/">
            <ArrowLeft />
            <span>Voltar</span>
          </Link>
        </div>
        <div className="container-section-infos">
          <section className="section-infos">
            <div className="share-and-category">
              <h2>{post.category}</h2>
              <button onClick={handleShare}>
                <Share />
                <span>Compartilhar</span>
              </button>
            </div>
            <div className="full-infos">
              <div className="titulo">
                <h3>{post.titulo}</h3>
              </div>
              <div className="data-jogo">
                <div>
                  <Calendar />
                  <span>{post.data_jogo}</span>
                </div>
                <div>
                  <AlarmClock color="red" />
                  <span>{post.horario.slice(0, 5)}</span>
                </div>
              </div>
              <div className="campeonato">
                <Trophy />
                <span>{post.campeonato}</span>
              </div>
              <div className="local">
                <MapPin />
                <span>{post.local}</span>
              </div>
            </div>
          </section>
          <div className="line"></div>
          <section className="todas-estatisticas">
            <div className="forma-times">
              <h2>Forma Recente</h2>
              <div>
                <span>{post.time_a}</span>
                <span>{post.forma_time_a}</span>
              </div>
              <div>
                <span>{post.time_b}</span>
                <span>{post.forma_time_b}</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="resumo">
              <h2>Resumo</h2>
              <p>{post.resumo}</p>
            </div>
            <div className="line"></div>
            <div className="confronto-direto">
              <h2>Confronto Direto</h2>
              <span>{post.confronto_direto}</span>
              <div>
                <span>Média de Gols: {post.media_gols}</span>
              </div>
            </div>
            <div className="line"></div>

            <div className="estatisticas">
              <h2>Estátisticas e Observações</h2>
              <div className="background-stats">
                <span>{post.estatisticas}</span>
                <span>{post.observacoes}</span>
              </div>
            </div>
            <div className="line"></div>

            <div className="aposta-principal">
              <h2>Aposta Principal (Mais Segura)</h2>
              <div className="aposta-principal-container">
                <div>
                  <h3>{post.aposta_segura}</h3>
                  <span>Odd {post.odd_segura}</span>
                </div>
                <p>{post.justificativa_segura}</p>
              </div>
            </div>
            <div className="line"></div>

            <div className="aposta-bonus">
              <h2>Aposta Bônus (Ousada)</h2>
              <div className="aposta-bonus-container background-stats">
                <div>
                  <h3>{post.aposta_ousada}</h3>
                  <span>Odd {post.odd_ousada}</span>
                </div>
                <p>{post.justificativa_ousada}</p>
              </div>
            </div>
            <div className="line"></div>

            <div className="resumo-final">
              <h2>Resumo Final</h2>
              <div className="background-stats">
                <p>{post.resumo_final}</p>
              </div>
            </div>
            <div className="line"></div>

            <div className="jogo-responsavel background-stats">
              <h2>Aviso de Jogo Responsável</h2>
              <p>
                As informações contidas nesta análise são apenas sugestões.
                Aposte sempre de forma responsável e consciente. Lembre-se que
                apostas envolvem riscos e não há garantias de retorno. Este
                conteúdo é destinado a maiores de 18 anos.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Aposta;
