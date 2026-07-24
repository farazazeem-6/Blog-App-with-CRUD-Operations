import { Box, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "83vh", py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About GOSTO
        </Typography>
        <Typography variant="body1" paragraph>
          GOSTO is a simple blog platform built with React, Vite, React Router, and Material UI.
          Add new posts, browse featured articles, and view details for each story.
        </Typography>
        <Typography variant="body1" paragraph>
          This app demonstrates clean routing, reusable components, and a modern responsive layout.
          The data is served from a local JSON API and rendered with a polished UI.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
