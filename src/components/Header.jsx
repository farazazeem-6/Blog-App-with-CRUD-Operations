import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const StyledNavButton = styled(Button)(() => ({
  color: "black",
  fontSize: "16px",
  textTransform: "none",
}));

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Add Post", path: "/add-post" },
];

const menuActions = [
  { label: "Create Post", icon: <AddPhotoAlternateIcon fontSize="small" />, path: "/add-post" },
  { label: "My Account", icon: <SettingsIcon fontSize="small" /> },
  { label: "Wishlist", icon: <FavoriteBorderOutlinedIcon fontSize="small" /> },
  { label: "Help", icon: <QuestionMarkOutlinedIcon fontSize="small" /> },
];

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) {
      navigate(path);
    }
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
        <Typography variant="h6" color="textPrimary">
          GOSTO
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        {navItems.map((item) => (
          <StyledNavButton component={RouterLink} to={item.path} key={item.label}>
            {item.label}
          </StyledNavButton>
        ))}
      </Box>

      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleMenuOpen}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={logo} sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={() => handleMenuClose()}
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
          <MenuItem onClick={() => handleMenuClose()}>
            <Avatar src={logo} /> Eden Smith
          </MenuItem>
          <Divider />
          {menuActions.map((action) => (
            <MenuItem
              key={action.label}
              onClick={() => handleMenuClose(action.path)}
              sx={{ fontSize: "14px" }}
            >
              <ListItemIcon>{action.icon}</ListItemIcon>
              {action.label}
            </MenuItem>
          ))}
          <MenuItem onClick={() => handleMenuClose()} sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
}

export default Header;
