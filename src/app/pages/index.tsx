"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import { PostCardProps } from "../components/PostCard";
import api from "../services/api";

const Home = () => {
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
  return (
    <>
      <Header />
      <Main title="Todas as Dicas" apostas={posts} />
      <Footer />
    </>
  );
};

export default Home;
