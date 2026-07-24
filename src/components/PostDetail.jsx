import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/postsApi";

function PostDetail() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load this post.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadPost();
    }
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ py: 10 }}>
        {error}
      </Typography>
    );
  }

  if (!post) {
    return (
      <Typography align="center" sx={{ py: 10 }}>
        Post not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Box sx={{ mb: 4 }}>
        <img
          style={{
            width: "100%",
            borderRadius: 20,
            maxHeight: 520,
            objectFit: "cover",
          }}
          src={post.imgSrc}
          alt={post.title}
        />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {post.date ?? "Published today"}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: "#333", whiteSpace: "pre-line" }}>
        {post.text}
      </Typography>
      <Divider sx={{ mt: 6 }} />
    </Box>
  );
}

export default PostDetail;
