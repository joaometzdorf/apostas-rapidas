"use client";

import React from "react";
import "./Main.css";
import PostList from "./PostList";
import { PostCardProps } from "../PostCard";
import Link from "next/link";

const Main = ({
  title,
  apostas,
}: {
  title: string;
  apostas: PostCardProps[];
}) => {
  return (
    <main className="main">
      <section className="section-title">
        <h2>Dicas de Apostas Diárias</h2>
        <p>
          Análises curtas e objetivas para suas apostas em Futebol e Basquete.
        </p>
      </section>
      <section className="section-options">
        <Link href="/">Todos</Link>
        <Link href="/futebol">Futebol</Link>
        <Link href="/basquete">Basquete</Link>
      </section>
      <div className="traco">
        <div></div>
        <h3>{title}</h3>
      </div>
      <PostList posts={apostas} />
    </main>
  );
};

export default Main;
