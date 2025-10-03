import {
  Box,
  Button,
  Container,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

function AddPost() {
  return (
    <Box
      sx={{ backgroundColor: "#ebebeb", minHeight: "83vh", padding: "30px" }}
    >
      <Container
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
          display: "flex",
          flexDirection: "column",
          padding: "10px 20px",
          gap: "20px",
        }}
        maxWidth={"sm"}
      >
        <img
          style={{
            borderRadius: "4px",
            height: "150px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          src="https://images.unsplash.com/photo-1578320339840-73f0a565894c?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <TextField
          fullWidth
          label="Title"
          id="fullWidth"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", 
              },
              "&:hover fieldset": {
                borderColor: "black", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", 
              },
            },
          }}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Enter Detail"
          id="fullWidth"
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "black", textTransform: "none" }}
        >
          Create Post
        </Button>
      </Container>
    </Box>
  );
}

export default AddPost;
