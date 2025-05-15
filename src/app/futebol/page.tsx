"use client"

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { PostCardProps } from "../components/PostCard";
import api from "../services/api";

const Futebol = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const apostasFutebol = posts.filter((post) => post.category == "Futebol");

  return (
    <>
      <Header />
      <Main title="Apostas de Futebol" apostas={apostasFutebol} />
      <Footer />
    </>
  );
};

export default Futebol;
