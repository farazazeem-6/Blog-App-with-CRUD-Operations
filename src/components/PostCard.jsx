import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderRadius: 3, cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 10px" }}>
      <CardActionArea onClick={() => navigate(`/post/${post.id}`)}>
        <CardMedia
          component="img"
          height="200"
          image={post.imgSrc}
          alt={post.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post.title}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Typography variant="body2" color="text.secondary">
              {post.category ?? "Blog"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.date ?? "Today"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;
