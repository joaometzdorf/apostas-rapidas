"use client"

import React, { useEffect, useState } from "react";
import "./admin.css";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) router.push("/auth");
    };
    checkUser();
  }, [router]);

  const [formData, setFormData] = useState({
    titulo: "",
    time_a: "",
    time_b: "",
    data_jogo: "",
    horario: "",
    campeonato: "",
    local: "",
    forma_time_a: "",
    forma_time_b: "",
    resumo: "",
    confronto_direto: "",
    media_gols: "",
    observacao: "",
    estatisticas: "",
    aposta_segura: "",
    odd_segura: "",
    justificativa_segura: "",
    aposta_ousada: "",
    odd_ousada: "",
    justificativa_ousada: "",
    resumo_final: "",
    category: "Futebol",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.from("posts").insert([formData]);
    if (error) {
      alert("Erro ao criar postagem");
      console.error(error);
    } else {
      alert("Postagem criada com sucesso!");
    }
  };

  return (
    <div>
      <h2>Criar Postagem</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informações Gerais</legend>

          <div>
            <label>Categoria</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Futebol">Futebol</option>
              <option value="Basquete">Basquete</option>
            </select>
          </div>

          <div>
            <label>Título</label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Time A</label>
            <input
              type="text"
              name="time_a"
              placeholder="Nome do Time A"
              value={formData.time_a}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Time B</label>
            <input
              type="text"
              name="time_b"
              placeholder="Nome do Time B"
              value={formData.time_b}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Data do Jogo</label>
            <input
              type="text"
              name="data_jogo"
              value={formData.data_jogo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Horário do Jogo</label>
            <input
              type="time"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Campeonato</label>
            <input
              type="text"
              name="campeonato"
              placeholder="Nome do Campeonato"
              value={formData.campeonato}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Local</label>
            <input
              type="text"
              name="local"
              placeholder="Local do Jogo"
              value={formData.local}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Forma do Time A</label>
            <input
              type="text"
              name="forma_time_a"
              value={formData.forma_time_a}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Forma do Time B</label>
            <input
              type="text"
              name="forma_time_b"
              value={formData.forma_time_b}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Resumo dos Times</label>
            <textarea
              name="resumo"
              value={formData.resumo}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label>Histórico de Confrontos</label>
            <input
              type="text"
              name="confronto_direto"
              value={formData.confronto_direto}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Estatísticas e Observações</legend>

          <div>
            <label>Média de Gols</label>
            <input
              type="text"
              name="media_gols"
              value={formData.media_gols}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Observações sobre os Confrontos</label>
            <textarea
              name="observacao"
              value={formData.observacao}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label>Estatísticas</label>
            <input
              type="text"
              name="estatisticas"
              value={formData.estatisticas}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Aposta Principal</legend>

          <div>
            <label>Aposta</label>
            <input
              type="text"
              name="aposta_segura"
              value={formData.aposta_segura}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Odd</label>
            <input
              type="text"
              name="odd_segura"
              value={formData.odd_segura}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Justificativa</label>
            <textarea
              name="justificativa_segura"
              value={formData.justificativa_segura}
              onChange={handleChange}
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Aposta Bônus</legend>

          <div>
            <label>Aposta</label>
            <input
              type="text"
              name="aposta_ousada"
              value={formData.aposta_ousada}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Odd</label>
            <input
              type="text"
              name="odd_ousada"
              value={formData.odd_ousada}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Justificativa</label>
            <textarea
              name="justificativa_ousada"
              value={formData.justificativa_ousada}
              onChange={handleChange}
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Resumo Final</legend>
          <div>
            <label>Resumo Final</label>
            <textarea
              name="resumo_final"
              value={formData.resumo_final}
              onChange={handleChange}
            ></textarea>
          </div>
        </fieldset>

        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default Admin;
