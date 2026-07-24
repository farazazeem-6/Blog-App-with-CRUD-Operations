import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getPosts } from "../api/postsApi";
import PostCard from "./PostCard";

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

const heroSlides = [
  {
    title: "Travel",
    description: "There's always light at the end of the tunnel.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop",
  },
  {
    title: "Sport",
    description: "Stay calm and surf.",
    image:
      "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=871&auto=format&fit=crop",
  },
  {
    title: "Fun",
    description: "Adventure awaits.",
    image:
      "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=871&auto=format&fit=crop",
  },
  {
    title: "Business",
    description: "Become a Dragonfly.",
    image:
      "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Technology",
    description: "There is always more to learn.",
    image:
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=871&auto=format&fit=crop",
  },
  {
    title: "Health",
    description: "Wellness for every day.",
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=874&auto=format&fit=crop",
  },
];

function Hero() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load posts.");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ py: 3 }}>
        <Carousel responsive={responsive} autoPlay autoPlaySpeed={4500} infinite>
          {heroSlides.map((slide) => (
            <Box
              key={slide.title}
              sx={{
                backgroundImage: `url(${slide.image})`,
                height: 200,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "yellow", fontWeight: 600 }} variant="body1">
                {slide.title}
              </Typography>
              <Typography sx={{ color: "white" }} variant="body1">
                {slide.description}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>

      <Box sx={{ px: 2, py: 2, backgroundColor: "#ebebeb" }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 2,
            }}
          >
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Hero;
