"use client"

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";
import "./auth.css";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setError("Erro ao fazer Login");
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="auth-login">
      <div>
        <h2>Painel Administrativo</h2>
        <p>Faça login</p>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Auth;
