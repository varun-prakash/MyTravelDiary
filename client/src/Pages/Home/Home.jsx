import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
