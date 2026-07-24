import { Box, Button, Container, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/postsApi";

function AddPost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim() || !text.trim()) {
      setError("Please add both a title and post content.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      await createPost({
        title: title.trim(),
        text: text.trim(),
        imgSrc:
          "https://images.unsplash.com/photo-1578321270951-88bd84d09a64?q=80&w=807&auto=format&fit=crop",
        date: new Date().toLocaleDateString(),
        category: "Lifestyle",
      });
      navigate("/");
    } catch (submitError) {
      setError(submitError.message || "Could not create the post.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#ebebeb", minHeight: "83vh", py: 6 }}>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 4,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Create a new post
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          label="Post title"
          placeholder="Add a title for your post"
        />

        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          label="Post content"
          minRows={8}
          multiline
          placeholder="Write your post content here"
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!title.trim() || !text.trim() || saving}
          sx={{ backgroundColor: "black", textTransform: "none" }}
        >
          {saving ? "Saving..." : "Create Post"}
        </Button>
      </Container>
    </Box>
  );
}

export default AddPost;
