import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px" }} variant="body1">
          Cartsy Medicine - All right reserved - Design and Developed By RedIQ
          Inc
        </Typography>
        <Box>
          <IconButton>
            <FacebookIcon sx={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
