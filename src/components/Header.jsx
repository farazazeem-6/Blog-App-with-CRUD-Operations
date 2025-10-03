import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Typography,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router";

const NavButton = styled(Typography)({
  color: "black",
  fontSize: "16px",
  gap: 2,
  cursor: "pointer",
  backgroundColor: "white",
});
function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/addPost");
  };

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        py: 2,
        backgroundColor: "white",
      }}
      elevation={0}
      position="static"
      color="transparent"
    >
      <Box>
        <Typography sx={{ backgroundColor: "white" }} variant="h6">
          GOSTO
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "25px",
          backgroundColor: "white",
        }}
      >
        <NavButton onClick={() => navigate("/")}>Home</NavButton>
        <NavButton >About</NavButton>
        <NavButton>Pages</NavButton>
        <NavButton>Blog</NavButton>
        <NavButton>Contact</NavButton>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                src="./src/assets/logo.png"
                sx={{ width: 32, height: 32 }}
              ></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar src="./src/assets/logo.png" /> Eden Smith
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <AddPhotoAlternateIcon fontSize="small" />
            </ListItemIcon>
            Create Post
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            My Account
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <LocalMallOutlinedIcon fontSize="small" />
            </ListItemIcon>
            My Order
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Wishlist
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>

          <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <QuestionMarkOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Help
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
}

export default Header;
