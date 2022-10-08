import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {});
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
