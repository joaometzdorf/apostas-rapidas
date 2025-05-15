"use client";

import React from "react";
import PostCard, { PostCardProps } from "../PostCard";
import "./Main.css";

const PostList = ({ posts }: { posts: PostCardProps[] }) => {
  return (
    <section className="section-cards">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            category={post.category}
            id={post.id}
            titulo={post.titulo}
            data_jogo={post.data_jogo}
            time_a={post.time_a}
            time_b={post.time_b}
            odd_segura={post.odd_segura}
            aposta_segura={post.aposta_segura}
          />
        );
      })}
    </section>
  );
};

export default PostList;
