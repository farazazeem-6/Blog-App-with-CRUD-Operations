import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import PostDetail from "./components/PostDetail";
import Layout from "./Layout";
import AddPost from "./components/AddPost";
import Hero from "./components/Hero";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="*" element={<Hero />} />
      </Route>
    </Routes>
  );
}

export default App;
