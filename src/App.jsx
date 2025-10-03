import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Outlet, Route, Routes } from "react-router";
import About from "./components/About";
import PostDetail from "./components/PostDetail";
import Footer from "./components/Footer";
import Layout from "./Layout";
import AddPost from "./components/AddPost";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/addPost" element={<AddPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
