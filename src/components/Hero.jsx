import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Hero() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      let response = await fetch("http://localhost:3000/posts");
      let data = await response.json();
      //   console.log(data);
      setPost(data);
    }
    fetchPost();
  }, [setPost]);

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box>
        <Carousel responsive={responsive}>
          <Box
            sx={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontWeight: 600 }}
              variant="body1"
            >
              Travel
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              There's always light at the end of tunnel.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontWeight: 600 }}
              variant="body1"
            >
              Sport
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              Stay calm and surf.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontWeight: 600 }}
              variant="body1"
            >
              Fun
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              There's always light at the end of tunnel.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                'url("https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontWeight: 600 }}
              variant="body1"
            >
              Business
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              Become a Dragonfly
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontWeight: 600 }}
              variant="body1"
            >
              Technology
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              There's always light at the end of tunnel.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "yellow", fontWeight: 600 }}
              variant="body1"
            >
              Health
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              Become a Dragonfly
            </Typography>
          </Box>
        </Carousel>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: 2,
          backgroundColor: "#ebebeb",
          px: 2,
          py: 2,
        }}
      >
        {post.map((item, index) => (
          <Box
            onClick={() => navigate(`/post/${item.id}`)}
            key={index}
            sx={{
              border: "1px solid #ccc",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
              p: 2,
              borderRadius: "6px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              cursor: "pointer",
            }}
          >
            <img
              style={{ height: "200px", objectFit: "cover" }}
              src={item.imgSrc}
            />
            <Typography variant="h6">{item.title}</Typography>
            <Typography
              sx={{
                width: "100%",
                height: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="body1"
            >
              {item.text}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                sx={{
                  fontSize: "10px",
                  display: "flex",
                  gap: "2px",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon /> APRIL 05 2008
              </IconButton>
              <IconButton
                sx={{
                  fontSize: "10px",
                  display: "flex",
                  gap: "2px",
                  alignItems: "center",
                }}
              >
                <MessageIcon />
                27
              </IconButton>
              <IconButton
                sx={{
                  fontSize: "10px",
                  display: "flex",
                  gap: "2px",
                  alignItems: "center",
                }}
              >
                <ShareIcon /> Share
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Hero;
